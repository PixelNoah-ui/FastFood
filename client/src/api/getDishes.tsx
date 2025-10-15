import { dishTypes } from "@/lib/dishType";
import toast from "react-hot-toast";

interface DishesResponse {
  status: string;
  data: dishTypes[];
  totalPage: number;
}

export async function getDishes(
  page: number = 1,
): Promise<DishesResponse | null> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API}/dishes?page=${page}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        cache: "no-store",
      },
    );

    if (!response.ok) {
      const errorText = await response.text();
      toast.error(errorText || "Something went wrong, please try again");
      return null;
    }

    const result: DishesResponse = await response.json();

    return result;
  } catch (error) {
    console.error("Fetch error:", error);
    toast.error("Failed to fetch dishes. Please try again later.");
    return null;
  }
}
