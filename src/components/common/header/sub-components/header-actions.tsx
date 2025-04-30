"use client";

import { ThemeSwitcher } from "../../theme-switcher";
import { Separator } from "@/components/ui/separator";

import { type ReactNode } from "react";

interface HeaderActionsProps {
  children: ReactNode;
}

export function HeaderActions({ children }: HeaderActionsProps) {
  return (
    <div className="flex flex-1 items-center justify-end space-x-4">
      <nav className="flex items-center space-x-2">
        <ThemeSwitcher />
        <Separator orientation="vertical" className="h-6" />
        {children}
      </nav>
    </div>
  );
}
