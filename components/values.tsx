import { ArrowUpRight } from "lucide-react"

export function Values() {
  return (
    <div className="container py-24">
      <div className="space-y-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="text-sm font-medium text-[#004337]">VALUES</div>
            <h2 className="text-4xl font-bold md:text-5xl">Make your spend, Well-spent</h2>
          </div>
          <div className="text-lg text-gray-600">
            Manages a diversified group of specialized private credit brands with efficient tech-enabled processes.
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="group relative space-y-6 rounded-2xl border p-8">
            <div className="h-16 w-16">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2" className="opacity-25" />
                <circle cx="24" cy="32" r="16" stroke="currentColor" strokeWidth="2" className="opacity-50" />
                <circle cx="32" cy="24" r="16" stroke="currentColor" strokeWidth="2" className="opacity-75" />
                <circle cx="40" cy="32" r="16" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Transparency</h3>
              <p className="text-gray-600">
                A departure from the industry norm of ambiguity, Monitfort, as a public and finest company.
              </p>
            </div>
            <button className="absolute bottom-8 right-8 rounded-full border p-2 transition-colors hover:bg-gray-100">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">Learn more about transparency</span>
            </button>
          </div>

          <div className="group relative space-y-6 rounded-2xl border p-8">
            <div className="h-16 w-16">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 32a16 16 0 1 0 32 0 16 16 0 0 0-32 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-50"
                />
                <path d="M8 32a16 16 0 1 0 32 0 16 16 0 0 0-32 0z" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Creative expansion</h3>
              <p className="text-gray-600">
                Ascone proprietary fintech platform helps our subsidiaries locate and manage investments.
              </p>
            </div>
            <button className="absolute bottom-8 right-8 rounded-full border p-2 transition-colors hover:bg-gray-100">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">Learn more about creative expansion</span>
            </button>
          </div>

          <div className="group relative space-y-6 rounded-2xl bg-[#f3f3ef] p-8">
            <div className="h-16 w-16">
              <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="24" stroke="currentColor" strokeWidth="2" className="opacity-25" />
                <circle cx="32" cy="32" r="16" stroke="currentColor" strokeWidth="2" className="opacity-50" />
                <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Private Credit Investments</h3>
              <p className="text-gray-600">
                We provide access to unique private credit investments: a rare but valuable part of a sound investment
                portfolio.
              </p>
            </div>
            <button className="absolute bottom-8 right-8 rounded-full border p-2 transition-colors hover:bg-gray-100">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">Learn more about private credit investments</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

