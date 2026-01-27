"use client"

import Image from "next/image"
import { useTranslations } from "@/hooks/use-translations"

export default function NosotrosPage() {
  const { t } = useTranslations()
  
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{t("aboutPage.header.title")}</h1>
          <p className="text-xl text-muted-foreground">{t("aboutPage.header.subtitle")}</p>
        </div>

        {/* Imagen principal */}
        <div className="relative w-full h-[400px] rounded-lg overflow-hidden mb-16">
          <Image
            src="/images/drone-work-horizontal.jpg"
            alt={t("aboutPage.image.alt")}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Contenido */}
        <div className="space-y-12">
          {/* Quiénes somos */}
          <section>
            <h2 className="text-3xl font-bold mb-6">{t("aboutPage.whoWeAre.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("aboutPage.whoWeAre.content")}
            </p>
          </section>

          {/* Nuestra Especialización */}
          <section className="bg-muted/50 rounded-lg p-8">
            <h2 className="text-3xl font-bold mb-6">{t("aboutPage.specialization.title")}</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              {t("aboutPage.specialization.paragraph1")}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t("aboutPage.specialization.paragraph2")}
            </p>
          </section>

          {/* Certificaciones */}
          <section>
            <h2 className="text-3xl font-bold mb-6">{t("aboutPage.certifications.title")}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{t("aboutPage.certifications.anac.title")}</h3>
                <p className="text-muted-foreground">
                  {t("aboutPage.certifications.anac.description")}
                </p>
              </div>
              <div className="border rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">{t("aboutPage.certifications.regulations.title")}</h3>
                <p className="text-muted-foreground">
                  {t("aboutPage.certifications.regulations.description")}
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}