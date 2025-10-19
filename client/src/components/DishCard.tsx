"use client";
import { Heart, Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { dishTypes } from "@/lib/dishType";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/useCartStore";
import toast from "react-hot-toast";

interface dishcCardProps {
  dish: dishTypes;
}

export default function DishCard({ dish }: dishcCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-500 hover:shadow-xl">
      <div className="relative aspect-[16/12] w-full overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="pointer-events-none object-cover object-center transition-transform duration-700 group-hover:scale-110"
          priority
        />
      </div>

      <div className="space-y-5 px-4 py-4">
        <div className="space-y-2">
          <h1 className="group-hover:text-primary text-xl font-semibold text-gray-900 transition-colors duration-300">
            {dish.name}
          </h1>
          <p className="text-muted-foreground line-clamp-2 text-sm">
            {dish.description}
          </p>
        </div>

        <div className="flex items-center justify-between">
          <span className="text-primary text-base font-semibold">
            {dish.price} <span className="text-black">ETB</span>
          </span>
          <div className="flex items-center gap-1 text-yellow-500">
            <Heart className="text-destructive fill-destructive h-4 w-4" />
            <span className="text-sm text-gray-700">{dish.rating}</span>
          </div>
        </div>

        <div className="pt-3">
          <Button
            className="flex items-center gap-2 px-6"
            onClick={() => {
              addItem({
                id: dish._id,
                name: dish.name,
                price: dish.price,
                image: dish.image,
                quantity: 1,
              });
              toast.success("cart added successfully");
            }}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="ring-primary/30 pointer-events-none absolute inset-0 rounded-2xl opacity-0 ring-0 transition-all duration-500 group-hover:opacity-100 group-hover:ring-2" />
    </div>
  );
}
