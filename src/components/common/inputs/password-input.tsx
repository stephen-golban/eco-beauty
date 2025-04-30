"use client";

import { useState } from "react";
import { useFormContext } from "react-hook-form";

import { Eye, EyeOff } from "lucide-react";
import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  showLabel?: boolean;
}

export function PasswordInput({ showLabel = true, name, ...props }: PasswordInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {showLabel && <FormLabel>{props.placeholder || "Password"}</FormLabel>}
          <FormControl>
            <div className="relative">
              <Input type={showPassword ? "text" : "password"} className="h-11 pr-10" {...field} {...props} />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="text-muted-foreground hover:text-foreground absolute top-1/2 right-3 -translate-y-1/2"
              >
                {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
