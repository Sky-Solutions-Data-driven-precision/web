"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageToggle } from "@/components/language-toggle"
import { ChevronDown, Menu, X } from "lucide-react"
import { useTheme } from "next-themes"
import { useTranslations } from "@/hooks/use-translations"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const { resolvedTheme } = useTheme()
  const { t } = useTranslations()

  const services = [
    { key: "agriculture", href: "/servicios/agricultura" },
    { key: "wind", href: "/servicios/eolicos" },
    { key: "science", href: "/servicios/ciencia" },
    { key: "topography", href: "/servicios/topografia" },
    { key: "security", href: "/servicios/seguridad" },
  ]

  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
           <Image
              src={resolvedTheme === "light" ? "/images/logo-light.png" : "/images/logo-dark.png"}
              alt="Sky Solutions"
              width={180}
              height={60}
              className="h-14 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("nav.home")}
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 text-foreground hover:text-primary transition-colors font-medium">
                <span>{t("nav.services")}</span>
                <ChevronDown className="h-4 w-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-background border border-border rounded-lg shadow-lg py-2">
                  {services.map((service) => (
                    <Link
                      key={service.key}
                      href={service.href}
                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                    >
                      {t(`services.${service.key}.title`)}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link href="/nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("nav.about")}
            </Link>
            <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("nav.blog")}
            </Link>
            <Link href="/contacto" className="text-foreground hover:text-primary transition-colors font-medium">
              {t("nav.contact")}
            </Link>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-4">
            <LanguageToggle />
            <ThemeToggle />

            {/* Mobile menu button */}
            <Button variant="ghost" size="icon" className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                {t("nav.home")}
              </Link>

              <div className="space-y-2">
                <div className="text-foreground font-medium">{t("nav.services")}</div>
                <div className="pl-4 space-y-2">
                  {services.map((service) => (
                    <Link
                      key={service.key}
                      href={service.href}
                      className="block text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t(`services.${service.key}.title`)}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/nosotros" className="text-foreground hover:text-primary transition-colors font-medium">
                {t("nav.about")}
              </Link>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors font-medium">
                {t("nav.blog")}
              </Link>
              <Link href="/contacto" className="text-foreground hover:text-primary transition-colors font-medium">
                {t("nav.contact")}
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
