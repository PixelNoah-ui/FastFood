import { dishTypes } from "@/lib/dishType";

interface DishesResponse {
  status: string;
  data: dishTypes[];
  totalPage: number;
}

interface getDishesProps {
  page?: string;
  category?: string | string[];
  sort?: string;
  price_min?: string;
  price_max?: string;
}

export async function getDishes({
  page,
  category,
  sort,
  price_max,
  price_min,
}: getDishesProps) {
  try {
    const params = new URLSearchParams();
    if (page) params.append("page", page);
    if (category) {
      if (Array.isArray(category)) {
        category.forEach((c) => params.append("category", c));
      } else {
        params.append("category", category);
      }
    }
    if (sort) params.append("sort", sort);
    if (price_max) params.append("price_max", price_max);
    if (price_min) params.append("price_min", price_min);

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/dishes?${params.toString()}`,
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.log(errorText || "Something went wrong, please try again");
      return null;
    }

    const result: DishesResponse = await response.json();
    console.log("Fetched Dishes:", result);
    return result;
  } catch (error) {
    console.error("Fetch error:", error);
  }
}
