import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t mx-auto max-w-[640px] md:max-w-[768px] lg:max-w-[1200px] py-10 px-[2%] lg:px-2">
      <div className="container py-8">
        <div className="grid gap-10 lg:gap-8 md:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_1fr_1.5fr]">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Security</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Product</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href="#">Features</Link>
              </li>
              <li>
                <Link href="#">Pricing</Link>
              </li>
              <li>
                <Link href="#">Security</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Company</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href="#">About</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Legal</h3>
            <ul className="space-y-4 text-sm text-gray-600">
              <li>
                <Link href="#">Privacy Policy</Link>
              </li>
              <li>
                <Link href="#">Terms of Service</Link>
              </li>
              <li>
                <Link href="#">Cookie Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-8 lg:gap-16">
            <a href="#" className="text-9xl text-[#004337]">
              Ascone
            </a>
            <div className="flex flex-col gap-10 md:gap-0 md:flex-row justify-between">
              <p className="text-sm w-[55%]">
                181 Bay StreetBay wellington tower, Suite 292 Toronto,
                OntarioM5J 2T3
              </p>
              <p className="text-sm text-left mt-auto">English (UK)</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between mt-8 border-t pt-8 text-center text-sm text-gray-600">
          <div>© {new Date().getFullYear()} Ascone. All rights reserved.</div>

          <div className="flex flex-row gap-8">
            <a href="" className="text-black font-bold">
              Privacy Police
            </a>
            <a href="" className="text-black font-bold">
              Terms of Use
            </a>
            <a href="" className="text-black font-bold">
              Disclosure
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
