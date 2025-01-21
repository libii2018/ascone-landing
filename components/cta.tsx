import { Button } from "@/components/ui/button";
import Image from "next/image";

export function CTA() {
  return (
    <div className="bg-[#004337]">
      <div className="mx-auto max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] py-24">
        <div className="relative overflow-hidden rounded-3xl">
          <div className="grid gap-8 p-8">
            <div className="space-y-10">
              <h2 className="text-4xl font-medium text-white md:text-6xl lg:text-7xl w-[90%] lg:w-[65%] leading-10">
                Change the way you use your{" "}
                <span className="font-serif italic">money</span>
              </h2>
              <p className="text-lg md:text-xl text-white/80 w-[90%] lg:w-[40%]">
                Join over million people who choose Ascone for fast and secure
                future banking.
              </p>
              <Button
                size="lg"
                variant="secondary"
                className="h-11 rounded-[35px] text-base md:h-16 md:rounded-[35px] md:text-xl"
              >
                Get Started Now
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
