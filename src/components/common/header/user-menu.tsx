import { LogOut } from "lucide-react";

import { SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import { cn } from "@/lib/utils";

import type { UserResource } from "@clerk/types";

interface UserMenuProps {
  user: UserResource;
  collapsed?: boolean;
}

export function UserMenu({ user, collapsed }: UserMenuProps) {
  const userAvatar = (
    <Avatar className="ring-border dark:ring-border h-8 w-8 cursor-pointer ring-1">
      <AvatarImage src={user.imageUrl} alt={user.fullName || "Avatar utilizator"} className="object-cover" />
      <AvatarFallback className="bg-background text-foreground">{user.firstName?.[0] || "U"}</AvatarFallback>
    </Avatar>
  );

  return (
    <div className="border-t">
      <div className="p-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              size="sm"
              className={cn("h-10 w-full px-2 hover:bg-transparent", collapsed ? "justify-center" : "justify-start")}
            >
              {userAvatar}
              {!collapsed && <span className="ml-2 truncate">{user.fullName}</span>}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56" sideOffset={10}>
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">{user.fullName}</p>
                <p className="text-muted-foreground text-xs leading-none">{user.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <SignOutButton>
              <DropdownMenuItem variant="destructive" className="cursor-pointer">
                <LogOut className="mr-2 h-4 w-4" />
                Deconectare
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
