import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { CTA } from "@/components/cta"
import { AISection } from "@/components/ai-section"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Stats />
      <Services />
      <AISection />
      <About />
      <CTA />
    </main>
  )
}
