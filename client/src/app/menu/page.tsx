import { getDishes } from "@/api/getDishes";
import NoDishesFound from "@/components/NoDishesFound";
import { Suspense } from "react";
import DishCard from "@/components/DishCard";
import DishCardSkeleton from "@/components/DishCardSkeleton";
import { PaginationBar } from "@/components/PaginationBar";
interface pageProps {
  searchParams: Promise<{
    page?: string;
  }>;
}
export default function Page({ searchParams }: pageProps) {
  return (
    <div className="mx-auto max-w-7xl space-y-5 px-3">
      <Suspense fallback={<DishCardSkeleton />}>
        <DishesList searchParams={searchParams} />
      </Suspense>
    </div>
  );
}

async function DishesList({ searchParams }: pageProps) {
  const searchParam = await searchParams;
  console.log(searchParam);
  const currentPage = searchParam.page || 1;
  const result = await getDishes();
  if (!result?.data.length) {
    return <NoDishesFound />;
  }

  return (
    <div className="space-y-6">
      <div className="flex grid-cols-3 flex-col items-center gap-6 py-10 group-has-[[data-pending]]:animate-pulse sm:grid md:grid-cols-2 lg:gap-8 xl:grid-cols-3">
        {result.data.map((dish) => (
          <DishCard dish={dish} key={dish._id} />
        ))}
      </div>
      <PaginationBar
        totalPage={result.totalPage}
        currentPage={Number(currentPage)}
      />
    </div>
  );
}
