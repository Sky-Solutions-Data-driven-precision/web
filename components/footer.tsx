"use client"

import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { useTranslations } from "@/hooks/use-translations"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  const { theme } = useTheme()
  const { t } = useTranslations()

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Image
              src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
              alt="Sky Solutions"
              width={150}
              height={50}
              className="h-12 w-auto"
            />
            <p className="text-muted-foreground">{t("footer.description")}</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">{t("nav.services")}</h3>
            <div className="space-y-2">
              <Link href="/servicios/agricultura" className="block text-muted-foreground hover:text-primary">
                {t("services.agriculture.title")}
              </Link>
              <Link href="/servicios/eolicos" className="block text-muted-foreground hover:text-primary">
                {t("services.wind.title")}
              </Link>
              <Link href="/servicios/ciencia" className="block text-muted-foreground hover:text-primary">
                {t("services.science.title")}
              </Link>
              <Link href="/servicios/topografia" className="block text-muted-foreground hover:text-primary">
                {t("services.topography.title")}
              </Link>
              <Link href="/servicios/seguridad" className="block text-muted-foreground hover:text-primary">
                {t("services.security.title")}
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.company")}</h3>
            <div className="space-y-2">
              <Link href="/nosotros" className="block text-muted-foreground hover:text-primary">
                {t("nav.about")}
              </Link>
              <Link href="/blog" className="block text-muted-foreground hover:text-primary">
                {t("nav.blog")}
              </Link>
              <Link href="/contacto" className="block text-muted-foreground hover:text-primary">
                {t("nav.contact")}
              </Link>
              <Link href="/privacidad" className="block text-muted-foreground hover:text-primary">
                {t("footer.privacy")}
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">{t("footer.contact")}</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>info@skysolutions.com.ar</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+54 11 1234-5678</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Buenos Aires, Argentina</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Sky Solutions. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  )
}
