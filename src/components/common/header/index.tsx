"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { HeaderContainer } from "./header-container";
import { HeaderLogo } from "./header-logo";
import { NavLink } from "./nav-link";
import { HeaderActions } from "./header-actions";
import { SearchBar } from "./search-bar";
import { MobileNav } from "./mobile-nav";
import { CardDrawer } from "./card-drawer";
import { UserMenu } from "../sidebar/user-menu";
import { Skeleton } from "@/components/ui/skeleton";

export function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, isSignedIn, isLoaded } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isLoaded)
    return (
      <HeaderContainer>
        <div className="flex w-full items-center gap-4 md:gap-8">
          <Skeleton className="h-9 w-9 md:hidden" />
          <div className="mr-8 flex items-center space-x-2">
            <Skeleton className="h-5 w-5" />
            <Skeleton className="h-6 w-24" />
          </div>
          <div className="hidden flex-shrink-0 items-center space-x-6 md:flex">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-5 w-16" />
          </div>
        </div>
        <div className="hidden flex-1 justify-center px-8 md:flex">
          <Skeleton className="h-9 w-full max-w-md" />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="flex items-center space-x-2">
            <Skeleton className="h-9 w-9" />
            <Skeleton className="h-6 w-px" />
            <div className="hidden gap-x-2 md:flex md:items-center">
              <Skeleton className="h-9 w-20" />
              <Skeleton className="h-9 w-24" />
              <Skeleton className="mx-2 h-6 w-px" />
            </div>
            <Skeleton className="h-9 w-9" />
          </nav>
        </div>
      </HeaderContainer>
    );

  return (
    <HeaderContainer isScrolled={isScrolled}>
      <div className="flex items-center gap-4 md:gap-8">
        <MobileNav pathname={pathname} />
        <HeaderLogo href={isSignedIn ? "/app" : "/"} />
        <nav className="hidden items-center space-x-6 text-sm font-medium md:flex">
          <NavLink href="/categories" isActive={pathname === "/categories"}>
            Categories
          </NavLink>
          <NavLink href="/products" isActive={pathname === "/products"}>
            Products
          </NavLink>
          <NavLink href="/deals" isActive={pathname === "/deals"}>
            Deals
          </NavLink>
        </nav>
      </div>

      <div className="hidden flex-1 justify-center px-8 md:flex">
        <SearchBar />
      </div>

      <HeaderActions>
        <div className="hidden gap-x-2 md:flex md:items-center">
          {isLoaded && isSignedIn && user ? (
            <UserMenu user={user} collapsed={false} />
          ) : (
            <>
              <Link href="/auth/sign-in">
                <Button variant="ghost" className="text-sm">
                  Sign in
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="text-sm">Get Started</Button>
              </Link>
              <div className="bg-foreground/60 mx-2 h-6 w-[1px]" />
            </>
          )}
        </div>
        <CardDrawer />
      </HeaderActions>
    </HeaderContainer>
  );
}
