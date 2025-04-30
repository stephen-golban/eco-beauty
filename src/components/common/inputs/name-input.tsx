"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface NameInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showLabel?: boolean;
  name: string;
}

export function NameInput({ showLabel = true, name, ...props }: NameInputProps) {
  const form = useFormContext();

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {showLabel && <FormLabel>Full Name</FormLabel>}
          <FormControl>
            <Input
              {...field}
              {...props}
              type="text"
              placeholder="John Doe"
              autoCapitalize="words"
              autoComplete="name"
              autoCorrect="off"
              className="h-11"
              value={field.value ?? ""}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
