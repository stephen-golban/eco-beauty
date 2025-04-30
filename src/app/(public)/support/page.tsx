"use client";

import Link from "next/link";

import { Mail } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SupportPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-8">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">How can we help you?</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          Find answers to common questions or get in touch with our support team.
        </p>
      </div>

      {/* Email Support Card */}
      <Card className="w-full">
        <CardHeader className="text-center">
          <CardTitle>Email Support</CardTitle>
          <CardDescription>Get help via email within 24 hours</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center">
          <div className="bg-primary/10 mb-4 rounded-lg p-3">
            <Mail className="text-primary h-6 w-6" />
          </div>
          <Button asChild className="w-full max-w-sm">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </CardContent>
      </Card>

      {/* FAQ Sections */}
      <div className="space-y-8">
        <h2 className="mb-8 text-center text-2xl font-semibold">Frequently Asked Questions</h2>

        {/* Getting Started Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Getting Started</h3>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How do I create my first resume?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Choose a template from our collection, fill in your information, and our AI-powered system will help you
                create a professional resume in minutes. You can easily customize the layout, fonts, and colors to match
                your style.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What makes a good resume?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                A good resume is clear, concise, and tailored to the job you&apos;re applying for. Focus on relevant
                experience, use action verbs, and quantify your achievements where possible. Our templates are designed
                to help you present your best self.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I import my existing resume?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Yes! You can import your existing resume in PDF or Word format. Our system will automatically extract
                the information and format it into your chosen template.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Templates & Customization Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Templates & Customization</h3>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How do I change my resume template?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                You can switch between templates at any time without losing your content. Simply click the &quot;Change
                Template&quot; button in the editor and preview how your resume looks with different designs.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Can I customize fonts and colors?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Yes! Each template offers customization options for fonts, colors, spacing, and section layouts. Pro
                users have access to additional customization features.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Are the templates ATS-friendly?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                All our templates are designed to be ATS (Applicant Tracking System) friendly. They use standard fonts,
                clear section headings, and proper formatting to ensure your resume gets through automated screening
                systems.
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Account & Billing Section */}
        <div className="space-y-4">
          <h3 className="text-xl font-medium">Account & Billing</h3>
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>How do I upgrade my account?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                Visit our pricing page to view available plans and upgrade your account. Pro accounts get access to
                premium templates, advanced customization options, and priority support.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>What happens after my trial ends?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                After your trial period, you can continue using basic features with a free account or upgrade to a Pro
                account to maintain access to premium features. Your resumes will remain accessible.
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>How do I cancel my subscription?</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">
                You can cancel your subscription at any time from your account settings. Your Pro features will remain
                active until the end of your current billing period.
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Need More Help Section */}
      <Card className="relative overflow-hidden">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 bg-gradient-to-r"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0"></div>
        <CardContent className="relative space-y-4 p-6 text-center">
          <h3 className="text-xl font-semibold">Still need help?</h3>
          <p className="text-muted-foreground">
            Our support team is available 24/7 to assist you with any questions or concerns.
          </p>
          <Button asChild variant="outline">
            <Link href="/contact">Contact Support</Link>
          </Button>
        </CardContent>
      </Card>

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
