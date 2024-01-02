import { useMutation, useQueryClient } from "@tanstack/react-query";
import { getJobs } from "../../services/apiJobs";

export function useMoreJobs() {
  const query = useQueryClient();
  const {
    mutate: loadMore,
    isLoading,
    error,
  } = useMutation({
    mutationFn: getJobs,
    onSuccess: query.invalidateQueries(["jobs"]),
  });
  return { loadMore, isLoading, error };
}
