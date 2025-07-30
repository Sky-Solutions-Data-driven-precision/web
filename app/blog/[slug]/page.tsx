import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react"
import { getBlogSlugs } from "@/lib/blog-data"
import { getPostBySlug } from "@/lib/blog"
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

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
    <>
      {/* ✨ JSON-LD Script para structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="min-h-screen">
        {/* Header */}
        <section className="py-8 border-b">
          <div className="container mx-auto px-4">
            <Link href="/blog">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Volver al Blog
              </Button>
            </Link>
          </div>
        </section>

        {/* Article Header */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6">
                <Badge className="mb-4">{post.category}</Badge>
                <header>
                  <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
                  <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

                  <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      <span itemProp="author">{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4" />
                      <time dateTime={post.date} itemProp="datePublished">{post.date}</time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4" />
                      <span itemProp="timeRequired">{post.readTime} de lectura</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Compartir
                    </Button>
                  </div>
                </header>
              </div>

              {/* Featured Image */}
             <figure className="aspect-video bg-muted rounded-lg mb-8">
                <img src={post.image} alt={post.imageAlt || post.title} className="w-full h-full object-cover rounded-lg" />
                {post.imageCredit && (
                  <figcaption className="text-sm text-muted-foreground text-center mt-2">
                    {post.imageCredit}
                  </figcaption>
                )}
              </figure>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-4 gap-8">
                {/* Main Content */}
                <article className="lg:col-span-3" itemScope itemType="http://schema.org/BlogPosting">
                  {/* ✨ Meta tags invisibles para SEO */}
                  <meta itemProp="headline" content={post.title} />
                  <meta itemProp="description" content={post.excerpt} />
                  <meta itemProp="datePublished" content={post.date} />
                  <meta itemProp="author" content={post.author} />
                  <meta itemProp="publisher" content="Sky Solutions" />
                  
                  {/* ✨ MEJORADO: Estilos personalizados para contenido Markdown */}
                  <div
                    itemProp="articleBody"
                    className="blog-content"
                    dangerouslySetInnerHTML={{ __html: processedContent }}
                  />

                  {/* Tags */}
                  <footer className="mt-12 pt-8 border-t">
                    <div className="flex items-center gap-2 mb-4">
                      <Tag className="h-4 w-4" />
                      <span className="font-semibold">Tags:</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {post.tags && post.tags.map((tag) => (
                        <Badge key={tag} variant="outline" itemProp="keywords">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </footer>

                  {/* Author Bio */}
                  <Card className="mt-8" itemScope itemType="http://schema.org/Person">
                    <CardHeader>
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                          <User className="h-8 w-8 text-muted-foreground" />
                        </div>
                        <div>
                          <CardTitle className="text-lg" itemProp="name">{post.author}</CardTitle>
                          <CardDescription itemProp="description">
                            {post.authorBio || "Especialista en Agricultura de Precisión con más de 15 años de experiencia en implementación de tecnologías avanzadas en el sector agropecuario."}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                </article>

                {/* Sidebar */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Table of Contents - ✨ MEJORADO: Dinámico basado en H2s */}
                    {headings.length > 0 && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg flex items-center gap-2">
                            <BookOpen className="h-4 w-4" />
                            Contenido
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <nav className="space-y-2 text-sm">
                            {headings.map((heading) => (
                              <Link 
                                key={heading.id} 
                                href={`#${heading.id}`} 
                                className="block text-muted-foreground hover:text-primary transition-colors"
                              >
                                {heading.title}
                              </Link>
                            ))}
                          </nav>
                        </CardContent>
                      </Card>
                    )}

                    {/* CTA */}
                    <Card className="bg-primary text-primary-foreground">
                      <CardHeader>
                        <CardTitle className="text-lg">¿Interesado en {post.category}?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4 opacity-90">
                          Contáctanos para una consulta gratuita sobre cómo implementar estas tecnologías.
                        </p>
                        <Button className="w-full glow-border text-white hover:text-white">Consulta Gratuita</Button>
                      </CardContent>
                    </Card>
                  </div>
                </aside>
              </div>
            </div>
          </div>
        </section>

        {/* Related Posts - Solo mostrar si hay posts relacionados */}
        {relatedPosts.length > 0 && (
          <section className="py-16 bg-muted/30">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-2xl font-bold mb-8">Artículos Relacionados</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit">
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                        <CardDescription>{relatedPost.readTime} de lectura</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href={`/blog/${relatedPost.id}`}>
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            Leer artículo
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
      </div>
    </>
  )
}