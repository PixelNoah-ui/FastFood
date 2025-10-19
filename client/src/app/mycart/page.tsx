"use client";
import { Button } from "@/components/ui/button";
import { CarTaxiFront, Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import Image from "next/image";
import { useCartStore } from "@/store/useCartStore";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function MyCartPage() {
  const { items: cart, getSubtotal } = useCartStore();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <section className="min-h-screen bg-[#FBF8F3] py-10">
        <div className="mx-auto max-w-6xl space-y-6 px-5">
          <Skeleton className="h-10 w-48" />
          <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
            <div className="basis-3/4 space-y-4 rounded-none border bg-white p-6 shadow-md">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between gap-4"
                >
                  <Skeleton className="h-24 w-24 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-5 w-2/3" />
                    <Skeleton className="h-4 w-1/3" />
                  </div>
                  <Skeleton className="h-6 w-16" />
                </div>
              ))}
            </div>
            <div className="basis-1/4 space-y-3 rounded-none border bg-white p-6 shadow-md">
              <Skeleton className="h-6 w-32" />
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-10 w-full" />
            </div>
          </div>
        </div>
      </section>
    );

  if (cart.length === 0)
    return (
      <section className="flex min-h-[80vh] flex-col items-center justify-center bg-[#FBF8F3] px-5 text-center">
        <ShoppingCart className="mb-4 h-16 w-16 text-gray-400" />
        <h2 className="text-2xl font-semibold">Your cart is empty</h2>
        <p className="mb-4 text-gray-600">
          Add some delicious items to continue!
        </p>
        <Button asChild className="rounded-none px-5">
          <Link href="/menu">Go to Menu</Link>
        </Button>
      </section>
    );

  return (
    <section className="min-h-screen bg-[#FBF8F3] py-10">
      <div className="mx-auto max-w-6xl px-5">
        <h1 className="mb-6 text-3xl font-bold md:text-4xl">
          Your <span className="text-primary">Cart</span>
        </h1>
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-6">
          <div className="basis-3/4 rounded-none border bg-white p-6 shadow-md">
            <div className="flex items-center justify-between border-b pb-3">
              <h2 className="text-lg font-semibold">Shopping Cart</h2>
              <span className="text-sm text-gray-500">{cart.length} items</span>
            </div>
            <ul className="divide-y">
              {cart.map((item) => (
                <CartItem key={item.id} item={item} />
              ))}
            </ul>
          </div>

          <div className="top-20 h-fit basis-1/4 rounded-none border bg-white p-6 shadow-md lg:sticky">
            <h3 className="mb-4 text-lg font-semibold">Order Summary</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{getSubtotal().toFixed(2)} ETB</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total</span>
                <span>{getSubtotal().toFixed(2)} ETB</span>
              </div>
            </div>

            <Button className="mt-4 w-full rounded-none px-4">
              Proceed to Checkout
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

interface CartItemProps {
  item: {
    id: string;
    name: string;
    price: number;
    image?: string;
    quantity: number;
  };
}

function CartItem({ item }: CartItemProps) {
  const { updateQuantity, removeItem } = useCartStore();

  return (
    <li className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={item?.image || "/placesholder.png"}
            alt={item.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold">{item.name}</h3>
          <p className="text-sm font-medium text-gray-800">
            {item.price.toFixed(2)} ETB
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        <div className="flex items-center gap-2 rounded-md border px-2 py-1">
          <button
            disabled={item.quantity <= 1}
            className="rounded p-1 transition hover:bg-gray-100 disabled:opacity-50"
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-6 text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button
            className="rounded p-1 transition hover:bg-gray-100"
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="min-w-[70px] text-right font-semibold text-gray-800">
            {(item.price * item.quantity).toFixed(2)} ETB
          </span>
          <button
            className="rounded p-1 text-gray-500 transition hover:text-red-500"
            onClick={() => removeItem(item.id)}
          >
            <Trash className="h-5 w-5" />
          </button>
        </div>
      </div>
    </li>
  );
}
