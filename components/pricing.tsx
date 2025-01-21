"use client";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function Pricing() {
  return (
    <div className="container h-auto mx-auto max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] py-24">
      <div className="mx-auto max-w-3xl space-y-8">
        <div className="space-y-4 text-center">
          <div className="text-sm font-medium text-[#004337]">
            WELCOME TO ASCONE PRICING
          </div>
          <h2 className="text-4xl font-bold">Select your plan</h2>
        </div>

        <div className="grid gap-8">
          <div className="space-y-4">
            <Accordion type="single" collapsible>
              <AccordionItem value="trial">
                <AccordionTrigger>
                  So how does the 14-Day free trial work?
                </AccordionTrigger>
                <AccordionContent>
                  You can try Ascone free for up to 14 days, with full access to
                  everything offered on the plan you sign up for. If you don't
                  cancel within 14 days, we'll charge you for the plan you
                  selected.
                  <br />
                  <br />
                  You can upgrade, downgrade or cancel at any time with just a
                  few clicks.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="credit-card">
                <AccordionTrigger>
                  Why do you need my credit card for the free trial?
                </AccordionTrigger>
                <AccordionContent>
                  This helps us prevent abuse of our free trial system and
                  ensures a seamless transition to your selected plan if you
                  choose to continue using our service.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="cancel">
                <AccordionTrigger>
                  How do I cancel if I'm not super impressed?
                </AccordionTrigger>
                <AccordionContent>
                  You can cancel your subscription at any time through your
                  account settings. If you cancel during your free trial, you
                  won't be charged anything.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <RadioGroup defaultValue="starter" className="grid gap-4">
            <div className="relative rounded-lg border p-6 hover:border-[#004337] [&:has(:checked)]:border-[#004337]">
              <RadioGroupItem
                value="starter"
                id="starter"
                className="absolute right-4 top-4"
              />
              <Label htmlFor="starter" className="grid gap-2 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold">Starter</div>
                  <div className="text-right">
                    <div className="text-xl font-bold">$37/mo.</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Perfect for individuals just starting their financial journey
                </div>
              </Label>
            </div>

            <div className="relative rounded-lg border p-6 hover:border-[#004337] [&:has(:checked)]:border-[#004337]">
              <RadioGroupItem
                value="standard"
                id="standard"
                className="absolute right-4 top-4"
              />
              <div className="absolute right-4 top-4 translate-y-[-24px] rounded-full bg-[#004337]/10 px-2 py-1 text-xs text-[#004337]">
                Popular
              </div>
              <Label htmlFor="standard" className="grid gap-2 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold">Standard</div>
                  <div className="text-right">
                    <div className="text-xl font-bold">$77/mo.</div>
                    <div className="text-sm text-gray-500 line-through">
                      $97/mo.
                    </div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Ideal for those seeking comprehensive financial management
                  tools
                </div>
              </Label>
            </div>

            <div className="relative rounded-lg border p-6 hover:border-[#004337] [&:has(:checked)]:border-[#004337]">
              <RadioGroupItem
                value="pro"
                id="pro"
                className="absolute right-4 top-4"
              />
              <Label htmlFor="pro" className="grid gap-2 cursor-pointer">
                <div className="flex items-center justify-between">
                  <div className="text-xl font-semibold">Pro</div>
                  <div className="text-right">
                    <div className="text-xl font-bold">$150/mo.</div>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  Advanced features for professional investors and power users
                </div>
              </Label>
            </div>
          </RadioGroup>

          <Button
            size="lg"
            className="w-full bg-[#004337] hover:bg-[#004337]/90"
          >
            Continue
          </Button>

          <div className="text-center">
            <Link
              href="#"
              className="text-sm text-gray-600 hover:text-gray-900"
            >
              Show full comparison
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
