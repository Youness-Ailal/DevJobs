import { useInfiniteQuery } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";
import toast from "react-hot-toast";
import { useFilters } from "../../context/FiltersProvider";

export function useJobs() {
  //Filters
  const { isFullTime, serachTitle, searchCountry } = useFilters();

  const {
    data,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ["jobs", isFullTime, serachTitle, searchCountry],
    initialPageParam: 0,
    queryFn: props =>
      getJobs({ ...props, isFullTime, serachTitle, searchCountry }),

    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      return lastPageParam + 1;
    },
  });
  if (isError) {
    toast.error(isError.message);
    return;
  }
  return { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage };
}
