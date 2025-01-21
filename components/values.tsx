import { ArrowUpRight } from "lucide-react";

export function Values() {
  return (
    <div className="h-auto mx-auto max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] py-24">
      <div className="space-y-16">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="w-[90%] space-y-4">
            <div className="text-sm font-medium text-[#004337]">VALUES</div>
            <h2 className="text-5xl md:text-6xl font-bold text-black">
              Make your spend, Well-spent
            </h2>
          </div>
          <div className="text-lg text-gray-600 lg:ml-auto mt-auto w-[80%]">
            Manages a diversified group of specialized private credit brands
            with efficient tech-enabled processes.
          </div>
        </div>

        <div className="grid gap-3 md:grid-cols-3 lg:grid-cols-[1fr_1fr_1.5fr]">
          <div className="group flex flex-col gap-10 md:gap-14 lg:gap-20 duration-150 border p-8 hover:bg-[#f3f3ef]">
            <div className="h-20 w-20">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-25"
                />
                <circle
                  cx="24"
                  cy="32"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-50"
                />
                <circle
                  cx="32"
                  cy="24"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-75"
                />
                <circle
                  cx="40"
                  cy="32"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold">Transparency</h3>
              <p className="text-gray-600 text-base lg:text-lg">
                A departure from the industry norm of ambiguity, Monitfort, as a
                public and finest company.
              </p>
            </div>
            <button className="rounded-full group-hover:bg-green-500 w-fit mt-auto border p-4 transition-colors hover:bg-gray-100">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">Learn more about transparency</span>
            </button>
          </div>

          <div className="group flex flex-col gap-10 md:gap-14 lg:gap-20 duration-150 hover:bg-[#f3f3ef] border p-8">
            <div className="h-20 w-20">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24 32a16 16 0 1 0 32 0 16 16 0 0 0-32 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-50"
                />
                <path
                  d="M8 32a16 16 0 1 0 32 0 16 16 0 0 0-32 0z"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold">
                Creative expansion
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
                Ascone proprietary fintech platform helps our subsidiaries
                locate and manage investments.
              </p>
            </div>
            <button className="rounded-full group-hover:bg-green-500 w-fit mt-auto border p-4 transition-colors hover:bg-gray-100">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">Learn more about transparency</span>
            </button>
          </div>

          <div className="group flex flex-col gap-10 md:gap-14 lg:gap-20 duration-150 hover:bg-[#f3f3ef] p-8 border lg:rounded-tr-[40%]">
            <div className="h-20 w-20">
              <svg
                viewBox="0 0 64 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="24"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-25"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="16"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="opacity-50"
                />
                <circle
                  cx="32"
                  cy="32"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </svg>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg lg:text-2xl font-bold">
                Private Credit Investments
              </h3>
              <p className="text-gray-600 text-base lg:text-lg">
                We provide access to unique private credit investments: a rare
                but valuable part of a sound investment portfolio.
              </p>
            </div>
            <button className="rounded-full group-hover:bg-green-500 w-fit mt-auto border p-4 transition-colors hover:bg-gray-100">
              <ArrowUpRight className="h-5 w-5" />
              <span className="sr-only">Learn more about transparency</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
