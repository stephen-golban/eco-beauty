import React from "react";

import { Loader2 } from "lucide-react";

export const FullScreenLoader = () => {
  return (
    <div className="absolute top-0 left-0 z-50 flex h-full min-h-screen w-full items-center justify-center">
      <Loader2 className="h-10 w-10 animate-spin" />
    </div>
  );
};
