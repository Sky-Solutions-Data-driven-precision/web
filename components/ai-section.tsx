"use client"

import { Badge } from "@/components/ui/badge"
import { Brain, Cpu } from "lucide-react"

export function AISection() {
  const aiFeatures = [
    {
      title: "Análisis inteligente de imágenes",
      description: "Procesamiento automático con machine learning para identificar patrones y anomalías en tiempo real.",
      tags: ["Computer Vision", "Deep Learning"],
    },
    {
      title: "Reportes predictivos",
      description: "Generación automática de informes con análisis predictivo y recomendaciones basadas en datos históricos.",
      tags: ["Predictive Analytics", "Automated Reports"],
    },
    {
      title: "Agricultura de precisión",
      description: "Optimización de recursos agrícolas mediante IA que analiza índices de vegetación y necesidades específicas.",
      tags: ["Precision Agriculture", "Resource Optimization"],
    },
    {
      title: "Procesamiento en tiempo real",
      description: "Análisis instantáneo durante el vuelo con capacidad de toma de decisiones automática y alertas inmediatas.",
      tags: ["Real-time Processing", "Edge Computing"],
    }
  ]

  return (
    <section className="py-16 relative">
      {/* Fondo minimalista */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/30 dark:to-background"></div>
      
      <div className="container mx-auto px-4 relative">
        {/* Header de la sección */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu className="h-6 w-6 text-blue-600" />
            <Badge variant="secondary" className="px-3 py-1 text-sm bg-blue-50 text-blue-700 border-blue-200 dark:bg-blue-900/30 dark:text-blue-300 dark:border-blue-700">
              Inteligencia Artificial
            </Badge>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            IA aplicada en gestión de drones
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Transformamos los datos capturados por nuestros drones en insights accionables mediante algoritmos de inteligencia artificial de última generación.
          </p>
        </div>

        {/* Lista de características en formato timeline/lista */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {aiFeatures.map((feature, index) => (
              <div
                key={index}
                className="group relative pl-8 pb-6 border-l-2 border-gray-200 dark:border-gray-700 last:border-l-0 last:pb-0"
              >
                {/* Punto en la línea */}
                <div className="absolute -left-2 top-0 w-4 h-4 bg-blue-600 rounded-full border-4 border-white dark:border-gray-900 group-hover:bg-blue-700 transition-colors duration-300"></div>
                
                {/* Contenido */}
                <div className="bg-white dark:bg-gray-800/50 rounded-lg p-5 shadow-sm border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                    
                    {/* Tags alineados a la derecha en desktop */}
                    <div className="flex flex-wrap gap-2 md:ml-6 md:flex-shrink-0">
                      {feature.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="text-xs px-3 py-1 bg-gray-50 text-gray-600 border-gray-300 dark:bg-gray-700/50 dark:text-gray-300 dark:border-gray-600"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA minimalista */}
        <div className="text-center mt-12">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-medium transition-all duration-300 cursor-pointer group">
            <Brain className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            <span>Descubre el poder de la IA en tus proyectos</span>
          </div>
        </div>
      </div>
    </section>
  )
}