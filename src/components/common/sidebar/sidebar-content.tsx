import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { SidebarNav } from "./sidebar-nav";
import { SidebarToggle } from "./sidebar-toggle";
import { UserMenu } from "./user-menu";
import { navigation } from "./navigation";
import logo from "@/assets/logo.svg";
import type { UserResource } from "@clerk/types";
import { ThemeSwitcher } from "../theme-switcher";

interface SidebarContentProps {
  user: UserResource;
  collapsed: boolean;
  onToggle: () => void;
}

export function SidebarContent({ user, collapsed, onToggle }: SidebarContentProps) {
  return (
    <div className="flex h-full flex-col">
      <div className="flex h-16 items-center border-b px-4">
        <Link href="/app" className="flex items-center">
          <Image src={logo} alt="Vezumo Logo" width={20} height={20} className={cn("ml-1.5 dark:invert")} />
          <span
            className={cn(
              "ml-2 text-xl font-semibold tracking-tight transition-all duration-300",
              collapsed ? "w-0 opacity-0" : "w-auto opacity-100",
            )}
          >
            Vezumo
          </span>
        </Link>
      </div>
      <div className="flex-1 overflow-auto px-3 py-4">
        <SidebarNav items={navigation} collapsed={collapsed} />
      </div>
      <SidebarToggle collapsed={collapsed} onToggle={onToggle} />
      <ThemeSwitcher collapsed={collapsed} />
      <UserMenu user={user} collapsed={collapsed} />
    </div>
  );
}
