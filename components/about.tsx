"use client"

import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Zap } from "lucide-react"
import { useTranslations } from "@/hooks/use-translations"

export function About() {
  const { t } = useTranslations()

  const features = [
    { key: "equipment", icon: Zap },
    { key: "ai", icon: Award },
    { key: "certified", icon: CheckCircle },
    { key: "reports", icon: Users },
  ]

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">{t("about.title")}</h2>
            <p className="text-lg text-muted-foreground mb-8">{t("about.description")}</p>

            <div className="grid sm:grid-cols-2 gap-4">
              {features.map((feature) => {
                const Icon = feature.icon
                return (
                  <div key={feature.key} className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <Icon className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{t(`about.features.${feature.key}.title`)}</h3>
                      <p className="text-sm text-muted-foreground">{t(`about.features.${feature.key}.description`)}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <div className="relative">
            <Card className="p-8">
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-muted-foreground">{t("about.experience")}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">ANAC</div>
                  <div className="text-muted-foreground">{t("about.certification")}</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">24/7</div>
                  <div className="text-muted-foreground">{t("about.support")}</div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
