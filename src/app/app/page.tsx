"use client";
import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const mockOrders = [
  {
    id: 1,
    product: "Hydrating Face Serum",
    image: "/images/products/serum.jpg",
    price: 39.99,
    date: "2024-05-01",
  },
  {
    id: 2,
    product: "Rose Water Toner",
    image: "/images/products/toner.jpg",
    price: 24.99,
    date: "2024-04-28",
  },
  {
    id: 3,
    product: "SPF 50+ Sunscreen",
    image: "/images/products/sunscreen.jpg",
    price: 29.99,
    date: "2024-04-20",
  },
  {
    id: 4,
    product: "Vitamin C Cream",
    image: "/images/products/cream.jpg",
    price: 34.99,
    date: "2024-04-15",
  },
];

const statCards = [
  {
    label: "Loyalty Points",
    value: "1,250",
    sub: "+150 this month",
    icon: "💎",
  },
  {
    label: "Orders",
    value: "23",
    sub: "+2 this month",
    icon: "🛍️",
  },
  {
    label: "Wishlist",
    value: "8",
    sub: "+1 this month",
    icon: "💖",
  },
];

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const orderData = [3, 4, 4, 5, 3, 3, 2, 2, 5, 4, 1, 4];

export default function BeautyDashboard() {
  return (
    <main className="min-h-screen px-4">
      {/* Header */}
      <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, Jane!</h1>
          <p className="mt-1 text-gray-500">Here&apos;s your beauty dashboard overview.</p>
        </div>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="overview" className="mx-auto mb-6 max-w-7xl">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="orders">Orders</TabsTrigger>
          <TabsTrigger value="wishlist">Wishlist</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          {/* Stat Cards */}
          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {statCards.map((card) => (
              <Card key={card.label} className="flex flex-col gap-2 p-6">
                <CardHeader className="flex flex-col gap-2 p-0">
                  <span className="text-2xl">{card.icon}</span>
                  <CardTitle className="text-2xl font-bold">{card.value}</CardTitle>
                  <CardDescription className="text-sm text-gray-500">{card.label}</CardDescription>
                  <Badge variant="secondary" className="w-fit text-xs text-green-600">
                    {card.sub}
                  </Badge>
                </CardHeader>
              </Card>
            ))}
          </div>
          {/* Main Content */}
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {/* Chart */}
            <Card className="col-span-2">
              <CardHeader className="mb-4">
                <CardTitle>Order Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex h-48 items-end gap-2">
                  {orderData.map((val, idx) => (
                    <div key={months[idx]} className="flex w-6 flex-col items-center">
                      <div
                        className="w-full rounded-t bg-pink-400"
                        style={{ height: `${val * 30}px` }}
                        title={`Orders: ${val}`}
                      ></div>
                      <span className="mt-1 text-xs text-gray-400">{months[idx]}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* Recent Orders */}
            <Card>
              <CardHeader className="mb-4">
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="divide-y">
                  {mockOrders.map((order) => (
                    <li key={order.id} className="flex items-center gap-3 py-3">
                      <Avatar>
                        <AvatarImage
                          src={order.image}
                          alt={order.product}
                          onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) =>
                            (e.currentTarget.src = "/images/products/placeholder.jpg")
                          }
                        />
                        <AvatarFallback>{order.product[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="font-medium">{order.product}</div>
                        <div className="text-xs text-gray-400">{order.date}</div>
                      </div>
                      <div className="font-semibold text-pink-500">${order.price.toFixed(2)}</div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        {/* You can add more <TabsContent value="orders">...</TabsContent> for other tabs */}
      </Tabs>
    </main>
  );
}
