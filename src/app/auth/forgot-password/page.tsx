"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

import { EmailInput } from "@/components/common";
import { AuthLayout, AuthCard } from "../sub-components";
import { Form, FormSubmitButton } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { forgotPasswordSchema, ForgotPasswordDefaultValues, type ForgotPasswordSchema } from "./schema";

import { displayErrors } from "@/lib/utils";

export default function SignUpPage() {
  const router = useRouter();
  const { signIn, isLoaded } = useSignIn();

  const form = useForm<ForgotPasswordSchema>({
    mode: "onChange",
    defaultValues: ForgotPasswordDefaultValues,
    resolver: zodResolver(forgotPasswordSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    if (!isLoaded) return;

    try {
      await signIn.create({ strategy: "reset_password_email_code", identifier: data.email });
      toast.success("Verification code sent successfully!");
      router.push(`/auth/reset-password`);
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        displayErrors(error.errors);
      }
      console.error(JSON.stringify(error, null, 2));
    }
  });
  return (
    <AuthLayout
      title="Verifică-ți contul"
      description="Te rugăm să introduci adresa de email pentru a primi instrucțiuni de resetare."
    >
      <AuthCard>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-6">
              <EmailInput />
              <FormSubmitButton disabled={!form.formState.isValid}>Trimite instrucțiuni de resetare</FormSubmitButton>
            </div>
          </form>
        </Form>
      </AuthCard>
    </AuthLayout>
  );
}
