"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showLabel?: boolean;
}

export function EmailInput({ showLabel = true, ...props }: EmailInputProps) {
  const form = useFormContext();

  return (
    <FormField
      control={form.control}
      name="email"
      render={({ field }) => (
        <FormItem>
          {showLabel && <FormLabel>Email</FormLabel>}
          <FormControl>
            <Input
              type="email"
              placeholder="name@example.com"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              className="h-11"
              {...field}
              {...props}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
