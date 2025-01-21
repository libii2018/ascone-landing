import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Navigation() {
  return (
    <header className="container mx-auto flex h-20 w-full items-center justify-between">
      <div className="flex items-center gap-6">
        <Link href="/" className="text-xl font-semibold">
          Ascone
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#features"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Features
          </Link>
          <Link
            href="#accounts"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Accounts
          </Link>
          <Link
            href="#company"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Company
          </Link>
          <Link
            href="#insight"
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Insight
          </Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <Link
          href="/login"
          className="text-sm font-medium text-gray-600 hover:text-gray-900"
        >
          Login
        </Link>
        <Button className="bg-[#004337] hover:bg-[#004337]/90">Sign Up</Button>
      </div>
    </header>
  );
}
