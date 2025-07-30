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
  
  // ✨ Posts de fallback (mantenemos algunos hardcodeados como respaldo)
  const fallbackPosts = [
    {
      id: "inspeccion-eolicos-ia",
      title: "IA en Inspecciones de Aerogeneradores: Casos de Éxito",
      excerpt:
        "Cómo la inteligencia artificial está mejorando la detección de fallas en turbinas eólicas, reduciendo costos de mantenimiento hasta un 40%.",
      category: "Energía Eólica",
      author: "Ing. Carlos Ruiz",
      date: "10 de Enero, 2024",
      readTime: "6 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "topografia-construccion",
      title: "Topografía con Drones: Precisión Centimétrica en Construcción",
      excerpt:
        "Análisis detallado de cómo los levantamientos topográficos con drones están transformando la industria de la construcción.",
      category: "Topografía",
      author: "Arq. Ana Martínez",
      date: "5 de Enero, 2024",
      readTime: "7 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "seguridad-industrial-drones",
      title: "Seguridad Industrial: Monitoreo 24/7 con Drones Autónomos",
      excerpt:
        "Implementación de sistemas de vigilancia aérea en plantas industriales: beneficios, desafíos y mejores prácticas.",
      category: "Seguridad",
      author: "Lic. Roberto Silva",
      date: "28 de Diciembre, 2023",
      readTime: "5 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "investigacion-cientifica-drones",
      title: "Drones en Investigación Científica: Nuevas Fronteras",
      excerpt:
        "Exploración de aplicaciones emergentes de drones en investigación ambiental, geológica y biológica en universidades argentinas.",
      category: "Ciencia",
      author: "Dr. Patricia López",
      date: "20 de Diciembre, 2023",
      readTime: "9 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "regulaciones-anac-2024",
      title: "Nuevas Regulaciones ANAC 2024: Lo que Debes Saber",
      excerpt:
        "Guía completa sobre las últimas regulaciones de ANAC para operaciones comerciales con drones en Argentina.",
      category: "Regulaciones",
      author: "Abog. Miguel Torres",
      date: "15 de Diciembre, 2023",
      readTime: "10 min",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      id: "tendencias-drones-2024",
      title: "Tendencias en Tecnología de Drones para 2024",
      excerpt:
        "Análisis de las principales innovaciones tecnológicas que marcarán el futuro de la industria de drones este año.",
      category: "Tecnología",
      author: "Ing. Laura Fernández",
      date: "10 de Diciembre, 2023",
      readTime: "8 min",
      image: "/placeholder.svg?height=300&width=400",
    },
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