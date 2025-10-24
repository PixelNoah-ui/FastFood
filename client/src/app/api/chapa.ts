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
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout/init-payment`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cartItems, userId }),
      },
    );

    if (!response.ok) {
      const errorText = await response.json();
      throw new Error(errorText.message || "Failed to initiate payment");
    }

    const result: ResponseType = await response.json();
    console.log("result", result);

    if (result.data) {
      localStorage.removeItem("cart-storage");

      window.location.href = result.data;
    } else {
      throw new Error("URL not found in response");
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
}
