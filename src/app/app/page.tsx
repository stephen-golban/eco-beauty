import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { auth } from "@clerk/nextjs/server";
import { getDashboardData } from "./getDashboardData";
import { DashboardOverviewTab } from "./DashboardOverviewTab";
import { DashboardOrdersTab, type DashboardOrder } from "./DashboardOrdersTab";
import { DashboardFavoritesTab } from "./DashboardFavoritesTab";

export default async function BeautyDashboard() {
  const { userId } = await auth();
  if (!userId) {
    // Should never happen due to layout, but fallback just in case
    return <div className="p-8 text-center">Neautentificat</div>;
  }
  const data = await getDashboardData(userId);

  const statCards = [
    {
      label: "Puncte de loialitate",
      value: data.loyaltyPoints.toLocaleString(),
      icon: "💎",
      empty: data.loyaltyPoints === 0,
    },
    {
      label: "Comenzi",
      value: data.ordersCount.toLocaleString(),
      icon: "🛍️",
      empty: data.ordersCount === 0,
    },
    {
      label: "Favorite",
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
          <h1 className="text-3xl font-bold">Bine ai revenit, {data.user.name}!</h1>
          <p className="mt-1 text-gray-500">Acesta este panoul tău de control pentru frumusețe.</p>
        </div>
      </div>
      {/* Tabs */}
      <Tabs defaultValue="overview" className="mx-auto mb-6 max-w-7xl">
        <TabsList>
          <TabsTrigger value="overview">Prezentare generală</TabsTrigger>
          <TabsTrigger value="orders">Comenzi</TabsTrigger>
          <TabsTrigger value="wishlist">Favorite</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <DashboardOverviewTab
            statCards={statCards}
            orderData={data.orderData}
            months={data.months}
            ordersCount={data.ordersCount}
            recentOrders={data.recentOrders.map((o) => ({ ...o, price: Number(o.price) }))}
          />
        </TabsContent>
        <TabsContent value="orders">
          <DashboardOrdersTab orders={data.user.orders as unknown as DashboardOrder[]} />
        </TabsContent>
        <TabsContent value="wishlist">
          <DashboardFavoritesTab favorites={data.user.wishlist} />
        </TabsContent>
        {/* Poți adăuga mai multe <TabsContent value="...">...</TabsContent> pentru alte taburi */}
      </Tabs>
    </main>
  );
}
