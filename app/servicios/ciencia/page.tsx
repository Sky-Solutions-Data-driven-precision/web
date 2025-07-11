import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Microscope, Database, BookOpen, Users, Globe, Beaker } from "lucide-react"

export default function CienciaPage() {
  const applications = [
    {
      icon: Globe,
      title: "Monitoreo Ambiental",
      description: "Seguimiento de ecosistemas, biodiversidad y cambio climático",
    },
    {
      icon: Beaker,
      title: "Investigación Geológica",
      description: "Mapeo geológico, análisis de minerales y estudios de suelos",
    },
    {
      icon: Database,
      title: "Recolección de Datos",
      description: "Captura sistemática de información para análisis científicos",
    },
    {
      icon: BookOpen,
      title: "Estudios Académicos",
      description: "Apoyo a tesis, investigaciones y publicaciones científicas",
    },
  ]

  const researchAreas = [
    {
      title: "Ecología y Biodiversidad",
      description: "Monitoreo de fauna, flora y ecosistemas",
      applications: [
        "Conteo de poblaciones animales",
        "Mapeo de vegetación",
        "Análisis de hábitats",
        "Seguimiento de especies en peligro",
      ],
    },
    {
      title: "Geología y Minería",
      description: "Exploración y análisis geológico avanzado",
      applications: [
        "Mapeo geológico de superficie",
        "Análisis espectral de minerales",
        "Monitoreo de sitios de extracción",
        "Estudios de erosión y sedimentación",
      ],
    },
    {
      title: "Oceanografía y Hidrología",
      description: "Estudios de cuerpos de agua y ecosistemas acuáticos",
      applications: [
        "Monitoreo de calidad del agua",
        "Mapeo batimétrico",
        "Seguimiento de corrientes",
        "Análisis de ecosistemas costeros",
      ],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-900/20 to-primary/20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Aplicaciones Científicas</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Potenciamos la investigación científica con tecnología de drones avanzada. Recolección de datos precisos
                para estudios ambientales, geológicos y académicos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="glow-border text-white hover:text-white">
                  Iniciar Proyecto
                </Button>
                <Button size="lg" variant="outline">
                  Ver Publicaciones
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <Microscope className="h-24 w-24 text-muted-foreground" />
                <span className="ml-4 text-muted-foreground">Imagen: Drone recolectando datos científicos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Aplicación Científica</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Nuestros drones equipados con sensores especializados abren nuevas posibilidades para la investigación
              científica moderna.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {applications.map((app, index) => {
              const Icon = app.icon
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{app.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{app.description}</CardDescription>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Áreas de Investigación</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Colaboramos con universidades e institutos de investigación en diversas disciplinas científicas.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {researchAreas.map((area, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <CardDescription>{area.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {area.applications.map((application, appIndex) => (
                      <div key={appIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{application}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Colaboración Académica</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Trabajamos estrechamente con instituciones académicas y centros de investigación para impulsar el
                conocimiento científico a través de la tecnología de drones.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Equipos Multidisciplinarios</h3>
                    <p className="text-muted-foreground">
                      Colaboramos con biólogos, geólogos, ingenieros y otros especialistas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <BookOpen className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Publicaciones Científicas</h3>
                    <p className="text-muted-foreground">
                      Contribuimos a papers y estudios publicados en revistas indexadas
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Database className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold mb-2">Bases de Datos Abiertas</h3>
                    <p className="text-muted-foreground">Compartimos datos para el avance de la ciencia abierta</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Equipo científico con drones</span>
              </div>
              <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                <span className="text-muted-foreground">Imagen: Datos científicos recolectados</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Tienes un proyecto de investigación?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Colaboremos para llevar tu investigación al siguiente nivel con tecnología de drones avanzada.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="glow-border text-white hover:text-white">
              Proponer Colaboración
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary bg-transparent"
            >
              Ver Proyectos Anteriores
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
