"use client"

import { useTranslations } from "@/hooks/use-translations"

export function Stats() {
  const { t } = useTranslations()

  const stats = [
    { key: "certificacion", value: "A/B/C" },
    { key: "datos", value: "AWS" },
    { key: "procesamiento", value: "IA" },
    { key: "conexion", value: "99.9%" },
  ]

  return (
    <section className="py-16 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.key} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-muted-foreground">{t(`stats.${stat.key}`)}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
