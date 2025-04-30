"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { usePreviewStore } from "../store/preview-store";

export function PreviewModal() {
  const { isModalOpen, setModalOpen } = usePreviewStore();

  return (
    <Dialog open={isModalOpen} onOpenChange={setModalOpen}>
      <DialogContent className="max-w-[calc(100vw-32px)] sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Resume Preview</DialogTitle>
        </DialogHeader>
        <div className="aspect-[1/1.4] w-full rounded-lg border bg-white p-4 shadow-sm">
          {/* Resume preview content will go here */}
        </div>
      </DialogContent>
    </Dialog>
  );
}
