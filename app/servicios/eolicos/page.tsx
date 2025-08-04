import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Wind, Shield, Camera, Clock, Zap } from "lucide-react"

export default function EolicosPage() {
  const benefits = [
    {
      icon: Shield,
      title: "Inspección Segura",
      description: "Sin riesgo para personal técnico en alturas extremas",
    },
    {
      icon: Clock,
      title: "Rapidez",
      description: "Inspección completa en fracción del tiempo tradicional",
    },
    {
      icon: Camera,
      title: "Alta Resolución",
      description: "Imágenes 4K y termografía para detección precisa",
    },
    {
      icon: Zap,
      title: "Menor Downtime",
      description: "Inspecciones sin detener la operación del parque",
    },
  ]

  const inspectionTypes = [
    {
      title: "Inspección Visual",
      description: "Detección de grietas, erosión, daños por rayos y desgaste general",
      features: ["Imágenes 4K ultra detalladas", "Análisis de palas completo", "Documentación fotográfica"],
    },
    {
      title: "Termografía",
      description: "Identificación de puntos calientes y problemas eléctricos",
      features: ["Cámaras térmicas FLIR", "Detección de fallas eléctricas", "Mapas de temperatura"],
    },
    {
      title: "LiDAR",
      description: "Medición precisa de deformaciones y análisis estructural",
      features: ["Escaneo 3D completo", "Análisis de deformaciones", "Modelos digitales precisos"],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-900/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Inspecciones de Aerogeneradores</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Inspecciones seguras, rápidas y precisas de turbinas eólicas con tecnología de drones. Detectamos
                problemas antes de que se conviertan en fallas costosas.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-border text-white hover:text-white">
                  Programar Inspección
                </Button>
                <Button size="lg" variant="outline">
                  Ver Portfolio
                </Button>
              </div>
            </div>
           <div className="relative">
              <div className="aspect-video bg-muted rounded-lg overflow-hidden">
                <img 
                  src="/images/aero.jpg" 
                  alt="Aerogenerador inspeccionado con drone"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ventajas de las Inspecciones con Drones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolucionamos el mantenimiento de parques eólicos con tecnología avanzada que reduce costos y mejora la
              seguridad.
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

      {/* Inspection Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tipos de Inspección</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Utilizamos diferentes tecnologías según las necesidades específicas de cada inspección.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {inspectionTypes.map((type, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{type.title}</CardTitle>
                  <CardDescription>{type.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {type.features.map((feature, featureIndex) => (
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Proceso de Inspección</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Planificación</h3>
                    <p className="text-muted-foreground">
                      Análisis del sitio, condiciones meteorológicas y planificación de vuelo
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Inspección</h3>
                    <p className="text-muted-foreground">
                      Vuelo automatizado con captura de imágenes de alta resolución
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Análisis</h3>
                    <p className="text-muted-foreground">Procesamiento con IA para detección automática de defectos</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Reporte</h3>
                    <p className="text-muted-foreground">
                      Informe detallado con recomendaciones y priorización de mantenimiento
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Proceso de inspección paso a paso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Optimiza el mantenimiento de tu parque eólico</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Reduce costos de mantenimiento hasta un 30% con nuestras inspecciones preventivas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-border text-white hover:text-white">
              Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Casos de Éxito
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
