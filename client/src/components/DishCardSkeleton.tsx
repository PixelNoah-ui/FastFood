import { Skeleton } from "./ui/skeleton";

export default function DishCardSkeleton() {
  return (
    <div className="mx-auto max-w-7xl">
      <div className="flex grid-cols-3 flex-col items-center gap-6 sm:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-8 xl:grid-cols-4">
        {Array.from({ length: 12 }).map((_, i) => (
          <div key={i} className="space-y-6 bg-white">
            <div className="relative aspect-[16/12] w-full">
              <Skeleton className="h-full w-full rounded-none" />
            </div>

            <div className="space-y-6 px-3 py-2">
              <div className="space-y-3">
                <Skeleton className="h-6 w-1/2" />
                <Skeleton className="h-16 w-full" />
              </div>

              <div className="flex items-center justify-between gap-2">
                <Skeleton className="h-5 w-16" />
                <Skeleton className="h-5 w-10" />
              </div>

              <div className="bg-muted h-[2px] w-full" />

              <div className="flex justify-end">
                <Skeleton className="h-10 w-36 rounded-none" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
