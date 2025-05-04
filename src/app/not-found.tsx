import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center space-y-4">
      <h1 className="text-4xl font-bold">404 - Pagina nu a fost găsită</h1>
      <p className="text-muted-foreground">Pagina pe care o cauți nu există sau a fost mutată.</p>
      <Link href="/">
        <Button variant="outline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Înapoi la pagina principală
        </Button>
      </Link>
    </div>
  );
}
