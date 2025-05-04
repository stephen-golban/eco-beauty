import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { RecentOrderAvatar } from "./RecentOrderAvatar";
import { auth } from "@clerk/nextjs/server";
import { getDashboardData } from "./getDashboardData";

export default async function BeautyDashboard() {
  const { userId } = await auth();
  if (!userId) {
    // Should never happen due to layout, but fallback just in case
    return <div className="p-8 text-center">Not authenticated</div>;
  }
  const data = await getDashboardData(userId);

  const statCards = [
    {
      label: "Loyalty Points",
      value: data.loyaltyPoints.toLocaleString(),
      icon: "💎",
      empty: data.loyaltyPoints === 0,
    },
    {
      label: "Orders",
      value: data.ordersCount.toLocaleString(),
      icon: "🛍️",
      empty: data.ordersCount === 0,
    },
    {
      label: "Wishlist",
      value: data.wishlistCount.toLocaleString(),
      icon: "💖",
      empty: data.wishlistCount === 0,
    },
  ];

  return (
    <main className="min-h-screen px-4">
      {/* Header */}
      <div className="mx-auto mb-8 flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Welcome back, {data.user.name}!</h1>
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
                  {card.empty && <span className="mt-2 text-xs text-gray-400">No {card.label.toLowerCase()} yet</span>}
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
                {data.ordersCount === 0 ? (
                  <div className="flex h-48 items-center justify-center text-gray-400">No orders yet this year.</div>
                ) : (
                  <div className="flex h-48 items-end gap-2">
                    {data.orderData.map((val, idx) => (
                      <div key={data.months[idx]} className="flex w-6 flex-col items-center">
                        <div
                          className="w-full rounded-t bg-pink-400"
                          style={{ height: `${val * 30}px` }}
                          title={`Orders: ${val}`}
                        ></div>
                        <span className="mt-1 text-xs text-gray-400">{data.months[idx]}</span>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
            {/* Recent Orders */}
            <Card>
              <CardHeader className="mb-4">
                <CardTitle>Recent Orders</CardTitle>
              </CardHeader>
              <CardContent>
                {data.recentOrders.length === 0 ? (
                  <div className="py-8 text-center text-gray-400">No recent orders yet.</div>
                ) : (
                  <ul className="divide-y">
                    {data.recentOrders.map((order) => (
                      <li key={order.id} className="flex items-center gap-3 py-3">
                        <RecentOrderAvatar image={order.image} product={order.product} />
                        <div className="flex-1">
                          <div className="font-medium">{order.product}</div>
                          <div className="text-xs text-gray-400">{order.date}</div>
                        </div>
                        <div className="font-semibold text-pink-500">${order.price.toFixed(2)}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        {/* You can add more <TabsContent value="orders">...</TabsContent> for other tabs */}
      </Tabs>
    </main>
  );
}
