import { getUserOrder } from "@/app/api/getOrder";
import { OrderResponse } from "@/lib/orderResponseType";
import { useQuery } from "@tanstack/react-query";

export function useGetUserOrder(userId: string) {
  const {
    data: orders,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery<OrderResponse[]>({
    queryKey: ["order", userId],
    queryFn: () => getUserOrder(userId),
    enabled: !!userId,
  });

  return { orders, isLoading, isError, error, refetch };
}
