"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DroneScene } from "@/components/drone-scene"
import { useTranslations } from "@/hooks/use-translations"
import { ChevronDown, Hand } from "lucide-react"

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

      {/* Overlay informativo cuando el 3D está activo */}
      {is3DInteractive && (
        <div className="absolute top-24 left-1/2 transform -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-black/80 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center gap-2 animate-pulse">
            <Hand className="h-5 w-5" />
            <span className="text-sm font-medium">Interactúa con el dron usando tu mouse</span>
          </div>
        </div>
      )}

      {/* Content - Prioridad de z-index sobre 3D cuando no está activo */}
      <div className={`relative container mx-auto px-4 text-center pointer-events-none transition-all duration-300 ${
        is3DInteractive ? 'z-5 opacity-40' : 'z-10 opacity-100'
      }`}>
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg pointer-events-none">
            Sky Solutions
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md font-light pointer-events-none">
            {t("hero.slogan")}
          </p>
          <p className="text-lg md:text-xl mb-12 text-white/80 drop-shadow-md max-w-2xl mx-auto pointer-events-none">
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
                onClick={is3DInteractive ? toggle3DInteraction : scrollToServices}
                size="lg"
                variant="outline"
                className="dynamic-border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent w-full sm:w-auto"
              >
                {is3DInteractive ? 'Cerrar modelo 3D' : t("hero.cta.secondary")}
              </Button>
              {!is3DInteractive && (
                <>
                  <ChevronDown 
                    className="h-6 w-6 text-white animate-bounce cursor-pointer" 
                    onClick={scrollToServices}
                  />
                  <button
                    onClick={toggle3DInteraction}
                    className="text-white/70 hover:text-white text-sm underline decoration-dotted transition-colors mt-2"
                  >
                    O interactúa con el modelo 3D ↗
                  </button>
                </>
              )}
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