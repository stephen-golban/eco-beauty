"use client";

import { Shield, Eye } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-8">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Privacy Policy</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          We&apos;re committed to protecting your privacy and ensuring the security of your personal information.
        </p>
      </div>

      {/* Key Privacy Points */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
              <Shield className="text-primary h-6 w-6" />
            </div>
            <CardTitle>Data Protection</CardTitle>
            <CardDescription>
              Your data is encrypted and stored securely using industry-standard protocols. We regularly update our
              security measures to protect against unauthorized access.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
              <Eye className="text-primary h-6 w-6" />
            </div>
            <CardTitle>Data Transparency</CardTitle>
            <CardDescription>
              We&apos;re transparent about what data we collect and how we use it. You have full control over your
              personal information.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Detailed Privacy Sections */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Information We Collect</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-medium">Account Information</h3>
            <p className="text-muted-foreground">
              When you create an account, we collect basic information such as your name and email address to provide
              you with our services and communicate with you about your account.
            </p>

            <h3 className="font-medium">Resume Data</h3>
            <p className="text-muted-foreground">
              The information you include in your resumes is stored securely and is only used to provide you with our
              resume creation and management services.
            </p>

            <h3 className="font-medium">Usage Information</h3>
            <p className="text-muted-foreground">
              We collect anonymous usage data to improve our services and user experience. This includes information
              about how you interact with our platform.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>How We Use Your Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="text-muted-foreground list-inside list-disc space-y-2">
              <li>To provide and maintain our resume building services</li>
              <li>To improve and personalize your experience on our platform</li>
              <li>To communicate with you about your account and our services</li>
              <li>To detect and prevent fraud or abuse of our services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Your Privacy Rights</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">You have the right to:</p>
            <ul className="text-muted-foreground list-inside list-disc space-y-2">
              <li>Access your personal information</li>
              <li>Correct inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Export your data in a portable format</li>
              <li>Opt-out of marketing communications</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Data Retention</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              We retain your personal information for as long as necessary to provide you with our services and comply
              with legal obligations. If you delete your account, we will remove your personal information from our
              systems within 30 days.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Add styles for the grid pattern */}
      <style jsx>{`
        .bg-grid-pattern {
          mask-image: linear-gradient(to bottom, transparent, black, transparent);
          background-image:
            linear-gradient(to right, rgb(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(var(--primary) / 0.1) 1px, transparent 1px);
          background-size: 24px 24px;
        }
      `}</style>
    </div>
  );
}
