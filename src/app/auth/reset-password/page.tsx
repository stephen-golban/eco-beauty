"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

import { AuthLayout, AuthCard } from "../sub-components";
import { Form, FormSubmitButton } from "@/components/ui/form";
import { CodeInput, PasswordInput } from "@/components/common";

import { zodResolver } from "@hookform/resolvers/zod";
import { resetPasswordSchema, ResetPasswordDefaultValues, type ResetPasswordSchema } from "./schema";

import { displayErrors } from "@/lib/utils";

export default function ResetPasswordPage() {
  const router = useRouter();
  const { signIn, isLoaded, setActive } = useSignIn();

  const form = useForm<ResetPasswordSchema>({
    mode: "onChange",
    defaultValues: ResetPasswordDefaultValues,
    resolver: zodResolver(resetPasswordSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    if (!isLoaded) return;

    try {
      const attempt = await signIn.attemptFirstFactor({
        code: data.token,
        password: data.password,
        strategy: "reset_password_email_code",
      });

      if (attempt.status === "complete") {
        await setActive({ session: attempt.createdSessionId });
        router.push("/app");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(attempt, null, 2));
      }
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        displayErrors(error.errors);
      }
      console.error(JSON.stringify(error, null, 2));
    }
  });

  return (
    <AuthLayout
      title="Resetează-ți parola"
      description="Te rugăm să introduci codul de verificare primit pe email și noua ta parolă."
    >
      <AuthCard alternateAction={{ linkText: "Autentificare", href: "/auth/sign-in", prompt: "Ți-ai amintit parola?" }}>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-6">
              <CodeInput
                name="token"
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
              <PasswordInput name="password" placeholder="Introdu noua parolă" autoComplete="new-password" />
              <PasswordInput name="confirmPassword" autoComplete="new-password" placeholder="Confirmă noua parolă" />
              <FormSubmitButton disabled={!form.formState.isValid}>Resetează parola</FormSubmitButton>
            </div>
          </form>
        </Form>
      </AuthCard>
    </AuthLayout>
  );
}
