import React from "react";

import { Loader2 } from "lucide-react";
import { HeaderLogo } from "../header/header-logo";

export const FullScreenLoader = () => {
  return (
    <div className="bg-background absolute top-0 left-0 z-50 flex h-full min-h-screen w-full flex-col items-center justify-center">
      <HeaderLogo href="/" />
      <Loader2 className="mt-4 h-10 w-10 animate-spin" />
    </div>
  );
};
