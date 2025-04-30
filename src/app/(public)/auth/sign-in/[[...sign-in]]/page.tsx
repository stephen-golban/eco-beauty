"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useSignIn } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

import { AuthLayout, AuthCard } from "../../sub-components";
import { Form, FormSubmitButton } from "@/components/ui/form";
import { EmailInput, PasswordInput } from "@/components/common";

import { zodResolver } from "@hookform/resolvers/zod";
import { signInSchema, SignInDefaultValues, type SignInSchema } from "./schema";

import { displayErrors } from "@/lib/utils";
import Link from "next/link";

export default function SignInPage() {
  const router = useRouter();
  const { signIn, isLoaded, setActive } = useSignIn();

  const form = useForm<SignInSchema>({
    mode: "onChange",
    defaultValues: SignInDefaultValues,
    resolver: zodResolver(signInSchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    if (!isLoaded) return;

    try {
      const signInAttempt = await signIn.create({ identifier: data.email, password: data.password });

      if (signInAttempt.status === "complete") {
        await setActive({ session: signInAttempt.createdSessionId });
        router.push("/app");
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signInAttempt, null, 2));
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
      title="Welcome Back to Vezumo"
      description="Sign in to access your resume builder and continue creating your professional profile."
    >
      <AuthCard alternateAction={{ href: "/auth/sign-up", linkText: "Sign Up", prompt: "Don't have an account?" }}>
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-6">
              <EmailInput />

              <div className="space-y-2">
                <PasswordInput name="password" placeholder="Enter your password" autoComplete="current-password" />
                <div className="flex justify-end">
                  <Link
                    href="/auth/forgot-password"
                    className="text-muted-foreground hover:text-foreground text-sm underline-offset-4 hover:underline"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
            </div>
            <FormSubmitButton disabled={!form.formState.isValid}>Sign In</FormSubmitButton>
          </form>
        </Form>
      </AuthCard>
    </AuthLayout>
  );
}
