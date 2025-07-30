'use client'

import { Card } from "@/components/ui/card"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, ArrowRight, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { useState, useMemo, useEffect } from "react"
import { useTranslations } from "@/hooks/use-translations"

interface BlogPost {
  id: string
  title: string
  excerpt: string
  category: string
  author: string
  date: string
  readTime: string
  image?: string
}

interface BlogClientProps {
  posts: BlogPost[]
}

export default function BlogClient({ posts }: BlogClientProps) {
  const { t } = useTranslations()
  
  // ✨ Estados para filtros y búsqueda
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all") // Usar string fijo en lugar de traducción
  const [visiblePosts, setVisiblePosts] = useState(6) // Cantidad de posts visibles

  // ✨ Obtener categorías únicas dinámicamente (usando las categorías originales de los posts)
  const originalCategories = [...new Set(posts.map(post => post.category))]
  
  // ✨ Crear mapeo de categorías para mostrar
  const categoryOptions = [
    { value: "all", label: t('blog.categories.all') },
    ...originalCategories.map(cat => ({ value: cat, label: cat }))
  ]

  // ✨ Filtrar posts por categoría y búsqueda
  const filteredPosts = useMemo(() => {
    let filtered = posts

    // Filtro por categoría
    if (selectedCategory !== "all") {
      filtered = filtered.filter(post => post.category === selectedCategory)
    }

    // Filtro por búsqueda
    if (searchTerm.trim()) {
      const searchLower = searchTerm.toLowerCase()
      filtered = filtered.filter(post =>
        post.title.toLowerCase().includes(searchLower) ||
        post.excerpt.toLowerCase().includes(searchLower) ||
        post.author.toLowerCase().includes(searchLower) ||
        post.category.toLowerCase().includes(searchLower)
      )
    }

    return filtered
  }, [posts, selectedCategory, searchTerm])

  // ✨ Resetear posts visibles cuando cambian los filtros
  useEffect(() => {
    setVisiblePosts(6)
  }, [selectedCategory, searchTerm])

  // ✨ Post destacado (el primero de los filtrados)
  const featuredPost = filteredPosts[0] || null

  // ✨ Posts para la grilla (excluyendo el destacado y limitando por visiblePosts)
  const gridPosts = filteredPosts.slice(1, visiblePosts + 1) // Mostrar posts filtrados según visiblePosts

  // ✨ Calcular posts restantes
  const remainingPosts = Math.max(0, filteredPosts.length - visiblePosts - 1)

  // ✨ Función para cargar más posts
  const loadMorePosts = () => {
    setVisiblePosts(prev => prev + 6)
  }

  // ✨ Función para obtener el nombre mostrado de la categoría seleccionada
  const getSelectedCategoryLabel = () => {
    const category = categoryOptions.find(cat => cat.value === selectedCategory)
    return category ? category.label : selectedCategory
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{t('blog.title')}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              {t('blog.description')}
            </p>

            {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input 
                placeholder={t('blog.search.placeholder')}
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categoryOptions.map((category) => (
              <Badge
                key={category.value}
                variant={category.value === selectedCategory ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={() => setSelectedCategory(category.value)}
              >
                {category.label}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-4">
                {selectedCategory !== "all" || searchTerm ? t('blog.featured.filtered') : t('blog.featured.title')}
              </h2>
              {(selectedCategory !== "all" || searchTerm) && (
                <p className="text-muted-foreground">
                  {searchTerm && `${t('blog.search.result')}: "${searchTerm}"`}
                  {searchTerm && selectedCategory !== "all" && " - "}
                  {selectedCategory !== "all" && `${t('blog.categories.label')}: ${getSelectedCategoryLabel()}`}
                </p>
              )}
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
                      {t('blog.actions.read')}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </Card>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">
              {selectedCategory !== "all" || searchTerm ? t('blog.results.title') : t('blog.latest.title')}
            </h2>
            <p className="text-muted-foreground">
              {t('blog.results.showing')} {gridPosts.length} {t('blog.results.of')} {filteredPosts.length} {t('blog.results.articles')}
              {selectedCategory !== "all" || searchTerm 
                ? ` (${posts.length} ${t('blog.results.total')})` 
                : ` ${t('blog.results.available')}`
              }
            </p>
            
            {/* Mostrar mensaje si no hay posts */}
            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">
                  {t('blog.empty.title')}
                </p>
                <p className="text-muted-foreground">
                  {t('blog.empty.description')}
                </p>
              </div>
            )}

            {/* Mostrar mensaje si no hay resultados con filtros */}
            {posts.length > 0 && filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-xl text-muted-foreground mb-4">
                  {t('blog.noResults.title')}
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("")
                    setSelectedCategory("all")
                  }}
                >
                  {t('blog.noResults.clear')}
                </Button>
              </div>
            )}
          </div>

          {/* Grid de posts - solo mostrar si hay resultados */}
          {filteredPosts.length > 0 && (
            <>
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
                          {t('blog.actions.readMore')}
                          <ArrowRight className="ml-2 h-3 w-3" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More Button */}
              {remainingPosts > 0 && (
                <div className="text-center mt-12">
                  <Button 
                    variant="outline" 
                    size="lg"
                    onClick={loadMorePosts}
                  >
                    {t('blog.actions.loadMore')} ({remainingPosts} {t('blog.results.remaining')})
                  </Button>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('blog.newsletter.title')}</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            {t('blog.newsletter.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input placeholder={t('blog.newsletter.placeholder')} className="bg-white text-black" />
            <Button className="glow-border text-white hover:text-white">{t('blog.newsletter.subscribe')}</Button>
          </div>
        </div>
      </section>
    </div>
  )
}