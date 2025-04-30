import { z } from "zod";

import { passwordSchema, codeSchema } from "@/lib/schemas";

export const resetPasswordSchema = z
  .object({
    token: codeSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const ResetPasswordDefaultValues: ResetPasswordSchema = {
  token: "",
  password: "",
  confirmPassword: "",
};

export type ResetPasswordSchema = z.infer<typeof resetPasswordSchema>;
