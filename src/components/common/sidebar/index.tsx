"use client";

import { useState } from "react";
import { useUser } from "@clerk/nextjs";

import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SidebarContent } from "./sidebar-content";
import { FullScreenLoader } from "../full-screen-loader";
import { SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

import { cn } from "@/lib/utils";

export function Sidebar() {
  const { user, isLoaded, isSignedIn } = useUser();
  const [collapsed, setCollapsed] = useState(true);

  if (!isLoaded || !isSignedIn) {
    return <FullScreenLoader />;
  }

  return (
    <>
      {/* Desktop sidebar */}
      <aside
        className={cn(
          "sticky top-0 hidden h-screen transition-all duration-300 md:flex md:flex-col",
          collapsed ? "md:w-16" : "md:w-64",
        )}
      >
        <div className="bg-background flex h-full flex-col border-r">
          <SidebarContent user={user} collapsed={collapsed} onToggle={() => setCollapsed(!collapsed)} />
        </div>
      </aside>

      {/* Mobile sidebar */}
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost" className="fixed top-2 left-3 z-40 px-4 md:hidden" size="icon">
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-64 p-0">
          <SheetHeader className="sr-only">
            <SheetTitle>Sidebar</SheetTitle>
          </SheetHeader>
          <SidebarContent user={user} collapsed={false} onToggle={() => {}} />
        </SheetContent>
      </Sheet>
    </>
  );
}
