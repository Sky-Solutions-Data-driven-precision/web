import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Map, Ruler, Building, Calculator, Camera } from "lucide-react"

export default function TopografiaPage() {
  const benefits = [
    {
      icon: Ruler,
      title: "Precisión Centimétrica",
      description: "Mediciones con precisión de hasta 2-3 cm con RTK/PPK",
    },
    {
      icon: Camera,
      title: "Cobertura Rápida",
      description: "Relevamiento de grandes áreas en tiempo récord",
    },
    {
      icon: Calculator,
      title: "Cálculos Automáticos",
      description: "Volúmenes, áreas y distancias calculados automáticamente",
    },
    {
      icon: Building,
      title: "Modelos 3D",
      description: "Generación de modelos digitales de terreno y superficie",
    },
  ]

  const services = [
    {
      title: "Levantamiento Topográfico",
      description: "Mapeo preciso de terrenos para proyectos de construcción e ingeniería",
      features: [
        "Curvas de nivel de alta precisión",
        "Puntos de control geodésicos",
        "Coordenadas UTM y geográficas",
        "Certificación profesional",
      ],
    },
    {
      title: "Cálculo de Volúmenes",
      description: "Medición precisa de movimientos de tierra y materiales",
      features: [
        "Volúmenes de corte y relleno",
        "Seguimiento de stockpiles",
        "Comparación temporal",
        "Reportes detallados",
      ],
    },
    {
      title: "Modelos Digitales",
      description: "Creación de modelos 3D para análisis y visualización",
      features: [
        "Modelo Digital de Terreno (MDT)",
        "Modelo Digital de Superficie (MDS)",
        "Ortomosaicos georreferenciados",
        "Nubes de puntos densas",
      ],
    },
  ]

  const applications = [
    "Proyectos de construcción y obra civil",
    "Planificación urbana y catastro",
    "Minería y canteras",
    "Agricultura de precisión",
    "Estudios de impacto ambiental",
    "Gestión de recursos hídricos",
    "Monitoreo de infraestructura",
    "Arqueología y patrimonio",
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-orange-900/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Relevamientos Topográficos</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Levantamientos topográficos de alta precisión con drones. Mapeo rápido, modelos 3D detallados y cálculos
                volumétricos para proyectos de ingeniería.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-border text-white hover:text-white">
                  Solicitar Relevamiento
                </Button>
                <Button size="lg" variant="outline">
                  Ver Ejemplos
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Map className="h-24 w-24 text-muted-foreground" />
                <span className="ml-4 text-muted-foreground">Imagen: Ortomosaico topográfico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ventajas de la Topografía con Drones</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Revolucionamos los levantamientos topográficos con tecnología que combina velocidad, precisión y
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

      {/* Services Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Servicios Topográficos Especializados</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ofrecemos una gama completa de servicios topográficos adaptados a las necesidades específicas de cada
              proyecto.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
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

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Nuestro Proceso de Trabajo</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Planificación del Vuelo</h3>
                    <p className="text-muted-foreground">
                      Diseño de misión con solapamiento óptimo y puntos de control
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Establecimiento de GCPs</h3>
                    <p className="text-muted-foreground">
                      Colocación de puntos de control geodésicos para máxima precisión
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Captura de Datos</h3>
                    <p className="text-muted-foreground">
                      Vuelo automatizado con captura fotogramétrica de alta resolución
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Procesamiento</h3>
                    <p className="text-muted-foreground">
                      Generación de ortomosaicos, modelos 3D y cálculos volumétricos
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                    5
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">Entrega</h3>
                    <p className="text-muted-foreground">
                      Planos técnicos, modelos digitales y certificación profesional
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Proceso de relevamiento topográfico</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Aplicaciones topográficas</span>
              </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Aplicaciones</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Nuestros servicios topográficos se adaptan a una amplia variedad de sectores y tipos de proyectos.
              </p>

              <div className="space-y-4">
                {applications.map((application, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{application}</span>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Necesitas un relevamiento topográfico preciso?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Obtén mapas y modelos 3D de alta precisión para tu proyecto en tiempo récord.
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
              Ver Portfolio
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
