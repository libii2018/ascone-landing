"use client"

import { X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"

export function Banner() {
  const [isVisible, setIsVisible] = useState(true)

  if (!isVisible) return null

  return (
    <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-[#004337] px-6 py-2.5 sm:px-3.5">
      <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
        <p className="text-sm leading-6 text-white">
          <span className="inline-flex items-center gap-x-1.5">
            <span>🎉 Session 2024</span>
            <span aria-hidden="true">&middot;</span>
            <Link href="#" className="inline-block">
              Early-bird registration now open <span aria-hidden="true">&rarr;</span>
            </Link>
          </span>
        </p>
      </div>
      <div className="flex flex-1 justify-end">
        <button
          type="button"
          className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          onClick={() => setIsVisible(false)}
        >
          <span className="sr-only">Dismiss</span>
          <X className="h-5 w-5 text-white" aria-hidden="true" />
        </button>
      </div>
    </div>
  )
}

