"use client";

import { useFormContext } from "react-hook-form";

import { Input } from "@/components/ui/input";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

interface CodeInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  showLabel?: boolean;
  name: string;
}

export function CodeInput({ showLabel = true, name, ...props }: CodeInputProps) {
  const form = useFormContext();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "").slice(0, 6);
    e.target.value = value;
    return value;
  };

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem>
          {showLabel && <FormLabel>Verification Code</FormLabel>}
          <FormControl>
            <Input
              {...field}
              {...props}
              type="text"
              maxLength={6}
              pattern="[0-9]*"
              inputMode="numeric"
              placeholder="000000"
              autoComplete="one-time-code"
              value={field.value ?? ""}
              onChange={(e) => {
                const value = handleInput(e);
                field.onChange(value);
              }}
            />
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
}
