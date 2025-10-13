import { getDishes } from "@/api/getDishes";
import NoDishesFound from "@/components/NoDishesFound";
import { Suspense } from "react";
import DishCard from "@/components/DishCard";
import DishCardSkeleton from "@/components/DishCardSkeleton";

export default function Page() {
  return (
    <div className="mx-auto max-w-7xl space-y-5 px-3">
      <Suspense fallback={<DishCardSkeleton />}>
        <DishesList />
      </Suspense>
    </div>
  );
}

async function DishesList() {
  const dishes = await getDishes();
  if (!dishes.length) {
    return <NoDishesFound />;
  }
  return (
    <div className="group-has-[[data-pending]]:animate-pulse flex grid-cols-3 flex-col items-center gap-6 py-10 sm:grid md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
      {dishes.map((dish) => (
        <DishCard dish={dish} key={dish._id} />
      ))}
    </div>
  );
}
