"use client";

import { Mail, MessageSquare, Clock } from "lucide-react";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-8">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          Have a question or feedback? We&apos;d love to hear from you.
        </p>
      </div>

      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-2">
        {/* Contact Form */}
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we&apos;ll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="What is this regarding?" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" className="h-32" required />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Contact Information */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Other Ways to Reach Us</CardTitle>
              <CardDescription>Choose the method that works best for you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Mail className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Email Support</h3>
                  <p className="text-muted-foreground text-sm">Get a response within 24 hours</p>
                  <p className="mt-1 text-sm">support@vezumo.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <MessageSquare className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Live Chat</h3>
                  <p className="text-muted-foreground text-sm">Available for Pro users</p>
                  <p className="mt-1 text-sm">Chat with our support team in real-time</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 rounded-lg p-2">
                  <Clock className="text-primary h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-medium">Response Time</h3>
                  <p className="text-muted-foreground text-sm">We aim to respond to all inquiries within:</p>
                  <ul className="mt-1 space-y-1 text-sm">
                    <li>• Email: 24 hours</li>
                    <li>• Live Chat: Instant (Pro users)</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="relative overflow-hidden rounded-lg">
                  <div className="from-primary/10 via-primary/5 to-background absolute inset-0 bg-gradient-to-r"></div>
                  <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0"></div>
                  <div className="relative p-6">
                    <h3 className="mb-2 font-semibold">Need immediate help?</h3>
                    <p className="text-muted-foreground text-sm">
                      Check our support page for quick answers to common questions.
                    </p>
                    <Button variant="outline" className="mt-4" asChild>
                      <a href="/support">Visit Support Page</a>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
