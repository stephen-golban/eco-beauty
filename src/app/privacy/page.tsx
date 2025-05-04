"use client";

import { Shield, Eye } from "lucide-react";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-6xl space-y-12 px-4 py-8">
      {/* Hero Section */}
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Politica de Confidențialitate EcoBeauty</h1>
        <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
          La EcoBeauty, confidențialitatea și siguranța datelor tale sunt prioritare. Ne asigurăm că informațiile tale
          personale și preferințele privind produsele eco-friendly sunt protejate și folosite responsabil.
        </p>
      </div>

      {/* Key Privacy Points */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
              <Shield className="text-primary h-6 w-6" />
            </div>
            <CardTitle>Protecția Datelor</CardTitle>
            <CardDescription>
              Datele tale sunt criptate și stocate în siguranță, folosind cele mai bune practici din industrie.
              Actualizăm constant măsurile de securitate pentru a preveni accesul neautorizat la preferințele și
              istoricul tău de produse eco.
            </CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader>
            <div className="bg-primary/10 mb-2 w-fit rounded-lg p-3">
              <Eye className="text-primary h-6 w-6" />
            </div>
            <CardTitle>Transparență totală</CardTitle>
            <CardDescription>
              Suntem transparenți cu privire la datele pe care le colectăm, inclusiv preferințele tale pentru produse
              naturale și sustenabile. Ai control deplin asupra informațiilor tale și poți vedea oricând ce date deții
              la noi.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Detailed Privacy Sections */}
      <div className="space-y-8">
        <Card>
          <CardHeader>
            <CardTitle>Ce informații colectăm</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <h3 className="font-medium">Date de cont</h3>
            <p className="text-muted-foreground">
              La crearea unui cont EcoBeauty, colectăm numele, adresa de email și preferințele tale pentru produse de
              frumusețe eco, pentru a-ți oferi recomandări personalizate și o experiență sigură.
            </p>

            <h3 className="font-medium">Preferințe de produse</h3>
            <p className="text-muted-foreground">
              Informațiile despre produsele eco-friendly pe care le vizualizezi sau le adaugi la favorite sunt folosite
              doar pentru a-ți oferi sugestii relevante și pentru a îmbunătăți platforma.
            </p>

            <h3 className="font-medium">Date de utilizare</h3>
            <p className="text-muted-foreground">
              Colectăm date anonime despre modul în care folosești EcoBeauty pentru a optimiza serviciile și a promova
              produse sustenabile potrivite pentru tine.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Cum folosim informațiile tale</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="text-muted-foreground list-inside list-disc space-y-2">
              <li>Pentru a-ți oferi recomandări personalizate de produse eco și naturale</li>
              <li>Pentru a îmbunătăți experiența ta pe platformă și a promova sustenabilitatea</li>
              <li>Pentru a comunica cu tine despre contul tău și noutăți EcoBeauty</li>
              <li>Pentru a preveni fraudele și a proteja comunitatea EcoBeauty</li>
              <li>Pentru a respecta obligațiile legale și etice privind protecția datelor</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Drepturile tale privind confidențialitatea</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">Ai dreptul să:</p>
            <ul className="text-muted-foreground list-inside list-disc space-y-2">
              <li>Accesezi și gestionezi datele tale personale și preferințele de produse</li>
              <li>Corectezi informațiile inexacte sau incomplete</li>
              <li>Soliciți ștergerea datelor tale personale</li>
              <li>Expotezi datele tale într-un format portabil</li>
              <li>Renunți la comunicările de marketing EcoBeauty</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Păstrarea datelor</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground">
              Păstrăm datele tale personale și preferințele de produse eco atât timp cât ai cont pe EcoBeauty sau cât
              este necesar pentru a respecta legea. Dacă îți ștergi contul, datele tale vor fi eliminate din sistemele
              noastre în 30 de zile.
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
