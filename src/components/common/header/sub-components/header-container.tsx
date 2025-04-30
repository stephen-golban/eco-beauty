"use client";

import { cn } from "@/lib/utils";
import { type ReactNode } from "react";

interface HeaderContainerProps {
  children: ReactNode;
  className?: string;
}

export function HeaderContainer({ children, className }: HeaderContainerProps) {
  return (
    <nav
      className={cn(
        "bg-background/95 supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50 w-full border-b backdrop-blur",
        className,
      )}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center px-5">{children}</div>
    </nav>
  );
}
