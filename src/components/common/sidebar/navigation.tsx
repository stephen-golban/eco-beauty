import { ReactNode } from "react";
import { LayoutDashboard, FileText, Settings, LayoutTemplate, Download, User } from "lucide-react";

export interface NavigationItem {
  href: string;
  title: string;
  icon: ReactNode;
}

export const navigation: NavigationItem[] = [
  {
    href: "/app",
    title: "Overview",
    icon: <LayoutDashboard className="h-5 w-5" />,
  },
  {
    href: "/app/resumes",
    title: "My Resumes",
    icon: <FileText className="h-5 w-5" />,
  },
  {
    href: "/app/templates",
    title: "Templates",
    icon: <LayoutTemplate className="h-5 w-5" />,
  },
  {
    href: "/app/downloads",
    title: "Downloads",
    icon: <Download className="h-5 w-5" />,
  },
  {
    href: "/app/profile",
    title: "Profile",
    icon: <User className="h-5 w-5" />,
  },
  {
    href: "/app/settings",
    title: "Settings",
    icon: <Settings className="h-5 w-5" />,
  },
];
