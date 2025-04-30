import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import { PublicHeader, Footer } from "@/components/common";

export default async function PublicLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();

  if (userId) {
    return redirect("/app");
  }

  return (
    <div className="flex w-full flex-1 flex-col items-center gap-16">
      <PublicHeader />
      <div className="flex w-full max-w-6xl flex-1 flex-col gap-16 p-5">{children}</div>
      <Footer />
    </div>
  );
}
