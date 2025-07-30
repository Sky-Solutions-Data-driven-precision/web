import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react"
import { getBlogSlugs } from "@/lib/blog-data"
import { getPostBySlug } from "@/lib/blog"
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import BlogPostClient from './blog-post-client'

// Genera las rutas estáticas para el export
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    slug: slug,
  }))
}

// ✨ NUEVO: Función para extraer H2s del contenido HTML y crear anclas
function extractHeadings(htmlContent: string) {
  const h2Regex = /<h2[^>]*>(.*?)<\/h2>/gi
  const headings: { id: string; title: string }[] = []
  let match

  while ((match = h2Regex.exec(htmlContent)) !== null) {
    const title = match[1].replace(/<[^>]*>/g, '') // Remover tags HTML
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '') // Remover caracteres especiales
      .replace(/\s+/g, '-') // Reemplazar espacios con guiones
      .trim()
    
    headings.push({ id, title })
  }

  return headings
}

// ✨ NUEVO: Función para agregar IDs a los H2s en el HTML
function addHeadingIds(htmlContent: string) {
  return htmlContent.replace(/<h2([^>]*)>(.*?)<\/h2>/gi, (match, attributes, content) => {
    const title = content.replace(/<[^>]*>/g, '')
    const id = title
      .toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '-')
      .trim()
    
    return `<h2${attributes} id="${id}">${content}</h2>`
  })
}

// ✨ Genera metadata SEO automática para cada post
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug)
  
  if (!post) {
    return {
      title: 'Post no encontrado - Sky Solutions',
      description: 'El artículo solicitado no fue encontrado.'
    }
  }

  const baseUrl = 'https://skysolutions.com.ar'
  const postUrl = `${baseUrl}/blog/${post.slug}`
  
  return {
    title: `${post.title} | Sky Solutions Blog`,
    description: post.excerpt,
    keywords: post.tags?.join(', ') || 'drones, tecnología, Sky Solutions',
    authors: [{ name: post.author }],
    creator: post.author,
    publisher: 'Sky Solutions',
    
    // Open Graph
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: postUrl,
      siteName: 'Sky Solutions',
      locale: 'es_AR',
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
      section: post.category,
      tags: post.tags,
      images: [
        {
          url: post.image ? `${baseUrl}${post.image}` : `${baseUrl}/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        }
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      creator: '@skysolutions',
      images: [post.image ? `${baseUrl}${post.image}` : `${baseUrl}/og-default.jpg`],
    },
    
    // Canonical y alternates
    alternates: {
      canonical: postUrl,
    },
    
    // Robots
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  }
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Intentar cargar desde Markdown
  const post = getPostBySlug(params.slug)
  
  // Si no encuentra el post, usar la página 404 global
  if (!post) {
    notFound()
  }

  // ✨ NUEVO: Procesar contenido para agregar IDs a H2s
  const processedContent = addHeadingIds(post.content)
  
  // ✨ NUEVO: Extraer headings para el índice
  const headings = extractHeadings(processedContent)

  const relatedPosts = [
    // Posts relacionados se pueden generar dinámicamente o dejar vacío
    // Para futuras versiones: implementar lógica para encontrar posts relacionados por tags/categoría
  ]

  // ✨ JSON-LD structured data para SEO
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://skysolutions.com.ar${post.image}` : 'https://skysolutions.com.ar/og-default.jpg',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
      description: post.authorBio,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Sky Solutions',
      url: 'https://skysolutions.com.ar',
      logo: {
        '@type': 'ImageObject',
        url: 'https://skysolutions.com.ar/logo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://skysolutions.com.ar/blog/${post.slug}`,
    },
    keywords: post.tags?.join(', '),
    articleSection: post.category,
    inLanguage: 'es-AR',
  }

  return (
    <BlogPostClient 
      post={post}
      processedContent={processedContent}
      headings={headings}
      jsonLd={jsonLd}
    />
  )
}