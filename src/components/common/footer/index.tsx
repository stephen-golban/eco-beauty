"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-6xl px-5 pt-12 pb-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-5">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Image src="/logo.svg" alt="Vezumo Logo" width={20} height={20} className={cn("dark:invert")} />
              <h3 className="text-lg font-semibold">Vezumo</h3>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Build professional resumes with modern templates and easy customization.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Product</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/templates"
                  className={`transition-colors ${
                    pathname === "/templates"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Templates
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  className={`transition-colors ${
                    pathname === "/features"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className={`transition-colors ${
                    pathname === "/pricing"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/about"
                  className={`transition-colors ${
                    pathname === "/about"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className={`transition-colors ${
                    pathname === "/privacy"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Help</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/contact"
                  className={`transition-colors ${
                    pathname === "/contact"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className={`transition-colors ${
                    pathname === "/support"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-muted-foreground mt-10 flex items-center justify-between border-t pt-6 text-sm">
          <p>© {new Date().getFullYear()} Vezumo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
