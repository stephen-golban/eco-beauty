import type { Metadata } from "next";
import { auth } from "@clerk/nextjs/server";
import { TopNavigation } from "./sub-components/top-navigation";
import { ResumeForm } from "./sub-components/resume-form";
import { ResumePreview } from "./sub-components/resume-preview";
import { PreviewModal } from "./sub-components/preview-modal";

export const metadata: Metadata = {
  title: "Design your resume",
  description: "Design your resume with our editor",
};

export default async function EditorPage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <TopNavigation />

      {/* Main Content */}
      <div className="flex-1">
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex gap-6">
            <ResumeForm />
            <ResumePreview />
          </div>
        </div>
      </div>

      {/* Preview Modal for touch devices */}
      <PreviewModal />
    </div>
  );
}
