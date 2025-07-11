import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <About />
      <CTA />
    </main>
  )
}
