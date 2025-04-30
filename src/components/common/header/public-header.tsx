"use client";

import Link from "next/link";

import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { HeaderContainer, HeaderLogo, NavLink, HeaderActions } from "./sub-components";

export function PublicHeader() {
  const pathname = usePathname();

  return (
    <HeaderContainer>
      <HeaderLogo href="/" />

      <div className="hidden md:flex md:flex-1">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <NavLink href="/templates" isActive={pathname === "/templates"}>
            Templates
          </NavLink>
          <NavLink href="/features" isActive={pathname === "/features"}>
            Features
          </NavLink>
          <NavLink href="/pricing" isActive={pathname === "/pricing"}>
            Pricing
          </NavLink>
        </nav>
      </div>

      <HeaderActions>
        <Link href="/auth/sign-in">
          <Button variant="ghost" className="text-sm">
            Sign in
          </Button>
        </Link>
        <Link href="/auth/sign-up">
          <Button className="text-sm">Get Started</Button>
        </Link>
      </HeaderActions>
    </HeaderContainer>
  );
}
