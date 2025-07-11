"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DroneScene } from "@/components/drone-scene"
import { useTranslations } from "@/hooks/use-translations"
import { ChevronDown } from "lucide-react"

export function Hero() {
  const { t } = useTranslations()

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services-section')
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <DroneScene />
      </div>

      {/* Content - Solo los elementos específicos tienen pointer-events */}
      <div className="relative z-10 container mx-auto px-4 text-center pointer-events-none">
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