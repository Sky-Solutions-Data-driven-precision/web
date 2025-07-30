import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getAllPosts } from "@/lib/blog"
import { getBlogSlugs } from "@/lib/blog-data"
import BlogClient from "./blog-client"

// ✨ Server Component que obtiene los datos
export default function BlogPage() {
  // ✨ Obtener posts dinámicamente en el servidor
  const dynamicPosts = getAllPosts()
  
  // ✨ Posts de fallback - SOLO para casos de emergencia si no hay archivos MD
  const fallbackPosts = [
    // Array vacío - solo usar posts de Markdown
  ]

  // ✨ Convertir posts de Markdown al formato esperado
  const convertedPosts = dynamicPosts.map(post => ({
    id: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    category: post.category,
    author: post.author,
    date: post.date,
    readTime: post.readTime,
    image: post.image || "/placeholder.svg?height=300&width=400",
  }))

  // ✨ Combinar posts dinámicos con fallback, priorizando los dinámicos
  const allPosts = [...convertedPosts, ...fallbackPosts]
  
  // ✨ Eliminar duplicados por ID y mantener solo versiones únicas
  const uniquePosts = allPosts.filter((post, index, self) => 
    index === self.findIndex(p => p.id === post.id)
  )

  // ✨ Ordenar por fecha (más recientes primero)
  const sortedPosts = uniquePosts.sort((a, b) => {
    const dateA = new Date(a.date.replace(' de ', ' ').replace(', ', ' '))
    const dateB = new Date(b.date.replace(' de ', ' ').replace(', ', ' '))
    return dateB.getTime() - dateA.getTime()
  })

  // ✨ Pasar datos al componente cliente
  return <BlogClient posts={sortedPosts} />
}