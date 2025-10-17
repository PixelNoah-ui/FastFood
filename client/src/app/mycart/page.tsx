import { Button } from "@/components/ui/button";
import { Minus, Plus, Trash } from "lucide-react";
import Image from "next/image";

export default function MyCartPage() {
  const cart = [
    {
      id: "item-1",
      name: "Classic White T-Shirt",
      description: "Soft cotton crew neck with a relaxed fit.",
      price: 19.99,
      quantity: 2,
      image: "/about/about1.png",
      category: "T-Shirts",
      total: 39.98,
    },
    {
      id: "item-2",
      name: "Slim Fit Blue Jeans",
      description: "Stretch denim with a modern, tapered leg.",
      price: 49.99,
      quantity: 1,
      image: "/about/about2.png",
      category: "Jeans",
      total: 49.99,
    },
    {
      id: "item-3",
      name: "Black Hoodie",
      description: "Fleece-lined hoodie with adjustable drawstring.",
      price: 39.99,
      quantity: 1,
      image: "/about/about.png",
      category: "Hoodies",
      total: 39.99,
    },
  ];

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
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
                <span>{totalPrice.toFixed(2)} ETB</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between font-semibold text-gray-800">
                <span>Total</span>
                <span>{totalPrice.toFixed(2)} ETB</span>
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
    description: string;
    price: number;
    quantity: number;
    image: string;
    category: string;
    total: number;
  };
}

function CartItem({ item }: CartItemProps) {
  return (
    <li className="flex flex-col gap-4 py-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <div className="relative h-24 w-24 overflow-hidden rounded-lg bg-gray-100">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
        <div className="space-y-1">
          <h3 className="text-base font-semibold">{item.name}</h3>
          <p className="text-sm text-gray-500">{item.description}</p>
          <p className="text-sm font-medium text-gray-800">
            {item.price.toFixed(2)} ETB
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-6 sm:justify-end">
        <div className="flex items-center gap-2 rounded-md border px-2 py-1">
          <button className="rounded p-1 transition hover:bg-gray-100">
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-6 text-center text-sm font-medium">
            {item.quantity}
          </span>
          <button className="rounded p-1 transition hover:bg-gray-100">
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3">
          <span className="min-w-[70px] text-right font-semibold text-gray-800">
            {(item.price * item.quantity).toFixed(2)} ETB
          </span>
          <button className="rounded p-1 text-gray-500 transition hover:text-red-500">
            <Trash className="h-5 w-5" />
          </button>
        </div>
      </div>
    </li>
  );
}
