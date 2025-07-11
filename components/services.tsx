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
    },
    {
      key: "wind",
      icon: Wind,
      href: "/servicios/eolicos",
    },
    {
      key: "science",
      icon: Microscope,
      href: "/servicios/ciencia",
    },
    {
      key: "topography",
      icon: Map,
      href: "/servicios/topografia",
    },
    {
      key: "security",
      icon: Shield,
      href: "/servicios/seguridad",
    },
  ]

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("services.title")}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t("services.description")}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            return (
              <Card
                key={service.key}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{t(`services.${service.key}.title`)}</CardTitle>
                  <CardDescription>{t(`services.${service.key}.description`)}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link href={service.href}>
                    <Button variant="outline" className="w-full dynamic-border bg-transparent">
                      {t("common.learnMore")}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
