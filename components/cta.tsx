import { Button } from "@/components/ui/button"
import Image from "next/image"

export function CTA() {
  return (
    <div className="bg-[#004337] py-24">
      <div className="container">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl">
          <div className="grid gap-8 p-8 md:grid-cols-2 md:p-12">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-white md:text-5xl">
                Change the way you use your <span className="font-serif italic">money</span>
              </h2>
              <p className="text-lg text-white/80">
                Join over million people who choose Ascone for fast and secure future banking.
              </p>
              <Button size="lg" variant="secondary">
                Get Started Now
              </Button>
            </div>
            <div className="relative">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-GvYygpLfJ8QxKtqx8n0tRsMGlqq3Br.png"
                alt="Indian currency and coins"
                width={500}
                height={300}
                className="object-contain"
              />
              <div className="absolute right-0 top-0">
                <svg viewBox="0 0 24 24" fill="none" className="h-20 w-20 text-white" stroke="currentColor">
                  <path
                    d="M22 2L12 12M22 2L14 22L12 12L2 10L22 2Z"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

