import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function SearchBar() {
  return (
    <div className="relative w-full max-w-md">
      <Search className="text-foreground/60 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input type="search" placeholder="Search products..." className={cn("w-full pl-9")} />
    </div>
  );
}
