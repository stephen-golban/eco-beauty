import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import prisma from "@/lib/prisma";
import Image from "next/image";

interface OrderDetailsPageProps {
  params: Promise<{ orderId: string }>;
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

export default async function OrderDetailsPage({ params }: OrderDetailsPageProps) {
  const { orderId } = await params;
  const order = await prisma.order.findUnique({
    where: { id: orderId },
    include: {
      items: {
        include: {
          product: true,
        },
      },
      user: true,
    },
  });

  if (!order) {
    return (
      <div className="mx-auto mt-16 max-w-xl text-center">
        <div className="mb-8">
          <Link href="/app">
            <Button variant="outline">Înapoi la panou</Button>
          </Link>
        </div>
        <h1 className="mb-2 text-2xl font-bold">Comandă inexistentă</h1>
        <p className="mb-4 text-gray-500">
          Ne pare rău, nu am găsit o comandă cu ID-ul <span className="font-mono">{orderId}</span>.
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <Link href="/app">
          <Button variant="outline">Înapoi la panou</Button>
        </Link>
      </div>
      <h1 className="mb-2 text-3xl font-bold">Detalii comandă</h1>
      <div className="mb-8 text-gray-500">
        ID comandă: <span className="font-mono">{order.id}</span>
      </div>
      <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-gray-600">
            <CalendarDays className="h-4 w-4" />
            <span>{formatDate(order.placedAt)}</span>
          </div>
          <div>
            <span className="text-gray-500">Stare:</span>{" "}
            <span className="font-semibold text-green-600">{order.status}</span>
          </div>
          <div>
            <span className="text-gray-500">Total:</span>{" "}
            <span className="font-semibold text-pink-500">{formatPriceMDL(String(order.total))}</span>
          </div>
          <div>
            <span className="text-gray-500">Plasată de:</span>{" "}
            <span className="font-medium">{order.user?.name || "Necunoscut"}</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-gray-500">Plasată la</div>
          <div className="font-mono text-lg">{order.placedAt.toLocaleString("ro-RO")}</div>
          <div className="mt-4 text-gray-500">Ultima actualizare</div>
          <div className="font-mono text-lg">{order.updatedAt.toLocaleString("ro-RO")}</div>
        </div>
      </div>
      <hr className="my-8 border-gray-200" />
      <h2 className="mb-4 text-2xl font-semibold">Produse</h2>
      <ul className="divide-y divide-gray-100">
        {order.items.map((item) => (
          <li key={item.id} className="flex flex-col items-center justify-between gap-6 py-6 sm:flex-row">
            <div className="flex w-full min-w-0 items-center gap-4 sm:w-auto">
              {item.product?.images?.[0] ? (
                <Image
                  src={item.product.images[0]}
                  alt={item.product.name}
                  width={64}
                  height={64}
                  className="h-16 w-16 rounded border bg-white object-cover"
                />
              ) : (
                <div className="flex h-16 w-16 items-center justify-center rounded border bg-gray-100 text-gray-300">
                  <span className="text-xs">Fără imagine</span>
                </div>
              )}
              <div className="truncate">
                <div className="truncate text-lg font-medium">{item.product?.name || "Necunoscut"}</div>
                <div className="text-xs text-gray-400">x{item.quantity}</div>
              </div>
            </div>
            <span className="text-lg font-medium">{formatPriceMDL(String(item.price))}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
