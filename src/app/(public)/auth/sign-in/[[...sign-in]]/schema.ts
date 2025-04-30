import { z } from "zod";
import { passwordSchema } from "@/lib/schemas";

export const signInSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: passwordSchema,
});

export const SignInDefaultValues: SignInSchema = {
  email: "",
  password: "",
};

export type SignInSchema = z.infer<typeof signInSchema>;
