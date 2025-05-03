"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface HeaderContainerProps {
  children: ReactNode;
  className?: string;
  isScrolled?: boolean;
}

export function HeaderContainer({ children, className, isScrolled }: HeaderContainerProps) {
  return (
    <nav
      className={cn(
        "fixed top-0 right-0 left-0 z-50 w-full transition-all duration-300",
        isScrolled ? "bg-background/80 border-b shadow-sm backdrop-blur-md" : "border-transparent bg-transparent",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center px-5">{children}</div>
    </nav>
  );
}
