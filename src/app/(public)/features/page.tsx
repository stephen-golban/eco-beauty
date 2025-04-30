"use client";

import Link from "next/link";

import {
  Zap,
  Layout,
  FileText,
  Download,
  PenTool,
  Search,
  Clock,
  Languages,
  Palette,
  Shield,
  History,
  Share,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    title: "AI-Powered Content Suggestions",
    description: "Get intelligent suggestions for bullet points and descriptions tailored to your industry and role.",
    icon: Zap,
  },
  {
    title: "ATS-Optimized Templates",
    description: "Our templates are designed to pass Applicant Tracking Systems while maintaining visual appeal.",
    icon: Layout,
  },
  {
    title: "Real-Time Preview",
    description: "See changes instantly as you type, ensuring your resume looks perfect before downloading.",
    icon: FileText,
  },
  {
    title: "Multiple Export Formats",
    description: "Download your resume in PDF, Word, or plain text formats while maintaining consistent formatting.",
    icon: Download,
  },
  {
    title: "Easy Customization",
    description: "Customize fonts, colors, spacing, and sections with our intuitive editor.",
    icon: PenTool,
  },
  {
    title: "Keyword Optimization",
    description: "Analyze job descriptions and optimize your resume with relevant keywords.",
    icon: Search,
  },
  {
    title: "Quick Resume Builder",
    description: "Create a professional resume in minutes with our step-by-step builder.",
    icon: Clock,
  },
  {
    title: "Multi-Language Support",
    description: "Create resumes in multiple languages with proper formatting and structure.",
    icon: Languages,
  },
  {
    title: "Design Themes",
    description: "Choose from various professional color schemes and design themes.",
    icon: Palette,
  },
  {
    title: "Privacy First",
    description: "Your data is encrypted and secure. We never share your information.",
    icon: Shield,
  },
  {
    title: "Version History",
    description: "Keep track of changes and revert to previous versions of your resume.",
    icon: History,
  },
  {
    title: "Easy Sharing",
    description: "Share your resume with recruiters via secure, trackable links.",
    icon: Share,
  },
];

export default function FeaturesPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 py-8">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Everything You Need to Build a Winning Resume</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          Powerful features designed to help you create professional resumes that stand out and get you hired.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, i) => (
          <Card key={i} className="bg-background">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="bg-primary/10 w-fit rounded-lg p-2">
                  <feature.icon className="text-primary h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-base">{feature.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* CTA Section */}
      <div className="relative overflow-hidden rounded-3xl">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 rounded-3xl bg-gradient-to-r"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0 rounded-3xl"></div>
        <div className="relative flex flex-col items-center gap-8 px-4 py-16 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Ready to Build Your Resume?</h2>
            <p className="text-muted-foreground max-w-2xl text-xl">
              Join thousands of job seekers who have successfully created their resumes with Vezumo.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <Link href="/templates">Create Resume</Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
        </div>
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
