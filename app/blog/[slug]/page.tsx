import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react"
import { getBlogSlugs } from "@/lib/blog-data"
import { getPostBySlug } from "@/lib/blog"

// Genera las rutas estáticas para el export
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Intentar cargar desde Markdown primero
  let post = getPostBySlug(params.slug)
  
  // Si no encuentra MD, usar contenido hardcodeado como fallback
  if (!post) {
    post = {
      slug: params.slug,
      title: "El Futuro de la Agricultura de Precisión en Argentina",
      excerpt: "Descubre cómo los drones están revolucionando la agricultura argentina...",
      content: `<!-- Tu contenido HTML hardcodeado existente -->`,
      category: "Agricultura",
      author: "Dr. María González",
      date: "15 de Enero, 2024",
      readTime: "8 min",
      tags: ["Agricultura de Precisión", "NDVI", "Sensores Multiespectrales"],
      image: "/placeholder.svg?height=400&width=800",
    }
  }

  // Resto del componente igual...
  const relatedPosts = [
    // ... tus posts relacionados
  ]

  return (
    <div className="min-h-screen">
      {/* Todo tu JSX existente, solo cambiar: */}
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
      <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>
      
      {/* Para el contenido, procesar markdown: */}
      <div
        className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground"
        dangerouslySetInnerHTML={{ 
          __html: post.content.includes('<') ? post.content : `<div>${post.content.replace(/\n/g, '<br>')}</div>`
        }}
      />
      
      {/* Tags */}
      {post.tags && post.tags.map((tag) => (
        <Badge key={tag} variant="outline">{tag}</Badge>
      ))}
      
      {/* Resto igual... */}
    </div>
  )
}