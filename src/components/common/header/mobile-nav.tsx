import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { NavLink } from "./nav-link";
import { SearchBar } from "./search-bar";

interface MobileNavProps {
  pathname: string;
}

export function MobileNav({ pathname }: MobileNavProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-80">
        <SheetHeader className="border-b pb-4 text-lg font-medium">Menu</SheetHeader>
        <div className="mt-4 space-y-4">
          <div className="px-2">
            <SearchBar />
          </div>
          <nav className="flex flex-col space-y-3">
            <NavLink href="/products" isActive={pathname === "/products"}>
              Products
            </NavLink>
            <NavLink href="/categories" isActive={pathname === "/categories"}>
              Categories
            </NavLink>
            <NavLink href="/deals" isActive={pathname === "/deals"}>
              Deals
            </NavLink>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  );
}
