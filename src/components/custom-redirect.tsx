"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { FullScreenLoader } from "@/components/common";

export function CustomRedirect({ redirectTo }: { redirectTo: string }) {
  const router = useRouter();

  useEffect(() => {
    router.replace(redirectTo);
  }, [router, redirectTo]);

  return <FullScreenLoader />;
}
