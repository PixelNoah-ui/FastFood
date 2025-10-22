import {
  createUSerShippingAddress,
  shippingAddressType,
} from "@/app/api/createshippingAddress";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useCreateShippingAddress() {
  const mutate = useMutation({
    mutationFn: (userData: shippingAddressType) =>
      createUSerShippingAddress(userData),
    onSuccess: () => {
      toast.success("Address saved successfully");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong,please try agin");
    },
  });

  return { createAddress: mutate.mutateAsync, isPending: mutate.isPending };
}
