import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react"
import { getBlogSlugs } from "@/lib/blog-data"
import { getPostBySlug } from "@/lib/blog"
import { Metadata } from 'next'

// Genera las rutas estáticas para el export
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    slug: slug,
  }))
}

// ✨ NUEVO: Genera metadata SEO automática para cada post
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
  // Intentar cargar desde Markdown primero
  let post = getPostBySlug(params.slug)
  
  // Si no encuentra MD, usar contenido hardcodeado como fallback
  if (!post) {
    post = {
      slug: params.slug,
      title: "El Futuro de la Agricultura de Precisión en Argentina",
      excerpt: "Descubre cómo los drones están revolucionando la agricultura argentina con tecnologías de mapeo multiespectral y análisis de datos avanzados.",
      content: `<!-- Tu contenido hardcodeado existente -->`,
      category: "Agricultura",
      author: "Dr. María González",
      authorBio: "Especialista en Agricultura de Precisión con más de 15 años de experiencia.",
      date: "15 de Enero, 2024",
      readTime: "8 min",
      tags: ["Agricultura de Precisión", "NDVI", "Sensores Multiespectrales", "Productividad", "Sostenibilidad"],
      image: "/placeholder.svg?height=400&width=800",
    }
  }

  const relatedPosts = [
    {
      id: "ndvi-analisis-cultivos",
      title: "Análisis NDVI: Interpretando la Salud de tus Cultivos",
      category: "Agricultura",
      readTime: "6 min",
    },
    {
      id: "sensores-multiespectrales-guia",
      title: "Guía Completa de Sensores Multiespectrales",
      category: "Tecnología",
      readTime: "10 min",
    },
    {
      id: "roi-agricultura-precision",
      title: "ROI en Agricultura de Precisión: Casos Reales",
      category: "Agricultura",
      readTime: "7 min",
    },
  ]

  // ✨ NUEVO: JSON-LD structured data para SEO
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
      {/* ✨ NUEVO: JSON-LD Script para structured data */}
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
                {/* ✨ MEJORADO: Estructura semántica HTML5 */}
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
                  {/* ✨ MEJORADO: Meta tags invisibles para SEO */}
                  <meta itemProp="headline" content={post.title} />
                  <meta itemProp="description" content={post.excerpt} />
                  <meta itemProp="datePublished" content={post.date} />
                  <meta itemProp="author" content={post.author} />
                  <meta itemProp="publisher" content="Sky Solutions" />
                  
                  <div
                    itemProp="articleBody"
                    className="prose prose-lg prose-slate dark:prose-invert max-w-none 
                             prose-headings:text-foreground prose-headings:font-bold
                             prose-h1:text-3xl prose-h1:mb-6 prose-h1:mt-8
                             prose-h2:text-2xl prose-h2:mb-4 prose-h2:mt-8 prose-h2:border-b prose-h2:border-muted prose-h2:pb-2
                             prose-h3:text-xl prose-h3:mb-3 prose-h3:mt-6 prose-h3:text-primary
                             prose-p:text-foreground prose-p:leading-relaxed prose-p:mb-4
                             prose-ul:my-4 prose-li:text-foreground prose-li:mb-2
                             prose-strong:text-foreground prose-strong:font-semibold
                             prose-a:text-primary prose-a:no-underline hover:prose-a:underline
                             prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:p-4 prose-blockquote:rounded-r-lg
                             prose-code:bg-muted prose-code:px-2 prose-code:py-1 prose-code:rounded prose-code:text-sm"
                    dangerouslySetInnerHTML={{ __html: post.content }}
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

                {/* Sidebar - igual que antes */}
                <aside className="lg:col-span-1">
                  <div className="sticky top-24 space-y-6">
                    {/* Table of Contents */}
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                          <BookOpen className="h-4 w-4" />
                          Contenido
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <nav className="space-y-2 text-sm">
                          <Link href="#beneficios" className="block text-muted-foreground hover:text-primary">
                            Beneficios Comprobados
                          </Link>
                          <Link href="#tecnologias" className="block text-muted-foreground hover:text-primary">
                            Tecnologías Clave
                          </Link>
                          <Link href="#casos-exito" className="block text-muted-foreground hover:text-primary">
                            Casos de Éxito
                          </Link>
                          <Link href="#futuro-ia" className="block text-muted-foreground hover:text-primary">
                            El Futuro: Integración con IA
                          </Link>
                          <Link href="#conclusion" className="block text-muted-foreground hover:text-primary">
                            Conclusión
                          </Link>
                        </nav>
                      </CardContent>
                    </Card>

                    {/* CTA */}
                    <Card className="bg-primary text-primary-foreground">
                      <CardHeader>
                        <CardTitle className="text-lg">¿Interesado en Agricultura de Precisión?</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm mb-4 opacity-90">
                          Contactanos para una consulta gratuita sobre cómo implementar estas tecnologías en tu campo.
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

        {/* Related Posts */}
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
      </div>
    </>
  )
}