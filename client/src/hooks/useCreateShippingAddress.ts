import {
  createUSerShippingAddress,
  shippingAddressType,
} from "@/app/api/createshippingAddress";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
interface useCreateShippingAddressProps {
  userData: shippingAddressType;
  userId: string;
}
export function useCreateShippingAddress() {
  const mutate = useMutation({
    mutationFn: ({ userData, userId }: useCreateShippingAddressProps) =>
      createUSerShippingAddress(userData, userId),
    onSuccess: () => {
      toast.success("Address saved successfully");
    },
    onError: (err) => {
      toast.error(err.message || "Something went wrong,please try agin");
    },
  });

  return { createAddress: mutate.mutateAsync, isPending: mutate.isPending };
}
