import type React from "react"
import type { Metadata } from "next"
import { Exo_2 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const exo2 = Exo_2({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sky Solutions - Data-driven precision",
  description:
    "Soluciones profesionales con drones para agricultura, inspecciones, topografía y más. Tecnología de vanguardia al servicio de tu empresa.",
  keywords: "drones, agricultura, inspecciones, topografía, Argentina, Sky Solutions",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={exo2.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <Header />
          <main className="pt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
