"use client";

import React from "react";

import { useSignIn } from "@clerk/nextjs";

import { Button } from "@/components/ui/button";
import { GitHubIcon, GoogleIcon } from "@/components/icons";

import { displayErrors } from "@/lib/utils";
import { isClerkAPIResponseError } from "@clerk/nextjs/errors";

import type { OAuthStrategy } from "@clerk/types";
import { Loader2 } from "lucide-react";

export function SocialAuth() {
  const { isLoaded, signIn } = useSignIn();
  const [loadingStrategy, setLoadingStrategy] = React.useState<OAuthStrategy | null>(null);

  const signInWithOAuth = async (strategy: OAuthStrategy) => {
    if (!isLoaded) return;
    setLoadingStrategy(strategy);
    try {
      await signIn.authenticateWithRedirect({
        strategy,
        redirectUrl: "/sso-callback",
        redirectUrlComplete: "/app",
      });
    } catch (error) {
      if (isClerkAPIResponseError(error)) {
        displayErrors(error.errors);
      }
      console.error(JSON.stringify(error, null, 2));
    } finally {
      // Add a small delay to ensure state updates properly
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoadingStrategy(null);
    }
  };

  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background text-muted-foreground px-2">OR CONTINUE WITH</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <Button
          variant="outline"
          type="button"
          className="h-11"
          disabled={loadingStrategy === "oauth_github"}
          onClick={() => signInWithOAuth("oauth_github")}
        >
          {loadingStrategy === "oauth_github" ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <GitHubIcon className="mr-2 h-5 w-5" />
          )}
          GitHub
        </Button>
        <Button
          variant="outline"
          type="button"
          className="h-11"
          disabled={loadingStrategy === "oauth_google"}
          onClick={() => signInWithOAuth("oauth_google")}
        >
          {loadingStrategy === "oauth_google" ? (
            <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          ) : (
            <GoogleIcon className="mr-2 h-5 w-5" />
          )}
          Google
        </Button>
      </div>
    </>
  );
}
