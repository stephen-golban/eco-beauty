import { z } from "zod";

export const forgotPasswordSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
});

export const ForgotPasswordDefaultValues: ForgotPasswordSchema = {
  email: "",
};

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
