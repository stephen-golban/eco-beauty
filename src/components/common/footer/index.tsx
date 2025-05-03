"use client";

import { usePathname } from "next/navigation";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";

export function Footer() {
  const pathname = usePathname();

  return (
    <footer className="w-full border-t">
      <div className="mx-auto max-w-7xl px-5 pt-12 pb-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="mb-4 flex items-center space-x-2">
              <Image src="/logo.svg" alt="Eco Beauty Logo" width={20} height={20} className={cn("dark:invert")} />
              <h3 className="text-lg font-semibold">Eco Beauty</h3>
            </div>
            <p className="text-muted-foreground max-w-sm text-sm">
              Discover sustainable and eco-friendly beauty products that are good for you and the planet.
            </p>
          </div>
          <div>
            <h4 className="mb-3 font-medium">Shop</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/products"
                  className={`transition-colors ${
                    pathname === "/products"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link
                  href="/categories"
                  className={`transition-colors ${
                    pathname === "/categories"
                      ? "text-foreground font-medium"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Categories
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
        </div>
        <div className="text-muted-foreground mt-10 flex items-center justify-between border-t pt-6 text-sm">
          <p>© {new Date().getFullYear()} Eco Beauty. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
