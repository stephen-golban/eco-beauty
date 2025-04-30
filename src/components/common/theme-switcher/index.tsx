"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

interface ThemeSwitcherProps {
  collapsed?: boolean;
}

const ThemeSwitcher = ({ collapsed = false }: ThemeSwitcherProps) => {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const ICON_SIZE = 16;
  const isDark = theme !== "light";

  return (
    <div className="px-3 py-2">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className={cn(
                "hover:bg-accent flex w-full items-center rounded-lg py-2 text-sm font-medium transition-all duration-300",
                collapsed ? "justify-center" : "gap-3 px-3",
                "text-muted-foreground",
              )}
              onClick={() => setTheme(isDark ? "light" : "dark")}
            >
              {collapsed ? (
                isDark ? (
                  <Sun size={ICON_SIZE} />
                ) : (
                  <Moon size={ICON_SIZE} />
                )
              ) : (
                <>
                  {isDark ? <Sun size={ICON_SIZE} /> : <Moon size={ICON_SIZE} />}
                  <span
                    className={cn(
                      "overflow-hidden whitespace-nowrap transition-all duration-300",
                      collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
                    )}
                  >
                    Switch to {isDark ? "Light" : "Dark"}
                  </span>
                </>
              )}
              <span className="sr-only">Switch to {isDark ? "light" : "dark"} mode</span>
            </Button>
          </TooltipTrigger>
          {collapsed && (
            <TooltipContent side="right">
              <p>Switch to {isDark ? "light" : "dark"} mode</p>
            </TooltipContent>
          )}
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export { ThemeSwitcher };
