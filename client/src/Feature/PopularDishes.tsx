import DishCard from "@/components/DishCard";

export default function PopularDishes() {
  return (
    <div className="space-y-14">
      <h1 className="text-center text-5xl font-bold md:text-6xl lg:text-7xl">
        Best selling dishes
      </h1>
      <div className="flex flex-col gap-5 sm:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <DishCard key={i} />
        ))}
      </div>
    </div>
  );
}
