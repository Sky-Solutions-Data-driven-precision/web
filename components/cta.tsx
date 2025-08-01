"use client"

import { Button } from "@/components/ui/button"
import { useTranslations } from "@/hooks/use-translations"
import Link from "next/link"

export function CTA() {
  const { t } = useTranslations()
  
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">{t("cta.title")}</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">{t("cta.description")}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className="glow-border text-white hover:text-white px-8 py-4 text-lg font-semibold">
            <Link href="/contacto">
              {t("cta.contact")}
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="dynamic-border border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold bg-transparent"
          >
            <Link href="/contacto">
              {t("cta.quote")}
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
