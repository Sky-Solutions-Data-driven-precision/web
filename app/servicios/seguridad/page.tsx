import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Shield, Eye, Clock, AlertTriangle, Camera, Zap } from "lucide-react"

export default function SeguridadPage() {
  const benefits = [
    {
      icon: Eye,
      title: "Vigilancia 24/7",
      description: "Monitoreo continuo de perímetros y áreas críticas",
    },
    {
      icon: Zap,
      title: "Respuesta Rápida",
      description: "Despliegue inmediato ante alertas de seguridad",
    },
    {
      icon: Camera,
      title: "Visión Nocturna",
      description: "Cámaras térmicas para operaciones en cualquier condición",
    },
    {
      icon: Shield,
      title: "Seguridad Personal",
      description: "Eliminamos riesgos para el personal de seguridad",
    },
  ]

  const securityServices = [
    {
      title: "Vigilancia Perimetral",
      description: "Monitoreo automatizado de perímetros industriales y comerciales",
      features: [
        "Patrullaje automatizado programable",
        "Detección de intrusos con IA",
        "Alertas en tiempo real",
        "Grabación de evidencia HD",
      ],
    },
    {
      title: "Inspección de Instalaciones",
      description: "Revisión de infraestructura crítica y detección de anomalías",
      features: [
        "Inspección de torres y antenas",
        "Monitoreo de tanques y silos",
        "Detección de daños estructurales",
        "Termografía para puntos calientes",
      ],
    },
    {
      title: "Respuesta a Emergencias",
      description: "Apoyo inmediato en situaciones de crisis y emergencias",
      features: [
        "Evaluación rápida de situaciones",
        "Búsqueda y rescate",
        "Monitoreo de incendios",
        "Coordinación con fuerzas de seguridad",
      ],
    },
  ]

  const industries = [
    "Plantas industriales y petroquímicas",
    "Puertos y terminales logísticas",
    "Aeropuertos y bases militares",
    "Centros de datos y telecomunicaciones",
    "Instalaciones energéticas",
    "Complejos residenciales",
    "Eventos masivos y espectáculos",
    "Fronteras y aduanas",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-red-900/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Seguridad y Monitoreo</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Protege tus instalaciones con sistemas de vigilancia aérea avanzados. Monitoreo 24/7, respuesta rápida y
                tecnología de detección inteligente.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-border text-white hover:text-white">
                  Evaluar Seguridad
                </Button>
                <Button size="lg" variant="outline">
                  Ver Casos de Uso
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Shield className="h-24 w-24 text-muted-foreground" />
                <span className="ml-4 text-muted-foreground">Imagen: Drone de seguridad en patrullaje</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ventajas de la Seguridad Aérea</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestros sistemas de drones de seguridad ofrecen capacidades que superan los métodos tradicionales de
              vigilancia.
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
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios de Seguridad Especializados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Soluciones integrales de seguridad aérea adaptadas a las necesidades específicas de cada instalación.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {securityServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Tecnología de Vanguardia</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Camera className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Cámaras de Alta Resolución</h3>
                    <p className="text-muted-foreground">
                      Zoom óptico 30x y cámaras térmicas FLIR para visión nocturna
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <AlertTriangle className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Detección Inteligente</h3>
                    <p className="text-muted-foreground">
                      IA para reconocimiento de personas, vehículos y comportamientos sospechosos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Autonomía Extendida</h3>
                    <p className="text-muted-foreground">
                      Hasta 55 minutos de vuelo continuo con estaciones de carga automática
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Shield className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Comunicación Segura</h3>
                    <p className="text-muted-foreground">Enlaces encriptados y redundancia de comunicaciones</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Centro de control de seguridad</span>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Vista térmica nocturna</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Instalaciones industriales protegidas</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Sectores que Protegemos</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestros sistemas de seguridad aérea se adaptan a las necesidades específicas de diferentes industrias y
                tipos de instalaciones.
              </p>

              <div className="space-y-4">
                {industries.map((industry, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Protege tus instalaciones con tecnología avanzada</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Evaluamos tu situación actual de seguridad y diseñamos una solución personalizada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-border text-white hover:text-white">
              Evaluación Gratuita
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Contactar Especialista
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
