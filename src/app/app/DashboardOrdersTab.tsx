import React from "react";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarDays, ShoppingBag } from "lucide-react";
import Link from "next/link";

export type DashboardOrder = {
  id: string;
  placedAt: string | Date;
  status: string;
  total: number | string;
  items: {
    id: string;
    quantity: number;
    product?: { name?: string } | null;
  }[];
};

interface DashboardOrdersTabProps {
  orders: DashboardOrder[];
}

function formatDate(date: string | Date) {
  return new Date(date).toLocaleDateString("ro-RO", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
}

function formatPriceMDL(price: number | string) {
  return `${Number(price).toFixed(2)} MDL`;
}

function statusColor(status: string) {
  switch (status.toLowerCase()) {
    case "completed":
      return "bg-green-100 text-green-700";
    case "pending":
      return "bg-yellow-100 text-yellow-800";
    default:
      return "bg-gray-100 text-gray-600";
  }
}

export function DashboardOrdersTab({ orders }: DashboardOrdersTabProps) {
  if (orders.length === 0) {
    return (
      <Card className="mx-auto mt-8 max-w-2xl">
        <CardHeader className="flex flex-col items-center">
          <ShoppingBag className="mb-2 h-10 w-10 text-gray-300" />
          <CardTitle>Nu există comenzi</CardTitle>
          <CardDescription className="text-center">
            Încă nu ați plasat nicio comandă. Începeți cumpărăturile pentru a vedea comenzile aici!
          </CardDescription>
        </CardHeader>
      </Card>
    );
  }

  const totalSpent = orders.reduce((sum, o) => sum + Number(o.total), 0);

  return (
    <Card className="mt-4">
      <CardHeader>
        <CardTitle>Comenzile mele</CardTitle>
        <CardDescription>
          <span className="font-semibold">{orders.length}</span> comandă{orders.length !== 1 ? "ri" : ""} &middot; Total
          cheltuit: <span className="font-semibold">{formatPriceMDL(totalSpent)}</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="overflow-x-auto p-0">
        <Table>
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="min-w-[120px]">Data</TableHead>
              <TableHead className="min-w-[120px]">Stare</TableHead>
              <TableHead className="min-w-[100px]">Total</TableHead>
              <TableHead className="min-w-[200px]">Produse</TableHead>
              <TableHead className="min-w-[120px] text-right">Acțiuni</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order) => (
              <TableRow key={order.id} className="border-b transition-colors last:border-b-0 hover:bg-pink-50/60">
                <TableCell className="align-middle">
                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    <span>{formatDate(order.placedAt)}</span>
                  </div>
                </TableCell>
                <TableCell className="align-middle">
                  <span className={`inline-block rounded px-2 py-1 text-xs font-medium ${statusColor(order.status)}`}>
                    {order.status}
                  </span>
                </TableCell>
                <TableCell className="align-middle font-semibold text-pink-500">
                  {formatPriceMDL(order.total)}
                </TableCell>
                <TableCell className="align-middle">
                  <ul className="space-y-1">
                    {order.items.map((item) => (
                      <li key={item.id} className="flex items-center gap-2">
                        <span className="font-medium">{item.product?.name || "Necunoscut"}</span>
                        <span className="text-xs text-gray-400">x{item.quantity}</span>
                      </li>
                    ))}
                  </ul>
                </TableCell>
                <TableCell className="text-right align-middle">
                  <Link href={`/app/orders/${order.id}`}>
                    <Button size="sm" variant="outline" type="button">
                      Vezi detalii
                    </Button>
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
