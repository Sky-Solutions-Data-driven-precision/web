'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  author: string
  authorBio?: string
  date: string
  readTime: string
  tags: string[]
  image?: string
  imageAlt?: string
  imageCredit?: string
}

interface BlogPostClientProps {
  post: BlogPost
  processedContent: string
  headings: { id: string; title: string }[]
  jsonLd: any
}

export default function BlogPostClient({ post, processedContent, headings, jsonLd }: BlogPostClientProps) {
  const { t } = useTranslations()
  
  const relatedPosts = [
    // Posts relacionados se pueden generar dinámicamente o dejar vacío
    // Para futuras versiones: implementar lógica para encontrar posts relacionados por tags/categoría
  ]

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
                {t('blog.post.backToBlog')}
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
                      <span itemProp="timeRequired">{post.readTime} {t('blog.post.readTime')}</span>
                    </div>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      {t('blog.post.share')}
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
                      <span className="font-semibold">{t('blog.post.tags')}</span>
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
                            {t('blog.post.tableOfContents')}
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
                        <CardTitle className="text-lg">{t('blog.post.interested')} {post.category}?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4 opacity-90">
                          {t('blog.post.consultDescription')}
                        </p>
                        <Button className="w-full glow-border text-white hover:text-white">{t('blog.post.freeConsult')}</Button>
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
                <h2 className="text-2xl font-bold mb-8">{t('blog.post.relatedPosts')}</h2>

                <div className="grid md:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <Card key={relatedPost.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <Badge variant="outline" className="w-fit">
                          {relatedPost.category}
                        </Badge>
                        <CardTitle className="text-lg">{relatedPost.title}</CardTitle>
                        <CardDescription>{relatedPost.readTime} {t('blog.post.readTime')}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <Link href={`/blog/${relatedPost.id}`}>
                          <Button variant="outline" size="sm" className="w-full bg-transparent">
                            {t('blog.post.readArticle')}
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