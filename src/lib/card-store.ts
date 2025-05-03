import { create } from "zustand";
import { Product } from "@/generated/prisma";

export type CartItem = {
  product: Product;
  quantity: number;
};

interface CardStoreState {
  items: CartItem[];
  addItem: (product: Product, quantity?: number) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
}

export const useCardStore = create<CardStoreState>((set) => ({
  items: [],
  addItem: (product, quantity = 1) => {
    set((state) => {
      const existing = state.items.find((item) => item.product.id === product.id);
      if (existing) {
        return {
          items: state.items.map((item) =>
            item.product.id === product.id ? { ...item, quantity: item.quantity + quantity } : item,
          ),
        };
      }
      return { items: [...state.items, { product, quantity }] };
    });
  },
  removeItem: (productId) => {
    set((state) => ({ items: state.items.filter((item) => item.product.id !== productId) }));
  },
  updateQuantity: (productId, quantity) => {
    set((state) => ({
      items: state.items.map((item) => (item.product.id === productId ? { ...item, quantity } : item)),
    }));
  },
  clearCart: () => set({ items: [] }),
}));
