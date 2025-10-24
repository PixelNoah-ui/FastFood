import { OrderResponse } from "@/lib/orderResponseType";

export async function getUserOrder(userId: string): Promise<OrderResponse[]> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/orders/${userId}`,
    { cache: "no-store" },
  );

  if (!response.ok) {
    throw new Error("Something went wrong");
  }
  const result = await response.json();
  return result.data;
}
