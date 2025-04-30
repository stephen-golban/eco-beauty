"use client";

import { useEffect, useRef } from "react";
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

interface OtpInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  showLabel?: boolean;
  onFilled?: (value: string) => void;
}

export const OtpInput = ({ name, showLabel = true, className, onFilled, ...props }: OtpInputProps) => {
  const form = useFormContext();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const checkAndTriggerFilled = (value: string) => {
    if (value.length === 6 && onFilled) {
      onFilled(value);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === "Backspace") {
      if ((e.target as HTMLInputElement).value === "" && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    const isNumber = /^\d*$/.test(value);

    if (!isNumber) {
      e.target.value = "";
      return;
    }

    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Update the form value
    const newOtp = inputRefs.current.map((input) => input?.value || "").join("");
    form.setValue("token", newOtp);
    checkAndTriggerFilled(newOtp);
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData
      .getData("text")
      .replace(/[^0-9]/g, "")
      .slice(0, 6);

    if (pastedData) {
      // Split the pasted string into individual digits
      const digits = pastedData.split("");

      // Fill in the inputs
      digits.forEach((digit, index) => {
        if (inputRefs.current[index]) {
          inputRefs.current[index]!.value = digit;
        }
      });

      // Focus the next empty input or the last input if all are filled
      const nextEmptyIndex = digits.length < 6 ? digits.length : 5;
      inputRefs.current[nextEmptyIndex]?.focus();

      // Update form value
      const newOtp = inputRefs.current.map((input) => input?.value || "").join("");
      form.setValue("token", newOtp);
      checkAndTriggerFilled(newOtp);
    }
  };

  useEffect(() => {
    // Reset refs array
    inputRefs.current = inputRefs.current.slice(0, 6);
  }, []);

  return (
    <FormField
      name={name}
      control={form.control}
      render={({ field }) => (
        <FormItem className="w-full">
          {showLabel && <FormLabel>Verification Code</FormLabel>}
          <FormControl>
            <div
              className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4"
              onPaste={(e) => {
                handlePaste(e);
                field.onChange(inputRefs.current.map((input) => input?.value || "").join(""));
              }}
            >
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={index} className="w-8 sm:w-12 md:w-14">
                  <input
                    ref={(el: HTMLInputElement | null) => {
                      inputRefs.current[index] = el;
                    }}
                    autoFocus={index === 0}
                    type="text"
                    maxLength={1}
                    className={cn(
                      "w-full bg-transparent text-center font-mono text-2xl sm:text-3xl md:text-4xl",
                      "border-0 border-b-2 border-gray-200 dark:border-gray-700",
                      "focus:border-primary focus:border-b-2 focus:outline-none",
                      "transition-colors duration-200",
                      "disabled:cursor-not-allowed disabled:opacity-50",
                      className,
                    )}
                    disabled={props.disabled}
                    aria-disabled={props.disabled}
                    onKeyDown={(e) => handleKeyDown(e, index)}
                    onChange={(e) => {
                      handleInput(e, index);
                      field.onChange(inputRefs.current.map((input) => input?.value || "").join(""));
                    }}
                    {...props}
                  />
                </div>
              ))}
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  );
};
