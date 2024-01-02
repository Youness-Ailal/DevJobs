import { useQuery } from "@tanstack/react-query";
import { getJob } from "../../services/apiJobs";
import { useParams } from "react-router-dom";

export function useJob() {
  const { id } = useParams();
  const { data: job, isLoading } = useQuery({
    queryFn: () => getJob(id),
    queryKey: ["job", id],
  });
  return { job, isLoading };
}
