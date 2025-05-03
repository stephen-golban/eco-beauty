import { Inter } from "next/font/google";

import { ThemeProvider } from "next-themes";
import { ClerkProvider } from "@clerk/nextjs";

import { Toaster } from "@/components/ui/sonner";

import type { Metadata } from "next";

import "./globals.css";
import { Footer, Header } from "@/components/common";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Eco Beauty",
    absolute: "Eco Beauty | Sustainable Beauty Products",
    default: "Eco Beauty | Sustainable Beauty Products",
  },
  description:
    "Eco Beauty offers a wide range of sustainable and eco-friendly beauty products for conscious consumers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/auth/sign-in">
      <html lang="en" suppressHydrationWarning>
        <meta name="apple-mobile-web-app-title" content="Eco Beauty" />
        <body className={`${inter.variable} antialiased`}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
            <main className="flex min-h-screen flex-col">
              <div className="flex w-full flex-1 flex-col items-center">
                <Header />
                <div className="flex w-full flex-1 flex-col gap-16 py-20">{children}</div>
                <Footer />
              </div>
            </main>
            <Toaster position="bottom-center" duration={4000} />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
