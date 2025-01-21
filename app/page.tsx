import { Banner } from "@/components/banner"
import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Pricing } from "@/components/pricing"
import { Values } from "@/components/values"
import { FAQ } from "@/components/faq"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Banner />
      <Navigation />
      <main>
        <Hero />
        <Pricing />
        <Values />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}

