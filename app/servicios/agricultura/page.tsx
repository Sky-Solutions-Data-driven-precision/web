import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Wheat, BarChart3, Droplets, Bug, MapPin } from "lucide-react"

export default function AgriculturaPage() {
  const benefits = [
    {
      icon: BarChart3,
      title: "Análisis de Rendimiento",
      description: "Mapeo de zonas productivas y análisis de variabilidad espacial",
    },
    {
      icon: Droplets,
      title: "Gestión de Riego",
      description: "Detección de estrés hídrico y optimización del uso del agua",
    },
    {
      icon: Bug,
      title: "Control de Plagas",
      description: "Identificación temprana de enfermedades y plagas",
    },
    {
      icon: MapPin,
      title: "Mapeo de Cultivos",
      description: "Cartografía precisa y seguimiento temporal de cultivos",
    },
  ]

  const services = [
    "Mapeo multiespectral de cultivos",
    "Análisis de índices de vegetación (NDVI, NDRE)",
    "Detección de estrés hídrico y nutricional",
    "Conteo y estimación de plantas",
    "Monitoreo de plagas y enfermedades",
    "Evaluación de daños por granizo o sequía",
    "Planificación de aplicaciones variables",
    "Informes técnicos detallados",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-green-900/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Agricultura y Ganadería de Precisión</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Optimiza tus cultivos con tecnología de drones. Análisis multiespectrales, mapeo de rendimiento y
                gestión inteligente de recursos para maximizar la productividad.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-border text-white hover:text-white">
                  Solicitar Análisis
                </Button>
                <Button size="lg" variant="outline">
                  Ver Casos de Estudio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/images/campo-ndvi.jpg" 
                  alt="Campo con análisis NDVI"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                  Foto de Etienne Girardet en Unsplash
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Beneficios de la Agricultura de Precisión</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestros drones equipados con sensores multiespectrales te permiten tomar decisiones basadas en datos
              precisos para optimizar tu producción.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Servicios Especializados</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Ofrecemos una gama completa de servicios de agricultura de precisión adaptados a las necesidades
                específicas de tu operación.
              </p>

              <div className="space-y-4">
                {services.map((service, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Drone sobrevolando cultivo</span>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Mapa de índices NDVI</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para optimizar tu producción agrícola?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Contactanos para una consulta gratuita y descubre cómo nuestros servicios pueden aumentar el rendimiento de
            tus cultivos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-border text-white hover:text-white">
              Consulta Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Descargar Brochure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
