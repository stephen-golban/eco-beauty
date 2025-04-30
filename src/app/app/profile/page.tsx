"use client";

import ProfileForm from "./ProfileForm";
import ProfileHeader from "./ProfileHeader";
import AccountSettings from "./AccountSettings";
import EmailPreferences from "./EmailPreferences";
import { FullScreenLoader } from "@/components/common";

export default function ProfilePage() {
  // if (isLoading) {
  //   return (
  //     <div className="relative">
  //       <FullScreenLoader />
  //     </div>
  //   );
  // }

  // if (error || !data) {
  //   return (
  //     <div className="flex items-center justify-center">
  //       {error && (
  //         <div className="text-red-500">Error: {(error as Error).message}</div>
  //       )}
  //       {!data && (
  //         <div className="text-red-500">
  //           Error: No user data found. Please try again later.
  //         </div>
  //       )}
  //     </div>
  //   );
  // }

  return (
    <>
      {/* <ProfileHeader data={data} /> */}
      <div className="grid gap-8">
        {/* <ProfileForm data={data} /> */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[2fr,1fr]">
          <EmailPreferences />
          <AccountSettings />
        </div>
      </div>
    </>
  );
}
