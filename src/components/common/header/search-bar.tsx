import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import React from "react";

interface SearchBarProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  className?: string;
}

export function SearchBar({ value, onChange, placeholder = "Caută produse...", className }: SearchBarProps) {
  return (
    <div className={cn("relative w-full max-w-md", className)}>
      <Search className="text-foreground/60 absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2" />
      <Input
        type="search"
        value={value}
        onChange={onChange}
        onResetCapture={(e) => console.log("reset", e)}
        placeholder={placeholder}
        className={cn("w-full pl-9")}
      />
    </div>
  );
}
