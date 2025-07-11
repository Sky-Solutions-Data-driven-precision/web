"use client"

import { Button } from "@/components/ui/button"
import { DroneScene } from "@/components/drone-scene"
import { useTranslations } from "@/hooks/use-translations"

export function Hero() {
  const { t } = useTranslations()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <DroneScene />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg">Sky Solutions</h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md font-light">{t("hero.slogan")}</p>
          <p className="text-lg md:text-xl mb-12 text-white/80 drop-shadow-md max-w-2xl mx-auto">
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="glow-border text-white hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-300"
            >
              {t("hero.cta.primary")}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="dynamic-border border-white text-white hover:bg-white hover:text-black px-8 py-4 text-lg font-semibold bg-transparent"
            >
              {t("hero.cta.secondary")}
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40 z-5" />
    </section>
  )
}
