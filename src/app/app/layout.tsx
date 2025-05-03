import { CustomRedirect } from "@/components/custom-redirect";
import { auth } from "@clerk/nextjs/server";

export default async function AppLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();
  if (!userId) {
    return <CustomRedirect redirectTo="/" />;
  }
  return <div className="mx-auto flex w-full max-w-7xl flex-1 flex-col gap-16 py-10">{children}</div>;
}
