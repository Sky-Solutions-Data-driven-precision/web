"use client"

import { useTranslations } from "@/hooks/use-translations"
import { useTheme } from "next-themes"
import Image from "next/image"
import { Brain, Wifi } from "lucide-react"

export function Stats() {
  const { t } = useTranslations()
  const { theme } = useTheme()

  const stats = [
    { 
      key: "certificacion", 
      icon: (
        <Image 
          src="https://ais.anac.gob.ar/ui/images/ANAC_logo_vector.svg" 
          alt="ANAC" 
          width={120} 
          height={120}
          className="mx-auto object-contain"
        />
      )
    },
    { 
      key: "procesamiento", 
      icon: <Brain className={`w-16 h-16 mx-auto ${
        theme === 'light' ? 'text-primary' : 'text-white'
      }`} />
    },
    { 
      key: "datos", 
      icon: (
        <Image 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/1280px-Amazon_Web_Services_Logo.svg.png" 
          alt="AWS" 
          width={64} 
          height={64}
          className="mx-auto object-contain"
        />
      )
    },
    { 
      key: "conexion", 
      icon: (
        <div className="relative mx-auto w-16 h-16 flex items-center justify-center">
          <Wifi className={`w-16 h-16 ${
            theme === 'light' ? 'text-primary' : 'text-white'
          }`} />
          <span className={`absolute -bottom-2 text-sm font-bold ${
            theme === 'light' ? 'text-primary' : 'text-white'
          }`}>99.9%</span>
        </div>
      )
    },
  ]

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="mb-4 flex items-center justify-center h-20">{stat.icon}</div>
              <div className="text-sm md:text-base text-muted-foreground">{t(`stats.${stat.key}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
