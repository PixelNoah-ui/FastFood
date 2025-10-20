// 📁 src/hooks/useVerifyStock.ts
import { verifyStock } from "@/api/verifyStock";
import { CartItem } from "@/store/useCartStore";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

export function useVerifyStock() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (cartItems: CartItem[]) => verifyStock(cartItems),

    onSuccess: (data) => {
      if (data.status === "fail" && data.stockIssues) {
        data.stockIssues.forEach((item) => {
          toast.error(
            `Only ${item.availableStock} of ${item.name} available. You requested ${item.requestedStock}.`,
          );
        });
        return;
      }

      router.push("/checkout");
    },

    onError: (error) => {
      console.error("Stock verification failed:", error);
      toast.error("Something went wrong while verifying stock.");
    },
  });

  return mutation;
}
