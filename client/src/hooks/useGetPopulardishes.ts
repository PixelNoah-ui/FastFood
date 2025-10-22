import { getPopularDishes } from "@/app/api/getPopularDishes";
import { useQuery } from "@tanstack/react-query";

export const useGetPopulardishes = () => {
  const { isPending, data: dishes } = useQuery({
    queryFn: getPopularDishes,
    queryKey: ["popular-dishes"],
  });

  return { isPending, dishes };
};
