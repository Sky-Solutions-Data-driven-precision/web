"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Camera, Zap, BarChart3, Eye, Cpu, CloudUpload, Target } from "lucide-react"

export function AISection() {
  const aiFeatures = [
    {
      icon: Brain,
      title: "Análisis inteligente de imágenes",
      description: "Procesamiento automático con machine learning para identificar patrones, anomalías y características específicas en tiempo real.",
      tags: ["Computer Vision", "Deep Learning"],
      color: "from-purple-500 to-indigo-600"
    },
    {
      icon: Eye,
      title: "Detección automática de anomalías",
      description: "Identificación precisa de problemas en cultivos, infraestructura y equipos mediante algoritmos de detección avanzados.",
      tags: ["Anomaly Detection", "Pattern Recognition"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: BarChart3,
      title: "Reportes predictivos",
      description: "Generación automática de informes con análisis predictivo y recomendaciones basadas en datos históricos y actuales.",
      tags: ["Predictive Analytics", "Automated Reports"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Agricultura de precisión",
      description: "Optimización de recursos agrícolas mediante IA que analiza índices de vegetación, humedad del suelo y necesidades específicas.",
      tags: ["Precision Agriculture", "Resource Optimization"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: Zap,
      title: "Procesamiento en tiempo real",
      description: "Análisis instantáneo durante el vuelo con capacidad de toma de decisiones automática y alertas inmediatas.",
      tags: ["Real-time Processing", "Edge Computing"],
      color: "from-yellow-500 to-orange-600"
    },
    {
      icon: CloudUpload,
      title: "Integración en la nube",
      description: "Sincronización automática con plataformas cloud para análisis colaborativo y acceso remoto a los datos procesados.",
      tags: ["Cloud Integration", "Remote Access"],
      color: "from-teal-500 to-blue-600"
    }
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Fondo con gradiente y efectos */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 dark:from-slate-900 dark:via-slate-800/50 dark:to-slate-900"></div>
      
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '3s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-indigo-400/5 to-purple-400/5 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>

      <div className="container mx-auto px-4 relative">
        {/* Header de la sección */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu className="h-8 w-8 text-purple-600" />
            <Badge variant="secondary" className="px-4 py-1 text-sm font-medium bg-gradient-to-r from-purple-100 to-blue-100 text-purple-700 border-purple-200 dark:from-purple-900/30 dark:to-blue-900/30 dark:text-purple-300 dark:border-purple-700">
              Inteligencia Artificial
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            IA aplicada en gestión de drones
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformamos los datos capturados por nuestros drones en insights accionables mediante algoritmos de inteligencia artificial de última generación.
          </p>
        </div>

        {/* Grid de características */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {aiFeatures.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 border-slate-200/50 hover:border-purple-300/70 bg-white/80 backdrop-blur-sm dark:bg-slate-800/80 dark:border-slate-700/50 dark:hover:border-purple-600/70"
              >
                <CardHeader className="relative">
                  {/* Efecto de brillo en hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color}/20 group-hover:${feature.color}/30 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`h-8 w-8 bg-gradient-to-br ${feature.color} bg-clip-text text-transparent transition-transform duration-500 group-hover:scale-110`} />
                  </div>
                  
                  <CardTitle className="text-lg mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                  
                  <CardDescription className="leading-relaxed mb-4">
                    {feature.description}
                  </CardDescription>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {feature.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="outline"
                        className="text-xs px-2 py-1 bg-slate-50/50 text-slate-600 border-slate-300/50 dark:bg-slate-700/50 dark:text-slate-300 dark:border-slate-600/50"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
              </Card>
            )
          })}
        </div>

        {/* CTA bottom */}
        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all duration-300 cursor-pointer group">
            <Brain className="h-5 w-5 group-hover:animate-pulse" />
            <span>Descubre el poder de la IA en tus proyectos</span>
          </div>
        </div>
      </div>
    </section>
  )
}