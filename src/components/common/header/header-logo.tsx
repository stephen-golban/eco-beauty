"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HeaderLogoProps {
  href: string;
}

export function HeaderLogo({ href }: HeaderLogoProps) {
  return (
    <div className="mr-8">
      <Link href={href} className="flex cursor-pointer items-center space-x-2">
        <Image src="/logo.svg" alt="Eco Beauty Logo" width={20} height={20} className={cn("dark:invert")} />
        <span className="text-xl font-bold tracking-tight">Eco Beauty</span>
      </Link>
    </div>
  );
}
