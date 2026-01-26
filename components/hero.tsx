"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DroneScene } from "@/components/drone-scene"
import { useTranslations } from "@/hooks/use-translations"
import { ChevronDown, Orbit, X } from "lucide-react"

export function Hero() {
  const { t } = useTranslations()
  const [is3DInteractive, setIs3DInteractive] = useState(false)

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const toggle3DInteraction = () => {
    setIs3DInteractive(!is3DInteractive)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Controlado por estado */}
      <div className={`absolute inset-0 transition-all duration-300 ${
        is3DInteractive ? 'z-10' : 'z-0 pointer-events-none'
      }`}>
        <DroneScene />
      </div>

      {/* Botón flotante derecha - Cambia según estado */}
      <div className="absolute bottom-8 right-8 z-20 pointer-events-auto">
        <Button
          onClick={toggle3DInteraction}
          size="lg"
          variant={is3DInteractive ? "destructive" : "outline"}
          className={`flex flex-col items-center gap-2 py-6 px-6 transition-all duration-300 ${
            is3DInteractive 
              ? 'bg-red-600 hover:bg-red-700 text-white border-red-600' 
              : 'bg-black/50 backdrop-blur-sm border-white/30 text-white hover:bg-white/10'
          }`}
        >
          {is3DInteractive ? (
            <>
              <X className="h-6 w-6" />
              <span className="text-xs font-medium">cerrar modelo 3D</span>
            </>
          ) : (
            <>
              <Orbit className="h-6 w-6" />
              <span className="text-xs font-medium">habilitar modelo 3D</span>
            </>
          )}
        </Button>
      </div>

      {/* Content - Prioridad de z-index sobre 3D cuando no está activo */}
      <div className={`relative container mx-auto px-4 text-center pointer-events-none transition-all duration-300 ${
        is3DInteractive ? 'z-5 opacity-20' : 'z-10 opacity-100'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">
            Sky Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md font-light">
            {t("hero.slogan")}
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/80 drop-shadow-md max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pointer-events-auto">
            <Link href="/contacto">
              <Button
                size="lg"
                className="glow-border text-white hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
              >
                {t("hero.cta.primary")}
              </Button>
            </Link>
            
            <div className="flex flex-col items-center gap-2">
              <Button
                onClick={scrollToServices}
                size="lg"
                variant="outline"
                className="dynamic-border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent w-full sm:w-auto"
              >
                {t("hero.cta.secondary")}
              </Button>
              
              <ChevronDown 
                className="h-6 w-6 text-white animate-bounce cursor-pointer" 
                onClick={scrollToServices}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Gradiente overlay - solo en bordes */}
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/20 to-transparent z-5 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent z-5 pointer-events-none" />
    </section>
  )
}