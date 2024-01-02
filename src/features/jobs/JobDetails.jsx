import JobHeader from "./JobHeader";
import { useJob } from "./useJob";
import Spinner from "../../components/Spinner";
import JobInfo from "./JobInfo";

function JobDetails() {
  const { job, isLoading } = useJob();
  if (isLoading) return <Spinner />;
  return (
    <div className="flex flex-col max-w-[65rem] mx-auto bg-red-850 space-y-12">
      <JobHeader job={job} />
      <JobInfo job={job} />
    </div>
  );
}

export default JobDetails;
