import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import { Product } from "@/data/products";

export type CartItem = { product: Product; quantity: number };

type CartCtx = {
  items: CartItem[];
  addItem: (product: Product, qty?: number) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clear: () => void;
  count: number;
  subtotal: number;
};

const Ctx = createContext<CartCtx | null>(null);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const raw = localStorage.getItem("aurie_cart");
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("aurie_cart", JSON.stringify(items));
  }, [items]);

  const addItem = (product: Product, qty = 1) =>
    setItems((prev) => {
      const existing = prev.find((i) => i.product.id === product.id);
      if (existing) {
        return prev.map((i) =>
          i.product.id === product.id ? { ...i, quantity: i.quantity + qty } : i
        );
      }
      return [...prev, { product, quantity: qty }];
    });

  const removeItem = (id: string) => setItems((prev) => prev.filter((i) => i.product.id !== id));
  const updateQty = (id: string, qty: number) =>
    setItems((prev) =>
      prev.map((i) => (i.product.id === id ? { ...i, quantity: Math.max(1, qty) } : i))
    );
  const clear = () => setItems([]);

  const count = items.reduce((s, i) => s + i.quantity, 0);
  const subtotal = items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <Ctx.Provider value={{ items, addItem, removeItem, updateQty, clear, count, subtotal }}>
      {children}
    </Ctx.Provider>
  );
};

export const useCart = () => {
  const c = useContext(Ctx);
  if (!c) throw new Error("useCart must be used within CartProvider");
  return c;
};
