import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "./nav-link";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { useUser, SignOutButton } from "@clerk/nextjs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";

interface MobileNavProps {
  pathname: string;
}

export function MobileNav({ pathname }: MobileNavProps) {
  const { user, isSignedIn, isLoaded } = useUser();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Deschide meniul</span>
          <VisuallyHidden>Deschide meniul</VisuallyHidden>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="flex w-80 flex-col justify-between">
        <div>
          <SheetHeader>
            <SheetTitle className="border-b pb-4 text-lg font-medium">Meniu</SheetTitle>
          </SheetHeader>
          <div className="mt-4 ml-4 space-y-4">
            <nav className="flex flex-col space-y-3">
              <NavLink href="/products" isActive={pathname === "/products"}>
                Produse
              </NavLink>
              <NavLink href="/categories" isActive={pathname === "/categories"}>
                Categorii
              </NavLink>
              <NavLink href="/deals" isActive={pathname === "/deals"}>
                Oferte
              </NavLink>
            </nav>
          </div>
        </div>
        <div className="mb-4">
          {isLoaded && isSignedIn && user ? (
            <div className="flex flex-col items-center gap-2 border-t px-4 py-2">
              <Avatar className="h-12 w-12">
                <AvatarImage src={user.imageUrl} alt={user.fullName || "Avatar utilizator"} className="object-cover" />
                <AvatarFallback className="bg-background text-foreground">{user.firstName?.[0] || "U"}</AvatarFallback>
              </Avatar>
              <div className="text-center">
                <div className="text-base font-medium">{user.fullName}</div>
                <div className="text-muted-foreground text-xs">{user.primaryEmailAddress?.emailAddress}</div>
              </div>
              <SignOutButton>
                <Button variant="outline" className="mt-2 w-full" size="sm">
                  Deconectare
                </Button>
              </SignOutButton>
            </div>
          ) : (
            <div className="flex flex-col gap-2 px-4">
              <Link href="/auth/sign-in">
                <Button variant="ghost" className="w-full text-sm">
                  Autentificare
                </Button>
              </Link>
              <Link href="/auth/sign-up">
                <Button className="w-full text-sm">Creează cont</Button>
              </Link>
            </div>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
