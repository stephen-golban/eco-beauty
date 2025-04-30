import { Inter } from "next/font/google";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";

import type { Metadata } from "next";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | AI-Powered Resume Builder",
    absolute: "Vezumo | AI-Powered Resume Builder",
    default: "Vezumo | AI-Powered Resume Builder",
  },
  description: "Vezumo is an AI-powered resume builder that helps you create a professional resume in minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/auth/sign-in">
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main className="flex min-h-screen flex-col">{children}</main>
            <Toaster position="bottom-center" duration={4000} />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
