"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Wheat, Wind, Microscope, Map, Shield } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"
import Link from "next/link"

export function Services() {
  const { t } = useTranslations()

  const services = [
    {
      key: "agriculture",
      icon: Wheat,
      href: "/servicios/agricultura",
      colors: {
        bg: "bg-gradient-to-br from-green-500/10 to-green-600/5",
        iconBg: "bg-gradient-to-br from-green-500/20 to-green-600/10",
        icon: "text-green-600",
        border: "border-green-200/50",
        hoverBorder: "hover:border-green-400/70",
        hoverIconBg: "group-hover:from-green-500/30 group-hover:to-green-600/15",
        button: "hover:bg-green-50 hover:border-green-300 dark:hover:bg-green-950/30 dark:hover:border-green-700"
      }
    },
    {
      key: "livestock",
      icon: Wheat, // Podrías cambiar por otro icono como Cow o similar
      href: "/servicios/agricultura", // Mismo destino que agricultura
      colors: {
        bg: "bg-gradient-to-br from-emerald-500/10 to-emerald-600/5",
        iconBg: "bg-gradient-to-br from-emerald-500/20 to-emerald-600/10",
        icon: "text-emerald-600",
        border: "border-emerald-200/50",
        hoverBorder: "hover:border-emerald-400/70",
        hoverIconBg: "group-hover:from-emerald-500/30 group-hover:to-emerald-600/15",
        button: "hover:bg-emerald-50 hover:border-emerald-300 dark:hover:bg-emerald-950/30 dark:hover:border-emerald-700"
      }
    },
    {
      key: "wind",
      icon: Wind,
      href: "/servicios/eolicos",
      colors: {
        bg: "bg-gradient-to-br from-blue-500/10 to-blue-600/5",
        iconBg: "bg-gradient-to-br from-blue-500/20 to-blue-600/10",
        icon: "text-blue-600",
        border: "border-blue-200/50",
        hoverBorder: "hover:border-blue-400/70",
        hoverIconBg: "group-hover:from-blue-500/30 group-hover:to-blue-600/15",
        button: "hover:bg-blue-50 hover:border-blue-300 dark:hover:bg-blue-950/30 dark:hover:border-blue-700"
      }
    },
    {
      key: "science",
      icon: Microscope,
      href: "/servicios/ciencia",
      colors: {
        bg: "bg-gradient-to-br from-purple-500/10 to-purple-600/5",
        iconBg: "bg-gradient-to-br from-purple-500/20 to-purple-600/10",
        icon: "text-purple-600",
        border: "border-purple-200/50",
        hoverBorder: "hover:border-purple-400/70",
        hoverIconBg: "group-hover:from-purple-500/30 group-hover:to-purple-600/15",
        button: "hover:bg-purple-50 hover:border-purple-300 dark:hover:bg-purple-950/30 dark:hover:border-purple-700"
      }
    },
    {
      key: "topography",
      icon: Map,
      href: "/servicios/topografia",
      colors: {
        bg: "bg-gradient-to-br from-orange-500/10 to-orange-600/5",
        iconBg: "bg-gradient-to-br from-orange-500/20 to-orange-600/10",
        icon: "text-orange-600",
        border: "border-orange-200/50",
        hoverBorder: "hover:border-orange-400/70",
        hoverIconBg: "group-hover:from-orange-500/30 group-hover:to-orange-600/15",
        button: "hover:bg-orange-50 hover:border-orange-300 dark:hover:bg-orange-950/30 dark:hover:border-orange-700"
      }
    },
    {
      key: "security",
      icon: Shield,
      href: "/servicios/seguridad",
      colors: {
        bg: "bg-gradient-to-br from-red-500/10 to-red-600/5",
        iconBg: "bg-gradient-to-br from-red-500/20 to-red-600/10",
        icon: "text-red-600",
        border: "border-red-200/50",
        hoverBorder: "hover:border-red-400/70",
        hoverIconBg: "group-hover:from-red-500/30 group-hover:to-red-600/15",
        button: "hover:bg-red-50 hover:border-red-300 dark:hover:bg-red-950/30 dark:hover:border-red-700"
      }
    }
  ]

  return (
    <section id="services-section" className="py-20 relative">
      {/* Fondo sutil con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50/50 to-white dark:from-slate-900/50 dark:to-background"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-blue-600 to-primary bg-clip-text text-transparent">
            {t("services.title")}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            const colors = service.colors
            return (
              <Card
                key={service.key}
                className={`group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${colors.bg} ${colors.border} ${colors.hoverBorder} hover:shadow-current/20`}
              >
                <CardHeader className="relative">
                  {/* Efecto de brillo sutil en hover */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-current/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className={`w-16 h-16 ${colors.iconBg} ${colors.hoverIconBg} rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    <Icon className={`h-8 w-8 ${colors.icon} transition-transform duration-500 group-hover:scale-110`} />
                  </div>
                  
                  <CardTitle className="text-xl mb-3 group-hover:text-primary transition-colors duration-300">
                    {t(`services.${service.key}.title`)}
                  </CardTitle>
                  <CardDescription className="leading-relaxed">
                    {t(`services.${service.key}.description`)}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Link href={service.href}>
                    <Button 
                      variant="outline" 
                      className={`w-full dynamic-border bg-transparent transition-all duration-300 ${colors.button}`}
                    >
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Elementos decorativos */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-green-400/10 to-blue-400/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-orange-400/5 to-red-400/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>
    </section>
  )
}