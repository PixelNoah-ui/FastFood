import { CartItem } from "@/store/useCartStore";

interface ResponseType {
  status: string;
  data: string;
}

interface PaymentParams {
  cartItems: CartItem[];
  userId: string;
}

export async function chapaPayment({ cartItems, userId }: PaymentParams) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/checkout/payments/initialize`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ cartItems, userId }),
    },
  );
  console.log(response);
  if (!response.ok) {
    const errorText = await response.json();
    throw new Error(errorText.message || "Failed to initiate payment");
  }

  const result: ResponseType = await response.json();
  console.log("result", result);

  if (result.data) {
    window.location.href = result.data;
  } else {
    throw new Error(" URL not found in response");
  }
}
