"use client";

import React from "react";

import { useForm } from "react-hook-form";
import { useSignUp } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

import { OtpInput } from "@/components/common";
import { AuthLayout, AuthCard } from "../sub-components";
import { Form, FormSubmitButton } from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { verifySchema, VerifyDefaultValues, type VerifySchema } from "./schema";

import { createUser } from "./action";
import { displayErrors } from "@/lib/utils";

export default function VerifyPage() {
  const router = useRouter();
  const { signUp, isLoaded, setActive } = useSignUp();

  const [cooldown, setCooldown] = React.useState(0);

  const form = useForm<VerifySchema>({
    mode: "onChange",
    defaultValues: VerifyDefaultValues,
    resolver: zodResolver(verifySchema),
  });

  const onSubmit = form.handleSubmit(async (data) => {
    if (!isLoaded) return;

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: data.token,
      });

      // If verification was completed, set the session to active
      // and redirect the user
      if (signUpAttempt.status === "complete") {
        const userData = {
          email: signUpAttempt.emailAddress ?? "",
          clerkId: signUpAttempt.createdUserId ?? "",
          name: `${signUpAttempt.firstName} ${signUpAttempt.lastName}`,
        };
        await createUser(userData)
          .then(() => setActive({ session: signUpAttempt.createdSessionId }))
          .then(() => router.push("/app"));
      } else {
        // If the status is not complete, check why. User may need to
        // complete further steps.
        console.error(JSON.stringify(signUpAttempt, null, 2));
      }
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        displayErrors(error.errors);
      }
      console.error(JSON.stringify(error, null, 2));
    }
  });

  const handleResendCode = async () => {
    if (!isLoaded) return;
    if (cooldown > 0) return;

    try {
      await signUp.prepareEmailAddressVerification({ strategy: "email_code" });
      toast.success("Codul de verificare a fost trimis cu succes!");
      setCooldown(30); // Start 30 second cooldown
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        displayErrors(error.errors);
      } else {
        toast.error("Nu s-a putut trimite codul de verificare. Vă rugăm să încercați mai târziu.");
      }
    }
  };

  return (
    <AuthLayout
      title="Verifică-ți contul"
      description="Te rugăm să introduci codul de verificare pe care l-am trimis pe adresa ta de email."
    >
      <AuthCard
        alternateAction={{
          prompt: "Ai nevoie de ajutor?",
          linkText: "Contactează suportul",
          href: "/support",
        }}
        action={{
          text: cooldown > 0 ? `Retrimite codul în ${cooldown}s` : "Retrimite codul de verificare",
          loadingText: "Se trimite codul...",
          onClick: handleResendCode,
        }}
      >
        <Form {...form}>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="space-y-6">
              <OtpInput
                name="token"
                showLabel={false}
                disabled={form.formState.isSubmitting}
                aria-disabled={form.formState.isSubmitting}
              />
              <FormSubmitButton disabled={!form.formState.isValid}>Verifică</FormSubmitButton>
            </div>
          </form>
        </Form>
      </AuthCard>
    </AuthLayout>
  );
}
