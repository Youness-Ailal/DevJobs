import Button from "../../components/Button";
function JobHeader({ job }) {
  const { logo, company, website } = job;
  return (
    <div className="grid items-center grid-cols-[auto,1fr,auto]  gap-16 element-bg rounded-md overflow-hidden max-[550px]:grid-cols-[1fr_1fr] max-[400px]:flex max-[400px]:flex-cols">
      <img
        className="h-36 element-bg px-6 py-4 rounded-[1rem] object-cover"
        src={logo}
        alt={`logo of ${company}`}
      />
      <div className="space-y-1 ">
        <p className="font-semibold text-xl letter tracking-wide dark:text-slate-50 text-stale-950">
          {company}{" "}
        </p>
        <p className="text-slate-500 text-md dark:text-slate-400">{website} </p>
      </div>
      <a href={website} target="_blank" className="pr-6 max-[550px]:p-2">
        <Button variation="secondary">Company Site</Button>
      </a>
    </div>
  );
}

export default JobHeader;
