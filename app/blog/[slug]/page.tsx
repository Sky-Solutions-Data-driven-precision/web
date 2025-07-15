import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, User, Clock, ArrowLeft, Share2, BookOpen, Tag } from "lucide-react"
import { getBlogSlugs } from "@/lib/blog-data"

// Genera las rutas estáticas para el export
export function generateStaticParams() {
  return getBlogSlugs().map((slug) => ({
    slug: slug,
  }))
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // En una implementación real, esto vendría de una base de datos o CMS
  const post = {
    id: "agricultura-precision-2024",
    title: "El Futuro de la Agricultura de Precisión en Argentina",
    excerpt:
      "Descubre cómo los drones están revolucionando la agricultura argentina con tecnologías de mapeo multiespectral y análisis de datos avanzados.",
    content: `
      <p>La agricultura de precisión está transformando la manera en que los productores argentinos gestionan sus cultivos. Con la implementación de tecnología de drones equipados con sensores multiespectrales, los agricultores pueden ahora tomar decisiones basadas en datos precisos y en tiempo real.</p>

      <h2>Beneficios Comprobados</h2>
      <p>Nuestros estudios en más de 50,000 hectáreas durante 2023 demuestran que la implementación de agricultura de precisión con drones genera:</p>
      <ul>
        <li>Aumento del rendimiento promedio del 15-20%</li>
        <li>Reducción del uso de agroquímicos del 25-30%</li>
        <li>Optimización del riego con ahorro del 40% de agua</li>
        <li>Detección temprana de plagas y enfermedades</li>
      </ul>

      <h2>Tecnologías Clave</h2>
      <p>Los drones utilizados en agricultura de precisión incorporan sensores avanzados que capturan información invisible al ojo humano:</p>

      <h3>Sensores Multiespectrales</h3>
      <p>Capturan imágenes en diferentes longitudes de onda, permitiendo calcular índices de vegetación como NDVI, NDRE y GNDVI que revelan el estado de salud de los cultivos.</p>

      <h3>Cámaras Térmicas</h3>
      <p>Detectan variaciones de temperatura que indican estrés hídrico, problemas de riego o enfermedades antes de que sean visibles.</p>

      <h3>Sensores Hiperespectrales</h3>
      <p>Proporcionan análisis detallado de la composición química de las plantas, permitiendo detectar deficiencias nutricionales específicas.</p>

      <h2>Casos de Éxito en Argentina</h2>
      <p>Hemos trabajado con productores de soja, maíz, trigo y cultivos intensivos en las principales regiones agrícolas del país:</p>

      <h3>Región Pampeana</h3>
      <p>En campos de soja de más de 1,000 hectáreas, implementamos sistemas de monitoreo que permitieron identificar zonas de bajo rendimiento y optimizar la aplicación variable de fertilizantes, resultando en un aumento promedio del 18% en la productividad.</p>

      <h3>NOA - Cultivos Intensivos</h3>
      <p>En cultivos de citrus y hortalizas, el monitoreo con drones permitió detectar problemas fitosanitarios 2-3 semanas antes que los métodos tradicionales, reduciendo las pérdidas por plagas en un 35%.</p>

      <h2>El Futuro: Integración con IA</h2>
      <p>La próxima evolución incluye la integración de inteligencia artificial para:</p>
      <ul>
        <li>Predicción automática de rendimientos</li>
        <li>Recomendaciones de manejo personalizadas</li>
        <li>Detección automática de malezas y plagas</li>
        <li>Optimización de rutas de aplicación</li>
      </ul>

      <h2>Conclusión</h2>
      <p>La agricultura de precisión con drones no es solo una tendencia tecnológica, sino una necesidad para la agricultura moderna. Los productores que adopten estas tecnologías tendrán ventajas competitivas significativas en términos de productividad, sostenibilidad y rentabilidad.</p>
    `,
    category: "Agricultura",
    author: "Dr. María González",
    date: "15 de Enero, 2024",
    readTime: "8 min",
    tags: ["Agricultura de Precisión", "NDVI", "Sensores Multiespectrales", "Productividad", "Sostenibilidad"],
    image: "/placeholder.svg?height=400&width=800",
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

  return (
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
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
              <p className="text-xl text-muted-foreground mb-6">{post.excerpt}</p>

              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  {post.author}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  {post.readTime} de lectura
                </div>
                <Button variant="outline" size="sm">
                  <Share2 className="h-4 w-4 mr-2" />
                  Compartir
                </Button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="aspect-video bg-muted rounded-lg flex items-center justify-center mb-8">
              <span className="text-muted-foreground">Imagen principal del artículo</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <div
                  className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground prose-li:text-foreground prose-strong:text-foreground"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Tags */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center gap-2 mb-4">
                    <Tag className="h-4 w-4" />
                    <span className="font-semibold">Tags:</span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Author Bio */}
                <Card className="mt-8">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center">
                        <User className="h-8 w-8 text-muted-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{post.author}</CardTitle>
                        <CardDescription>
                          Especialista en Agricultura de Precisión con más de 15 años de experiencia en implementación
                          de tecnologías avanzadas en el sector agropecuario.
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
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
              </div>
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
  )
}