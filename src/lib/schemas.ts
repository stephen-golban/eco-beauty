import { z } from "zod";

const passwordSchema = z
  .string()
  .min(8, { message: "Password must be at least 8 characters long" })
  .regex(/[A-Z]/, {
    message: "Password must include at least one uppercase letter",
  })
  .regex(/[0-9]/, { message: "Password must include at least one number" })
  .regex(/[^a-zA-Z0-9]/, {
    message: "Password must include at least one special character",
  });

const fullNameSchema = z
  .string()
  .min(2, { message: "Full name must be at least 2 characters" })
  .max(100, { message: "Full name must be less than 100 characters" })
  .regex(/^[a-zA-Z\s'-]+$/, { message: "Full name can only contain letters, spaces, hyphens and apostrophes" })
  .trim();

const codeSchema = z
  .string()
  .transform((value) => value.replace(/\s+/g, ""))
  .refine((value) => value.length === 6, {
    message: "OTP code must be exactly 6 characters",
  })
  .refine((value) => /^\d+$/.test(value), {
    message: "OTP code must contain only numbers",
  });

const optionalString = z.string().trim().optional().or(z.literal(""));

export { passwordSchema, fullNameSchema, codeSchema, optionalString };
