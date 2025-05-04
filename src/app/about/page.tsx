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
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Inspirăm frumusețea sustenabilă</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          Suntem dedicați să ajutăm oamenii să descopere produse de frumusețe eco-friendly care respectă natura și
          sănătatea.
        </p>
      </div>

      {/* Mission Section */}
      <Card className="relative overflow-hidden">
        <div className="from-primary/10 via-primary/5 to-background absolute inset-0 bg-gradient-to-r"></div>
        <div className="bg-grid-white/[0.02] bg-grid-pattern absolute inset-0"></div>
        <CardContent className="relative space-y-4 p-8 text-center">
          <h2 className="text-2xl font-semibold">Misiunea Noastră</h2>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
            La EcoBeauty, credem că frumusețea adevărată vine din respectul față de natură. Platforma noastră promovează
            produse cosmetice sustenabile, naturale și prietenoase cu mediul, oferind consumatorilor opțiuni sigure și
            responsabile.
          </p>
        </CardContent>
      </Card>

      {/* Values Section */}
      <div className="space-y-8">
        <h2 className="text-center text-2xl font-semibold">Valorile Noastre</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Heart className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Respect pentru utilizatori</CardTitle>
              <CardDescription>
                Fiecare funcționalitate este creată pornind de la nevoile și feedback-ul comunității noastre.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Lightbulb className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Inovație verde</CardTitle>
              <CardDescription>
                Promovăm soluții inovatoare pentru a face frumusețea mai sustenabilă și accesibilă tuturor.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Award className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Calitate și transparență</CardTitle>
              <CardDescription>
                Selectăm cu grijă fiecare produs pentru a garanta calitate, siguranță și transparență în compoziție.
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>

      {/* Features Overview */}
      <div className="space-y-8">
        <h2 className="text-center text-2xl font-semibold">De ce să alegi EcoBeauty</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Target className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Selecție atentă de produse</CardTitle>
              <CardDescription>
                Toate produsele sunt atent verificate pentru a respecta standardele de sustenabilitate și ingrediente
                naturale.
              </CardDescription>
            </CardHeader>
          </Card>
          <Card>
            <CardHeader>
              <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
                <Users className="text-primary h-6 w-6" />
              </div>
              <CardTitle>Comunitate dedicată</CardTitle>
              <CardDescription>
                Alătură-te unei comunități pasionate de frumusețe responsabilă și schimbă modul în care consumăm produse
                cosmetice.
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
          <h2 className="text-2xl font-semibold">Ești gata să descoperi frumusețea eco?</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
            Alătură-te miilor de utilizatori care au ales EcoBeauty pentru un stil de viață mai sănătos și mai
            responsabil.
          </p>
          <Button asChild size="lg" className="mt-4">
            <Link href="/auth/sign-up" className="gap-2">
              Începe acum <ArrowRight className="h-4 w-4" />
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
