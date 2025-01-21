import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  return (
    <div className="h-auto mx-auto max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] py-24 px-[2%] lg:px-2">
      <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 w-full space-y-8">
        <div className="space-y-4 text-left w-full">
          <div className="inline-block rounded-full text-sm font-semibold text-[#004337]">
            FAQ
          </div>
          <div className="text-5xl md:text-6xl font-bold text-black w-[90%]">
            Frequenlty asked questions
          </div>
        </div>

        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="bank-transfer">
            <AccordionTrigger>How sending a bank transfer</AccordionTrigger>
            <AccordionContent>
              To send a bank transfer, simply navigate to the transfers section
              in your account, enter the recipient's details, and follow the
              secure verification process. We ensure all transfers are processed
              quickly and securely.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="scheduled-payments">
            <AccordionTrigger>
              What is the scheduled payments feature?
            </AccordionTrigger>
            <AccordionContent>
              The scheduled payments feature allows you to manage all of your
              subscriptions or recurring payments in one place. This way, you
              can view details for every payment, which include the amount,
              frequency, payment dates etc.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="reactivate-card">
            <AccordionTrigger>
              How can I reactivate a terminated card?
            </AccordionTrigger>
            <AccordionContent>
              To reactivate a terminated card, please contact our customer
              support team through the app or website. They will guide you
              through the verification process and help reactivate your card if
              eligible.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="refund">
            <AccordionTrigger>How about with a refund?</AccordionTrigger>
            <AccordionContent>
              Refunds are typically processed within 5-7 business days. Once
              initiated, you can track the refund status in your transaction
              history. The time to receive the refund may vary depending on your
              bank.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="add-money">
            <AccordionTrigger>
              How can add money to my account?
            </AccordionTrigger>
            <AccordionContent>
              You can add money to your account through bank transfer, debit
              card, or digital payment services. All deposits are processed
              instantly and securely through our protected payment system.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
