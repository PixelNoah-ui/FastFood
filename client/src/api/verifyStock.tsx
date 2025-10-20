import { CartItem } from "@/store/useCartStore";

export interface StockIssue {
  id: string;
  name: string;
  availableStock: number;
  requestedStock: number;
  message?: string;
}

export interface VerifyStockResponse {
  status: "success" | "fail";
  message: string;
  stockIssues?: StockIssue[];
}

export async function verifyStock(
  cartItems: CartItem[],
): Promise<VerifyStockResponse> {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API}/checkout/verify-stock`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cartItems }),
    },
  );

  const data = (await response.json()) as VerifyStockResponse;
  return data;
}
