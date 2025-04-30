"use client";

import Link from "next/link";

import { Layout, Settings, Upload, Check, Zap } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-16">
      {/* Hero Section */}
      <section className="flex flex-col items-center gap-8 text-center">
        <div className="flex max-w-3xl flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl">Create Your Professional Resume in Minutes</h1>
          <p className="text-muted-foreground text-xl">
            Build stunning resumes with our modern templates and easy-to-use builder. Stand out from the crowd and land
            your dream job.
          </p>
        </div>
        <div className="flex gap-4">
          <Link href="/templates">
            <Button size="lg">Create Resume</Button>
          </Link>
          <Link href="/templates">
            <Button variant="outline" size="lg">
              View Templates
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="flex flex-col gap-8">
        <h2 className="text-center text-3xl font-bold">Why Choose Vezumo?</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center gap-2 p-6 text-center">
            <div className="bg-primary/10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
              <Layout className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Modern Templates</h3>
            <p className="text-muted-foreground">
              Choose from our collection of professionally designed templates that stand out.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 text-center">
            <div className="bg-primary/10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
              <Settings className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Easy Customization</h3>
            <p className="text-muted-foreground">Customize every aspect of your resume with our intuitive editor.</p>
          </div>
          <div className="flex flex-col items-center gap-2 p-6 text-center">
            <div className="bg-primary/10 mb-2 flex h-12 w-12 items-center justify-center rounded-lg">
              <Upload className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-semibold">Export Instantly</h3>
            <p className="text-muted-foreground">Download your resume in multiple formats including PDF and Word.</p>
          </div>
        </div>
      </section>

      {/* First CTA Section */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 z-0 rounded-3xl bg-gradient-to-r"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0 z-0 rounded-3xl"></div>
        <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-20 text-center">
          <div
            className="bg-primary/5 absolute inset-0 rounded-3xl blur-3xl"
            style={{
              maskImage: "radial-gradient(circle at center, black, transparent)",
            }}
          ></div>
          <div className="relative flex flex-col items-center gap-6">
            <span className="text-primary bg-primary/10 rounded-full px-3 py-1 text-sm">
              Over 10,000 Resumes Created
            </span>
            <h2 className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent">
              Ready to Build Your Resume?
            </h2>
            <p className="text-muted-foreground max-w-2xl text-xl">
              Join thousands of job seekers who have successfully created their resumes with Vezumo.
            </p>
            <Link href="/auth/sign-up">
              <Button
                size="lg"
                className="from-primary to-primary/90 hover:from-primary/90 hover:to-primary mt-2 bg-gradient-to-r"
              >
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-center text-3xl font-bold">What Our Users Say</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6">
            <div className="flex gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-muted-foreground">
              &quot;Vezumo made creating my resume so simple. The templates are modern and professional, and the
              customization options are exactly what I needed.&quot;
            </blockquote>
            <footer className="mt-auto">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-muted-foreground text-sm">Software Engineer</div>
            </footer>
          </div>
          <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6">
            <div className="flex gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-muted-foreground">
              &quot;I landed my dream job thanks to the professional resume I created with Vezumo. The process was
              intuitive and the result was impressive.&quot;
            </blockquote>
            <footer className="mt-auto">
              <div className="font-semibold">Michael Chen</div>
              <div className="text-muted-foreground text-sm">Marketing Manager</div>
            </footer>
          </div>
          <div className="bg-card text-card-foreground flex flex-col gap-4 rounded-xl border p-6">
            <div className="flex gap-2 text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-muted-foreground">
              &quot;The export options and formatting consistency across different file types is fantastic. Vezumo saved
              me hours of work.&quot;
            </blockquote>
            <footer className="mt-auto">
              <div className="font-semibold">Emily Rodriguez</div>
              <div className="text-muted-foreground text-sm">Product Designer</div>
            </footer>
          </div>
        </div>
      </section>

      {/* Features Breakdown */}
      <section className="flex flex-col gap-12">
        <h2 className="text-center text-3xl font-bold">Powerful Features for Your Success</h2>
        <div className="flex flex-col gap-16">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="flex flex-col gap-4">
              <h3 className="text-2xl font-semibold">AI-Powered Content Suggestions</h3>
              <p className="text-muted-foreground">
                Our smart AI assistant helps you write compelling bullet points and descriptions. Get suggestions
                tailored to your industry and role.
              </p>
              <ul className="space-y-2">
                <li className="text-muted-foreground flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  Industry-specific phrases
                </li>
                <li className="text-muted-foreground flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  Action verb suggestions
                </li>
                <li className="text-muted-foreground flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  Achievement highlighting
                </li>
              </ul>
            </div>
            <div className="bg-primary/5 flex aspect-video items-center justify-center rounded-2xl p-8">
              [AI Feature Preview]
            </div>
          </div>

          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="bg-primary/5 order-2 flex aspect-video items-center justify-center rounded-2xl p-8 md:order-1">
              [Template Preview]
            </div>
            <div className="order-1 flex flex-col gap-4 md:order-2">
              <h3 className="text-2xl font-semibold">ATS-Optimized Templates</h3>
              <p className="text-muted-foreground">
                Our templates are designed to pass Applicant Tracking Systems while maintaining a beautiful,
                professional appearance.
              </p>
              <ul className="space-y-2">
                <li className="text-muted-foreground flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  ATS-friendly formatting
                </li>
                <li className="text-muted-foreground flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  Industry-tested designs
                </li>
                <li className="text-muted-foreground flex items-center gap-2">
                  <Check className="text-primary h-5 w-5" />
                  Multiple color schemes
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="flex flex-col gap-8">
        <h2 className="text-center text-3xl font-bold">Frequently Asked Questions</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Is Vezumo free to use?</h3>
            <p className="text-muted-foreground">
              Yes, Vezumo offers a free tier that includes basic templates and essential features. Premium features are
              available with our Pro subscription.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Can I export my resume to different formats?</h3>
            <p className="text-muted-foreground">
              Absolutely! You can export your resume to PDF, Word, and plain text formats. All formatting is preserved
              across different file types.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Are the templates ATS-friendly?</h3>
            <p className="text-muted-foreground">
              Yes, all our templates are tested with major ATS systems to ensure your resume gets past automated
              screening and into human hands.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <h3 className="text-xl font-semibold">Can I create multiple versions of my resume?</h3>
            <p className="text-muted-foreground">
              Yes, you can create and save multiple versions of your resume to tailor them for different job
              applications and industries.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden rounded-3xl">
        <div className="from-primary/20 via-primary/5 to-background absolute inset-0 z-0 rounded-3xl bg-gradient-to-br"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0 z-0 rounded-3xl"></div>
        <div className="relative z-10 flex flex-col items-center gap-8 px-4 py-24 text-center">
          <div
            className="bg-primary/5 absolute inset-0 rounded-3xl blur-3xl"
            style={{
              maskImage: "radial-gradient(circle at center, black, transparent)",
            }}
          ></div>

          <div className="relative flex flex-col items-center gap-8">
            <span className="text-primary bg-primary/10 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm">
              <Zap className="h-4 w-4" />
              Limited Time Offer
            </span>

            <div className="flex flex-col gap-4">
              <h2 className="from-foreground to-foreground/70 bg-gradient-to-b bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
                Start Building Your Future Today
              </h2>
              <p className="text-muted-foreground max-w-2xl text-xl">
                Create a professional resume that gets you noticed. Join thousands of successful job seekers.
              </p>
            </div>

            <div className="flex w-full max-w-md flex-col gap-4 sm:flex-row">
              <Link href="/templates" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="from-primary to-primary/90 hover:from-primary/90 hover:to-primary w-full bg-gradient-to-r"
                >
                  Create Your Resume
                </Button>
              </Link>
              <Link href="/pricing" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5 w-full">
                  View Pricing
                </Button>
              </Link>
            </div>

            <div className="text-muted-foreground flex flex-wrap items-center justify-center gap-8 pt-8">
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" />
                <span>Free Templates</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" />
                <span>No Credit Card</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="text-primary h-5 w-5" />
                <span>Cancel Anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

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
