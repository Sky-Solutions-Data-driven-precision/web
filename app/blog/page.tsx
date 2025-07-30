import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { getAllPosts } from "@/lib/blog"
import { getBlogSlugs } from "@/lib/blog-data"

export default function BlogPage() {
  // ✨ NUEVO: Obtener posts dinámicamente
  const dynamicPosts = getAllPosts()
  
  // ✨ NUEVO: Posts de fallback (mantenemos algunos hardcodeados como respaldo)
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

  // ✨ NUEVO: Convertir posts de Markdown al formato esperado
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

  // ✨ NUEVO: Combinar posts dinámicos con fallback, priorizando los dinámicos
  const allPosts = [...convertedPosts, ...fallbackPosts]
  
  // ✨ NUEVO: Eliminar duplicados por ID y mantener solo versiones únicas
  const uniquePosts = allPosts.filter((post, index, self) => 
    index === self.findIndex(p => p.id === post.id)
  )

  // ✨ NUEVO: Ordenar por fecha (más recientes primero)
  const sortedPosts = uniquePosts.sort((a, b) => {
    const dateA = new Date(a.date.replace(' de ', ' ').replace(', ', ' '))
    const dateB = new Date(b.date.replace(' de ', ' ').replace(', ', ' '))
    return dateB.getTime() - dateA.getTime()
  })

  // ✨ NUEVO: Post destacado (el más reciente)
  const featuredPost = sortedPosts[0] || {
    id: "agricultura-precision-2024",
    title: "El Futuro de la Agricultura de Precisión en Argentina",
    excerpt:
      "Descubre cómo los drones están revolucionando la agricultura argentina con tecnologías de mapeo multiespectral y análisis de datos avanzados.",
    category: "Agricultura",
    author: "Dr. María González",
    date: "15 de Enero, 2024",
    readTime: "8 min",
    image: "/placeholder.svg?height=400&width=600",
  }

  // ✨ NUEVO: Posts para la grilla (excluyendo el destacado)
  const gridPosts = sortedPosts.slice(1, 7) // Mostrar los siguientes 6 posts

  // ✨ NUEVO: Obtener categorías únicas dinámicamente
  const allCategories = ["Todos", ...new Set(sortedPosts.map(post => post.category))]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog Sky Solutions</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Insights, tendencias y casos de éxito en el mundo de los drones profesionales. Mantente actualizado con
              las últimas innovaciones del sector.
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input placeholder="Buscar artículos..." className="pl-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {allCategories.map((category) => (
              <Badge
                key={category}
                variant={category === "Todos" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Artículo Destacado</h2>
          </div>

          <Card className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="aspect-video lg:aspect-auto bg-muted flex items-center justify-center">
                {featuredPost.image ? (
                  <img 
                    src={featuredPost.image} 
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <span className="text-muted-foreground">Imagen destacada del blog</span>
                )}
              </div>
              <div className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <Badge>{featuredPost.category}</Badge>
                  <div className="flex items-center text-sm text-muted-foreground gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      {featuredPost.author}
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-4">{featuredPost.title}</h3>
                <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>

                <Link href={`/blog/${featuredPost.id}`}>
                  <Button className="glow-border text-white hover:text-white">
                    Leer Artículo
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Últimos Artículos</h2>
            <p className="text-muted-foreground">
              Mostrando {gridPosts.length} de {sortedPosts.length} artículos disponibles
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gridPosts.map((post) => (
              <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  {post.image ? (
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-muted-foreground">Imagen del artículo</span>
                  )}
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{post.title}</CardTitle>
                  <CardDescription>{post.excerpt}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-sm text-muted-foreground gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </div>
                    </div>
                  </div>

                  <Link href={`/blog/${post.id}`} className="block mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-transparent"
                    >
                      Leer más
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More Button */}
          {sortedPosts.length > 7 && (
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Cargar más artículos ({sortedPosts.length - 7} restantes)
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mantente Actualizado</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Suscríbete a nuestro newsletter y recibe los últimos artículos, casos de estudio y tendencias del sector
            directamente en tu email.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder="Tu email" className="bg-white text-black" />
            <Button className="glow-border text-white hover:text-white">Suscribirse</Button>
          </div>
        </div>
      </section>
    </div>
  )
}