"use client";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";
import { useUser, SignOutButton } from "@clerk/nextjs";

import { LogOut, User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { HeaderContainer, HeaderLogo, NavLink, HeaderActions } from "./sub-components";
import {
  DropdownMenu,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

export function MainHeader() {
  const router = useRouter();
  const pathname = usePathname();
  const { user, isSignedIn, isLoaded } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null;
  }

  return (
    <HeaderContainer className="[&>div]:max-w-[95%]">
      <HeaderLogo href="/dashboard" />

      <div className="hidden md:flex md:flex-1">
        <nav className="flex items-center space-x-6 text-sm font-medium">
          <NavLink href="/dashboard" isActive={pathname === "/dashboard"}>
            Dashboard
          </NavLink>
          <NavLink href="/resumes" isActive={pathname === "/resumes"}>
            My Resumes
          </NavLink>
          <NavLink href="/templates" isActive={pathname === "/templates"}>
            Templates
          </NavLink>
        </nav>
      </div>

      <HeaderActions>
        <DropdownMenu>
          <DropdownMenuTrigger className="focus:outline-none">
            <Avatar className="h-8 w-8 cursor-pointer">
              <AvatarImage src={user.imageUrl} alt={user.fullName || "User avatar"} />
              <AvatarFallback>{user.firstName?.[0] || "U"}</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <div className="flex items-center justify-start gap-2 p-2">
              <div className="flex flex-col space-y-1">
                <p className="text-sm leading-none font-medium">{user.fullName}</p>
                <p className="text-muted-foreground text-xs leading-none">{user.primaryEmailAddress?.emailAddress}</p>
              </div>
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => router.push("/account")} className="cursor-pointer">
              <User className="mr-2 h-4 w-4" />
              <span>Account</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <SignOutButton>
              <DropdownMenuItem
                variant="destructive"
                // onClick={() => router.push("/auth/sign-in")}
                className="cursor-pointer"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Sign out</span>
              </DropdownMenuItem>
            </SignOutButton>
          </DropdownMenuContent>
        </DropdownMenu>
      </HeaderActions>
    </HeaderContainer>
  );
}
