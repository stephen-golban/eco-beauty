"use client";

import Link from "next/link";

import { Check } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const tiers = [
  {
    name: "Free",
    description: "Everything you need to create a basic resume",
    price: "0",
    features: [
      "Access to basic templates",
      "Export to PDF",
      "Real-time preview",
      "Basic customization options",
      "Save up to 1 resume",
    ],
    cta: "Get Started",
    href: "/auth/sign-up",
  },
  {
    name: "Pro",
    description: "Perfect for job seekers who want to stand out",
    price: "12",
    popular: true,
    features: [
      "All Free features",
      "Access to all premium templates",
      "AI-powered content suggestions",
      "Multiple export formats",
      "Unlimited resumes",
      "Version history",
      "Remove branding",
      "Priority support",
    ],
    cta: "Get Pro",
    href: "/auth/sign-up?plan=pro",
  },
  {
    name: "Enterprise",
    description: "For teams and organizations",
    price: "Custom",
    features: [
      "All Pro features",
      "Custom templates",
      "Team collaboration",
      "Analytics & tracking",
      "API access",
      "Dedicated support",
      "Custom branding",
      "SSO & advanced security",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 py-8">
      {/* Header */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Simple, Transparent Pricing</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          Choose the perfect plan for your needs. All plans include a 14-day free trial.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {tiers.map((tier) => (
          <Card key={tier.name} className={tier.popular ? "border-primary shadow-primary/10 relative shadow-lg" : ""}>
            {tier.popular && (
              <div className="absolute -top-4 right-0 left-0 flex justify-center">
                <div className="bg-primary text-primary-foreground rounded-full px-3 py-1 text-sm font-medium">
                  Most Popular
                </div>
              </div>
            )}
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">{tier.name}</CardTitle>
              <CardDescription className="text-base">{tier.description}</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <div className="flex items-baseline justify-center gap-x-2">
                {tier.price === "Custom" ? (
                  <span className="text-4xl font-bold">Custom</span>
                ) : (
                  <>
                    <span className="text-4xl font-bold">${tier.price}</span>
                    <span className="text-muted-foreground">/month</span>
                  </>
                )}
              </div>
              <div className="mt-8 space-y-4">
                {tier.features.map((feature) => (
                  <div key={feature} className="text-muted-foreground flex items-center gap-2">
                    <Check className="text-primary h-5 w-5 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Button size="lg" variant={tier.popular ? "default" : "outline"} className="w-full" asChild>
                <Link href={tier.href}>{tier.cta}</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="mt-20 space-y-8">
        <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Can I cancel my subscription anytime?</h3>
            <p className="text-muted-foreground">
              Yes, you can cancel your subscription at any time. You&apos;ll continue to have access to your plan until
              the end of your billing period.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">What payment methods do you accept?</h3>
            <p className="text-muted-foreground">
              We accept all major credit cards, PayPal, and offer additional payment options for Enterprise customers.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Do you offer refunds?</h3>
            <p className="text-muted-foreground">
              Yes, we offer a 30-day money-back guarantee if you&apos;re not satisfied with your Pro subscription.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">Can I switch plans later?</h3>
            <p className="text-muted-foreground">
              Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing
              cycle.
            </p>
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative mt-20 overflow-hidden rounded-3xl">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 rounded-3xl bg-gradient-to-r"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0 rounded-3xl"></div>
        <div className="relative flex flex-col items-center gap-8 px-4 py-16 text-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold">Still have questions?</h2>
            <p className="text-muted-foreground max-w-2xl text-xl">
              Our team is here to help. Contact us and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">Contact Support</Link>
          </Button>
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
