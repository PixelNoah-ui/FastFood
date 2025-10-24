import NoDishesFound from "@/components/NoDishesFound";
import { Suspense } from "react";
import DishCard from "@/components/DishCard";
import DishCardSkeleton from "@/components/DishCardSkeleton";
import { PaginationBar } from "@/components/PaginationBar";
import { getDishes } from "../api/getDishes";

interface pageProps {
  searchParams: Promise<{
    page?: string;
    sort?: string;
    price_min?: string;
    price_max?: string;
    collections?: string | string[];
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
  try {
    const resolvedParams = await searchParams;

    const {
      page = "1",
      sort,
      price_min,
      price_max,
      collections,
    } = resolvedParams;

    const result = await getDishes({
      page,
      sort,
      price_min,
      price_max,
      category: collections,
    });

    if (!result || !("data" in result) || !Array.isArray(result.data)) {
      return <NoDishesFound />;
    }

    if (result.data.length === 0) {
      return <NoDishesFound />;
    }

    return (
      <div className="space-y-6">
        <div className="grid grid-cols-1 items-center gap-6 py-10 group-has-[[data-pending]]:animate-pulse sm:grid-cols-2 lg:grid-cols-3">
          {result.data.map((dish) => (
            <DishCard dish={dish} key={dish._id} />
          ))}
        </div>
        <PaginationBar
          totalPage={result.totalPage}
          currentPage={Number(page)}
        />
      </div>
    );
  } catch (error) {
    console.error("Error loading dishes:", error);
    return <NoDishesFound />;
  }
}
