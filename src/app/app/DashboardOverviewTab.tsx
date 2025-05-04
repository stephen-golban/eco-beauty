import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { RecentOrderAvatar } from "./RecentOrderAvatar";

type StatCard = {
  label: string;
  value: string;
  icon: string;
  empty: boolean;
};

type RecentOrder = {
  id: string;
  product: string;
  image: string;
  price: number;
  date: string;
};

interface DashboardOverviewTabProps {
  statCards: StatCard[];
  orderData: number[];
  months: string[];
  ordersCount: number;
  recentOrders: RecentOrder[];
}

function formatPriceMDL(price: number) {
  return `${price.toFixed(2)} MDL`;
}

export function DashboardOverviewTab({
  statCards,
  orderData,
  months,
  ordersCount,
  recentOrders,
}: DashboardOverviewTabProps) {
  return (
    <>
      {/* Stat Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {statCards.map((card) => (
          <Card key={card.label} className="flex flex-col gap-2 p-6">
            <CardHeader className="flex flex-col gap-2 p-0">
              <span className="text-2xl">{card.icon}</span>
              <CardTitle className="text-2xl font-bold">{card.value}</CardTitle>
              <CardDescription className="text-sm text-gray-500">{card.label}</CardDescription>
              {card.empty && (
                <span className="mt-2 text-xs text-gray-400">Nu există {card.label.toLowerCase()} încă</span>
              )}
            </CardHeader>
          </Card>
        ))}
      </div>
      {/* Main Content */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Chart */}
        <Card className="col-span-2">
          <CardHeader className="mb-4">
            <CardTitle>Prezentare generală comenzi</CardTitle>
          </CardHeader>
          <CardContent>
            {ordersCount === 0 ? (
              <div className="flex h-48 items-center justify-center text-gray-400">Nu există comenzi în acest an.</div>
            ) : (
              <div className="scrollbar-thin scrollbar-thumb-gray-300 flex h-48 items-end gap-2 overflow-x-auto sm:gap-2">
                {orderData.map((val, idx) => (
                  <div key={months[idx]} className="flex w-8 min-w-[2rem] flex-col items-center sm:w-6 sm:min-w-0">
                    <div
                      className="w-full rounded-t bg-pink-400 transition-all duration-300"
                      style={{ height: `${val * 30}px` }}
                      title={`Comenzi: ${val}`}
                    ></div>
                    <span className="mt-1 text-xs whitespace-nowrap text-gray-400">{months[idx]}</span>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
        {/* Recent Orders */}
        <Card>
          <CardHeader className="mb-4">
            <CardTitle>Comenzi recente</CardTitle>
          </CardHeader>
          <CardContent>
            {recentOrders.length === 0 ? (
              <div className="py-8 text-center text-gray-400">Nu există comenzi recente.</div>
            ) : (
              <ul className="divide-y">
                {recentOrders.map((order) => (
                  <li key={order.id} className="flex items-center gap-3 py-3">
                    <RecentOrderAvatar image={order.image} product={order.product} />
                    <div className="flex-1">
                      <div className="font-medium">{order.product}</div>
                      <div className="text-xs text-gray-400">{order.date}</div>
                    </div>
                    <div className="font-semibold text-pink-500">{formatPriceMDL(order.price)}</div>
                  </li>
                ))}
              </ul>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  );
}
