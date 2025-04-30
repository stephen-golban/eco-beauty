"use client";

import { ScrollArea } from "@/components/ui/scroll-area";

export function ResumeForm() {
  return (
    <div className="flex-1">
      <ScrollArea className="h-[calc(100vh-180px)]">
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">Let&apos;s start with your header</h1>
            <p className="text-muted-foreground mt-2">
              Include your full name and multiple ways for employers to reach you.
            </p>
          </div>

          {/* Form content will go here */}
          <div className="space-y-4">{/* We'll add form fields here in the next step */}</div>
        </div>
      </ScrollArea>
    </div>
  );
}
