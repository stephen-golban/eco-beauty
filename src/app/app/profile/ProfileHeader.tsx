import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, MapPin } from "lucide-react";

export default function ProfileHeader({ data }: { data: any }) {
  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Profile</h1>
        <p className="text-muted-foreground mt-1">
          Manage your personal information and preferences
        </p>
      </div>
      <div className="flex items-center gap-6">
        <div className="relative">
          <Avatar className="h-20 w-20">
            <AvatarImage src={data.avatar_url || ""} alt={data.full_name} />
            <AvatarFallback className="text-2xl">
              {data.full_name
                .split(" ")
                .map((n: string) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <Button
            size="icon"
            variant="outline"
            className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full"
          >
            <Camera className="h-4 w-4" />
          </Button>
        </div>
        <div>
          <h2 className="text-2xl font-semibold">{data.full_name}</h2>
          <p className="text-muted-foreground">{data.email}</p>
          <p className="text-muted-foreground flex items-center gap-2 mt-1">
            <MapPin className="h-4 w-4" />
            {/* {data.location?.city}, {data.location?.country} */}
          </p>
        </div>
      </div>
    </div>
  );
}
