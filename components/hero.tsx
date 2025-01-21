import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Star } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="container lg:max-w-[1200px] mx-auto h-auto py-12 md:py-24">
      <div className="grid gap-20 lg:justify-between lg:grid-cols-2">
        <div className="flex flex-col justify-between gap-16 lg:gap-0">
          <div className="flex flex-col gap-5">
            <div className="inline-block rounded-full text-sm font-semibold text-[#004337]">
              TRY IT NOW!
            </div>
            <h1 className="text-5xl font-semibold tracking-tight text-gray-900 md:text-6xl lg:text-7xl">
              Change the way you use your{" "}
              <span className="font-serif italic">money</span>
            </h1>
          </div>

          <div className="flex flex-col gap-14 lg:gap-5">
            <p className="text-xl text-gray-600">
              From your everyday spending, to planning for your future with
              savings and investments, Ascone helps you get more from your
              money.
            </p>

            <div className="flex flex-row gap-8 items-center justify-start">
              <Button
                size="lg"
                className="bg-[#004337] hover:bg-[#004337]/90 rounded-[30px] h-14 text-lg"
              >
                Get Started Now
              </Button>
              <div className="flex flex-col items-start justify-center gap-2">
                <div className="flex gap-2 items-center justify-center">
                  <div className="flex gap-1 items-center justify-center leading-[0px]">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <div className="text-base font-semibold leading-[0px] mt-1">
                    5.0
                  </div>
                </div>
                <span className="text-sm text-gray-600">
                  from 120+{" "}
                  <Link href="#" className="underline">
                    reviews
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full grid grid-cols-2 grid-rows-2 h-[600px]">
          <div className="bg-slate-300 flex flex-col items-end gap-4 justify-start p-10">
            <div className="bg-white md:w-20 md:h-3 w-16 h-2"></div>
            <div className="bg-white md:w-8 md:h-3  w-7 h-2"></div>
          </div>
          <div className="bg-[#ebe8d8] rounded-tl-[50%] rounded-bl-[50%] p-10">
            <div className="md:text-6xl text-3xl text-[#004337] text-right mb-6">
              56+
            </div>
            <p className="md:text-2xl text-xl text-[#004337]">Currencies</p>
          </div>
          <div className="bg-[#e0eae8] flex flex-col rounded-tr-[50%] p-10">
            {/* <div>
              <div
                className="w-8 h-8 bg-[#1c3f3a]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
              <div
                className="w-8 h-8 bg-[#1c3f3a]"
                style={{
                  clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
                }}
              ></div>
            </div> */}
            <div className="flex flex-col gap-6 mt-auto">
              <div className="md:text-2xl text-lg text-right">Users Active</div>
              <div className="flex items-center rounded-lg">
                <div className="md:w-11 md:h-11 w-8 h-8  rounded-[100%] overflow-hidden border-2 border-white">
                  <img
                    src="/images/person1.jpg"
                    alt="Person 1"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-11 md:h-11 w-8 h-8  -translate-x-3 rounded-[100%] overflow-hidden border-2 border-white">
                  <img
                    src="/images/person2.jpg"
                    alt="Person 2"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-11 md:h-11 w-8 h-8  -translate-x-6 rounded-[100%] overflow-hidden border-2 border-white">
                  <img
                    src="/images/person3.jpg"
                    alt="Person 3"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="md:w-11 md:h-11 w-8 h-8  -translate-x-9 flex items-center justify-center bg-[#1c3f3a] text-white rounded-[100%]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#1c3f3a] flex flex-col p-10">
            <div className="flex justify-between items-center text-white">
              <h2 className="md:text-4xl text-xl">$196,000</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>

            <div className="flex-1 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 100 50"
                className="w-full h-3/5"
              >
                <polyline
                  points="0,40 10,35 20,25 30,30 40,15 50,20 60,10 70,15 80,5 90,10 100,0"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <div>
              <p className="text-right text-white md:text-xl text-lg">Saving</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24 h-auto grid grid-cols-2 gap-8 md:grid-cols-5 border-y-2 py-16">
        {["Loom", "HubSpot", "OpenAI", "Raycast", "Zenefits"].map((partner) => (
          <div
            key={partner}
            className="flex items-center justify-center grayscale transition-all hover:grayscale-0"
          >
            <span className="text-xl font-semibold text-gray-400">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
