import styled from "styled-components";
import ButtonLink from "../../components/ButtonLink";
import { getTimeDifference } from "../../utils/helpers";

const Div = styled.div``;
const DottedLi = styled.li`
  position: relative;
  &::after {
    content: "";
    position: absolute;
    height: 0.4rem;
    aspect-ratio: 1;
    border-radius: 10rem;
    background-color: #6366f1;
    left: 0;
    top: 50%;
    translate: 0 -50%;
  }
`;
function JobInfo({ job }) {
  const {
    id,
    company,
    logo,
    position,
    role,
    level,
    location,
    contrat,
    created_at,
    apply_link,
    description,
  } = job;
  const published = getTimeDifference(new Date(created_at));
  const parsedDescription = JSON.parse(description).at(0);
  const { intro, requirements, whatYouWillDo } = parsedDescription;

  return (
    <div className="space-y-20 ">
      <div className="md:px-12 md:py-16 px-2 py-8 element-bg space-y-12 rounded-md ">
        <Div className="flex flex-wrap gap-4 items-center justify-between">
          <div className=" space-y-2">
            <div className="flex items-center gap-2 text-md text-slate-500 dark:text-slate-400">
              <p>{published} </p>
              &bull;
              <p>{contrat}</p>
            </div>
            <h2 className="text-slate-950  dark:text-indigo-50 font-semibold text-3xl">
              {position}
            </h2>
            <p className="text-brand font-semibold text-lg tracking-wide mt-auto flex items-center justify-between">
              {location}
            </p>
          </div>
          <ButtonLink href={apply_link}>Apply Now</ButtonLink>
        </Div>
        <Div>
          <p className="text-lg text-slate-500 dark:text-slate-400 leading-[1.8]">
            {intro}
          </p>
        </Div>
        <Div className="space-y-4 text-lg text-slate-500 dark:text-slate-400">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-2xl">
            Requirements
          </h3>
          <p className="">{requirements.text}</p>
          <ul className="space-y-3 ">
            {requirements.list.map(item => (
              <DottedLi key={item} className="pl-[3rem]">
                {item}
              </DottedLi>
            ))}
          </ul>
        </Div>
        <Div className="space-y-4 text-lg text-slate-500 dark:text-slate-400">
          <h3 className="font-semibold text-slate-800 dark:text-slate-200 text-2xl">
            What You Will Do
          </h3>
          <p className="">{whatYouWillDo.text}</p>
          <ul className="space-y-4 ">
            {whatYouWillDo.list.map((item, i) => (
              <li key={item} className="">
                <span className="pr-[3rem] text-indigo-500 font-semibold">
                  {" "}
                  {i + 1}
                </span>{" "}
                {item}
              </li>
            ))}
          </ul>
        </Div>
      </div>
      <div className="md:px-8 md:py-10 py-5 px-2 flex-wrap gap-4 element-bg relative flex items-center justify-between ">
        <div className="space-y-1">
          <h2 className="text-slate-950  dark:text-indigo-50 font-semibold text-3xl">
            {position}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 text-md tracking-wide mt-auto flex items-center justify-between">
            {company}
          </p>
        </div>
        <ButtonLink href={apply_link}>Apply Now</ButtonLink>
        <span className="absolute h-full w-[200vw] top-0 element-bg -left-[50%] -z-10"></span>
      </div>
    </div>
  );
}

export default JobInfo;
