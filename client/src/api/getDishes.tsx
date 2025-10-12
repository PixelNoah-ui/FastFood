import { dishTypes } from "@/lib/dishType";
import toast from "react-hot-toast";

export async function getDishes(): Promise<dishTypes[]> {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API}/dishes`);
  if (!response.ok) {
    toast.error("something went wrong,please try again");
    return [];
  }

  const result = await response.json();

  return result.data;
}
