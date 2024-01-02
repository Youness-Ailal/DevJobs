import styled from "styled-components";
import { Link } from "react-router-dom";
import { getTimeDifference } from "../../utils/helpers";
import { GrLinkNext } from "react-icons/gr";

const StyledJobCard = styled(Link)`
  width: 26rem;
  height: 15rem;
  box-shadow: 0 0 0.5rem 0.05rem rgba(0, 0, 0, 0.05);
  padding: 1.6rem;
  padding-bottom: 3rem;
  &:hover svg {
    opacity: 1;
    transform: translateX(0rem);
  }
`;

function JobCard({ job }) {
  const { id, company, logo, position, location, contrat, created_at } = job;
  const published = getTimeDifference(new Date(created_at));
  return (
    <StyledJobCard
      to={`/jobs/${id}`}
      className="element-bg rounded-md cursor-pointer space-y-5 outline outline-1 outline-slate-300 hover:outline-slate-400 dark:outline-slate-700 dark:hover:outline-slate-600">
      <img
        className="rounded-full h-[4rem] bg -translate-y-14 self-starto"
        src={logo}
        alt={`logo of ${company}`}></img>
      <div className="-translate-y-14 element-bg flex-grow flex flex-col gap-3 h-full">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <p>{published} </p>
          &bull;
          <p>{contrat}</p>
        </div>
        <h2 className="text-slate-950 dark:text-indigo-50 font-semibold text-xl">
          {position}
        </h2>
        <p className="text-md text-text3 dark:text-slate-300">{company}</p>
        <div className="text-brand font-semibold text-md mt-auto flex items-center justify-between">
          <p>{location}</p>
          <GrLinkNext className="opacity-0 -translate-x-[0.5rem]" />
        </div>
      </div>
    </StyledJobCard>
  );
}

export default JobCard;
