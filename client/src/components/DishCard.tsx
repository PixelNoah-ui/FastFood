import { Plus, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

export default function DishCard() {
  return (
    <div className="space-y-6 bg-white">
      <div className="relative aspect-[16/12] w-full">
        <Image
          src="/hero/hero1.png"
          alt="images"
          fill
          className="object-cover object-center"
        />
      </div>
      <div className="space-y-6 px-3 py-2">
        <div className="space-y-3">
          <h1 className="text-2xl font-bold">Big Mac</h1>
          <h1 className="text-muted-foreground">
            At Fazfood, we want to make sure that everyone can get their hands
            on a good burger. Go hunting in our versatile burger menu there is
            something for every taste and for all sizes
          </h1>
        </div>
        <div className="flex items-center justify-between gap-4">
          <div>25$</div>
          <Button className="flex cursor-pointer items-center gap-2 rounded-none">
            <ShoppingCart className="h-5 w-5" />
            <span>Add to Cart</span>
            <Plus className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
