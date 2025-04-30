"use client";

import { usePreviewStore } from "../store/preview-store";

export function ResumePreview() {
  const { isPreviewVisible, isTouchDevice } = usePreviewStore();

  if (isTouchDevice || !isPreviewVisible) {
    return null;
  }

  return (
    <div className="w-[300px]">
      <div className="sticky top-6">
        <div className="aspect-[1/1.4] rounded-lg border bg-white p-4 shadow-sm">
          {/* Resume preview content will go here */}
        </div>
      </div>
    </div>
  );
}
