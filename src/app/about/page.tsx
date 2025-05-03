"use client";

import Link from "next/link";

import { ArrowRight, Award, Heart, Lightbulb, Target, Users } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-16 px-4 py-8">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Empowering Your Career Journey</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          We&apos;re on a mission to help job seekers create professional resumes that stand out and make a lasting
          impression.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="relative overflow-hidden">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 bg-gradient-to-r"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0"></div>
        <CardContent className="relative space-y-4 p-8 text-center">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            At Vezumo, we believe everyone deserves the opportunity to present their best professional self. Our
            platform combines modern design, AI-powered assistance, and user-friendly tools to make resume creation
            accessible and effective.
          </p>
        </CardContent>
      </Card>

      {/* Values Section */}
      <div className="space-y-8">
        <h2 className="text-center text-2xl font-semibold">Our Values</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <CardTitle>User-Focused</CardTitle>
              <CardDescription>Every feature we build starts with our users&apos; needs and feedback.</CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Lightbulb className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Innovation</CardTitle>
              <CardDescription>
                We continuously evolve our platform with the latest technology and design trends.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Award className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Excellence</CardTitle>
              <CardDescription>
                We strive for the highest quality in every template and feature we deliver.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Features Overview */}
      <div className="space-y-8">
        <h2 className="text-center text-2xl font-semibold">Why Choose Vezumo</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Target className="text-primary h-6 w-6" />
              </div>
              <CardTitle>ATS-Optimized Templates</CardTitle>
              <CardDescription>
                Our templates are designed to pass through Applicant Tracking Systems while maintaining a beautiful,
                professional appearance.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Users className="text-primary h-6 w-6" />
              </div>
              <CardTitle>AI-Powered Assistance</CardTitle>
              <CardDescription>
                Get intelligent suggestions for content and formatting to create a more impactful resume.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* CTA Section */}
      <Card className="relative overflow-hidden">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 bg-gradient-to-r"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0"></div>
        <CardContent className="relative space-y-6 p-8 text-center">
          <h2 className="text-2xl font-semibold">Ready to Build Your Resume?</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Join thousands of job seekers who have successfully created standout resumes with Vezumo.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/auth/sign-up" className="gap-2">
              Get Started <ArrowRight className="h-4 w-4" />
            </Link>
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
