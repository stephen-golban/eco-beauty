"use client";

import { useCardStore } from "@/lib/card-store";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";

export default function CheckoutPage() {
  const items = useCardStore((s) => s.items);
  const total = items.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
  const router = useRouter();

  if (items.length === 0) {
    return (
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="w-full max-w-md">
          <Alert className="mb-6 bg-transparent">
            <AlertTitle>Your cart is empty</AlertTitle>
            <AlertDescription>Add some products to your cart to start the checkout process.</AlertDescription>
          </Alert>
          <Button onClick={() => router.push("/products")} size="lg" className="w-full">
            Continue Shopping
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-2 py-8">
      <div className="w-full max-w-2xl rounded-2xl p-0 md:p-0">
        <div className="mb-0 rounded-t-2xl px-6 pt-8 pb-6">
          <h1 className="text-2xl font-bold md:text-3xl">Checkout</h1>
          <p className="text-muted-foreground text-base">Review your cart and place your order</p>
        </div>
        <div className="px-0 md:px-0">
          <div className="overflow-x-auto px-6 pt-4">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-20">Product</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead className="text-center">Quantity</TableHead>
                  <TableHead className="text-right">Subtotal</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {items.map(({ product, quantity }) => (
                  <TableRow key={product.id} className="hover:bg-accent/30 transition-colors">
                    <TableCell>
                      <Avatar className="size-12 rounded-lg">
                        <AvatarImage src={product.images[0]} alt={product.name} />
                        <AvatarFallback>{product.name[0]}</AvatarFallback>
                      </Avatar>
                    </TableCell>
                    <TableCell className="align-middle font-medium">{product.name}</TableCell>
                    <TableCell className="text-center align-middle">
                      <Badge variant="secondary" className="rounded-md px-3 py-1 text-base">
                        {quantity}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right align-middle font-semibold">
                      MDL {Number(product.price) * quantity}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <Separator className="my-8" />
          <div className="mb-2 flex items-center justify-between rounded-lg px-6 py-4">
            <span className="text-xl font-bold">Total</span>
            <span className="text-2xl font-extrabold">MDL {total}</span>
          </div>
        </div>
        <div className="px-6 pt-0 pb-6">
          <Button className="h-12 w-full text-lg font-semibold" size="lg" disabled>
            Place Order (Coming Soon)
          </Button>
        </div>
      </div>
    </div>
  );
}
