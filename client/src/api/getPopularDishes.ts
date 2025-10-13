import { dishTypes } from "@/lib/dishType";
import toast from "react-hot-toast";

export const getPopularDishes = async () => {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/dishes/popular`);
  if (!response.ok) {
    const errorData = await response.json();
    toast.error("Something went wrong");
    console.log(errorData);
    return;
  }

  const result = await response.json();
  return result.data as dishTypes[];
};
