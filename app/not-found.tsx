'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Home, Search, FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icono grande */}
          <div className="mb-8">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mx-auto mb-6">
              <FileQuestion className="h-16 w-16 text-muted-foreground" />
            </div>
            
            {/* Título principal */}
            <h1 className="text-6xl md:text-8xl font-bold text-muted-foreground mb-4">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Página no encontrada
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-lg mx-auto">
              Lo sentimos, la página que buscas no existe o ha sido movida. 
              Puede que el enlace esté roto o que hayas escrito mal la URL.
            </p>
          </div>

          {/* Acciones */}
          <div className="space-y-6">
            {/* Botones principales */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button size="lg" className="glow-border text-white hover:text-white">
                  <Home className="mr-2 h-4 w-4" />
                  Ir al Inicio
                </Button>
              </Link>
              
              <Link href="/blog">
                <Button size="lg" variant="outline">
                  <Search className="mr-2 h-4 w-4" />
                  Ver Blog
                </Button>
              </Link>
            </div>

            {/* Enlaces útiles */}
            <Card className="text-left">
              <CardHeader>
                <CardTitle className="text-lg">¿Qué puedes hacer?</CardTitle>
                <CardDescription>Aquí tienes algunas opciones para continuar navegando</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Servicios</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>
                        <Link href="/servicios/agricultura" className="hover:text-primary transition-colors">
                          → Agricultura de Precisión
                        </Link>
                      </li>
                      <li>
                        <Link href="/servicios/eolicos" className="hover:text-primary transition-colors">
                          → Inspecciones Eólicas
                        </Link>
                      </li>
                      <li>
                        <Link href="/servicios/topografia" className="hover:text-primary transition-colors">
                          → Relevamientos Topográficos
                        </Link>
                      </li>
                      <li>
                        <Link href="/servicios/seguridad" className="hover:text-primary transition-colors">
                          → Seguridad y Monitoreo
                        </Link>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2">Información</h3>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>
                        <Link href="/nosotros" className="hover:text-primary transition-colors">
                          → Nosotros
                        </Link>
                      </li>
                      <li>
                        <Link href="/blog" className="hover:text-primary transition-colors">
                          → Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/contacto" className="hover:text-primary transition-colors">
                          → Contacto
                        </Link>
                      </li>
                      <li>
                        <Link href="/" className="hover:text-primary transition-colors">
                          → Página Principal
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Información de contacto */}
                <div className="pt-4 border-t">
                  <p className="text-sm text-muted-foreground mb-2">
                    ¿Necesitas ayuda? Contáctanos directamente:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 text-sm">
                    <a 
                      href="mailto:info@skysolutions.com.ar" 
                      className="text-primary hover:underline"
                    >
                      info@skysolutions.com.ar
                    </a>
                    <span className="hidden sm:inline text-muted-foreground">•</span>
                    <a 
                      href="tel:+5411123456789" 
                      className="text-primary hover:underline"
                    >
                      +54 11 1234-5678
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Botón volver atrás */}
            <Button 
              variant="ghost" 
              onClick={() => window.history.back()}
              className="text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Volver atrás
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}