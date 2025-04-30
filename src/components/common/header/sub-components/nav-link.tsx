"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

interface NavLinkProps {
  href: string;
  isActive: boolean;
  children: React.ReactNode;
}

export function NavLink({ href, isActive, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className={cn("hover:text-foreground/80 transition-colors", isActive ? "text-foreground" : "text-foreground/60")}
    >
      {children}
    </Link>
  );
}
