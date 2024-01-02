import { useParams, useSearchParams } from "react-router-dom";
import { useJob } from "../features/jobs/useJob";
import JobDetails from "../features/jobs/JobDetails";

function Job() {
  return (
    <>
      <JobDetails />
    </>
  );
}

export default Job;
