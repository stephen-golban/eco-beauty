import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import type { NavigationItem } from "./navigation";

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {
  items: NavigationItem[];
  collapsed?: boolean;
}

export function SidebarNav({ className, items, collapsed, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  return (
    <nav className={cn("flex flex-col gap-2", className)} {...props}>
      <TooltipProvider>
        {items.map((item) => (
          <Tooltip key={item.href}>
            <TooltipTrigger asChild>
              <Link
                href={item.href}
                className={cn(
                  "hover:bg-accent flex items-center rounded-lg py-2 text-sm font-medium transition-all duration-300",
                  collapsed ? "justify-center" : "gap-3 px-3",
                  pathname === item.href && "bg-accent text-accent-foreground",
                )}
              >
                {item.icon}
                <span
                  className={cn(
                    "overflow-hidden whitespace-nowrap transition-all duration-300",
                    collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
                  )}
                >
                  {item.title}
                </span>
              </Link>
            </TooltipTrigger>
            {collapsed && (
              <TooltipContent side="right">
                <p>{item.title}</p>
              </TooltipContent>
            )}
          </Tooltip>
        ))}
      </TooltipProvider>
    </nav>
  );
}
