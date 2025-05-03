"use client";

import { useState } from "react";

import Link from "next/link";

import { Button } from "@/components/ui/button";

interface AuthCardProps {
  children: React.ReactNode;
  alternateAction?: {
    prompt: string;
    linkText: string;
    href: string;
  };
  action?: {
    text: string;
    onClick: () => Promise<void>;
    loadingText?: string;
  };
}

export function AuthCard({ children, alternateAction, action }: AuthCardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const handleAction = async () => {
    if (!action || isLoading) return;

    setIsLoading(true);
    try {
      await action.onClick();
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {children}

      <div className="space-y-4 text-center">
        {action && (
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground text-sm"
            disabled={isLoading}
            onClick={handleAction}
          >
            {isLoading ? action.loadingText || "Please wait..." : action.text}
          </Button>
        )}

        {alternateAction && (
          <p className="text-muted-foreground text-sm">
            {alternateAction.prompt}{" "}
            <Link
              href={alternateAction.href}
              className="text-foreground hover:text-foreground/80 underline underline-offset-4"
            >
              {alternateAction.linkText}
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
