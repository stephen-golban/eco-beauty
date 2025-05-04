"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

import { AuthLayout, AuthCard } from "../../sub-components";
import { Form, FormSubmitButton } from "@/components/ui/form";
import { EmailInput, NameInput, PasswordInput } from "@/components/common";

import { zodResolver } from "@hookform/resolvers/zod";
import { signUpSchema, SignUpDefaultValues, type SignUpSchema } from "./schema";

import { displayErrors } from "@/lib/utils";

export default function SignUpPage() {
  const router = useRouter();
  const { signUp, isLoaded } = useSignUp();

  const form = useForm<SignUpSchema>({
    mode: "onChange",
    defaultValues: SignUpDefaultValues,
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    if (!isLoaded) return;

    try {
      const dto = {
        emailAddress: data.email,
        password: data.password,
        firstName: data.full_name.split(" ")[0],
        lastName: data.full_name.split(" ").slice(1).join(" "),
      };

      await signUp.create(dto);

      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      router.push("/auth/verify");
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        displayErrors(error.errors);
      }
      console.error(JSON.stringify(error, null, 2));
    }
  });

  return (
    <AuthLayout
      title="Creează-ți contul"
      description="Alătură-te EcoBeauty pentru a începe cumpărăturile de produse de frumusețe sustenabile și eco-friendly."
    >
      <AuthCard alternateAction={{ href: "/auth/sign-in", linkText: "Autentificare", prompt: "Ai deja un cont?" }}>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-6">
              <NameInput name="full_name" />
              <EmailInput />
              <div className="space-y-4">
                <PasswordInput name="password" placeholder="Creează o parolă" autoComplete="new-password" />
                <PasswordInput name="confirmPassword" placeholder="Confirmă parola" autoComplete="new-password" />
              </div>
            </div>
            <div id="clerk-captcha" />
            <FormSubmitButton disabled={!form.formState.isValid}>Creează cont</FormSubmitButton>
          </form>
        </Form>
      </AuthCard>
    </AuthLayout>
  );
}
