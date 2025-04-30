import { z } from "zod";

import { fullNameSchema, passwordSchema } from "@/lib/schemas";

export const signUpSchema = z
  .object({
    full_name: fullNameSchema,
    password: passwordSchema,
    confirmPassword: passwordSchema,
    email: z.string().email({ message: "Invalid email address" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export const SignUpDefaultValues: SignUpSchema = {
  full_name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export type SignUpSchema = z.infer<typeof signUpSchema>;
