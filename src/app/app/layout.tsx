import { auth } from "@clerk/nextjs/server";

import { Sidebar } from "@/components/common";
import { SubscriptionLevelProvider } from "@/components/providers";

import { getUserSubscriptionLevel } from "@/lib/subscription";

export default async function MainLayout({ children }: { children: React.ReactNode }) {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const userSubscriptionLevel = await getUserSubscriptionLevel(userId);

  return (
    <SubscriptionLevelProvider userSubscriptionLevel={userSubscriptionLevel}>
      <div className="flex min-h-screen">
        <Sidebar />
        <main className="flex-1">
          <div className="h-full p-6 pt-16 md:pt-16">{children}</div>
        </main>
      </div>
    </SubscriptionLevelProvider>
  );
}
