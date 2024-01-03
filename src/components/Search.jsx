import Input from "./SearchInput";
import { Checkbox } from "@/components/ui/checkbox";

import { IoIosSearch } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import Button from "./Button";
import { useFilters } from "../context/FiltersProvider";
import { useState } from "react";
import { useJobs } from "../features/jobs/useJobs";

function Search() {
  const [isFullTime, setIsFullTime] = useState(false);
  const [title, setTitle] = useState("");
  const [country, setCountry] = useState("");
  const { toggleFullTime, updateTitle, updateCountry, reset } = useFilters();
  const { isLoading } = useJobs();
  function handleSubmit(e) {
    e.preventDefault();
    toggleFullTime(isFullTime);
    updateTitle(title);
    updateCountry(country);
  }
  function handleReset() {
    setIsFullTime(false);
    setTitle("");
    setCountry("");
    reset();
  }
  return (
    <form
      onSubmit={handleSubmit}
      className="element-bg w-full rounded-md overflow-hidden grid grid-cols-[1.4fr_1fr_auto] shadow-sm max-[863px]:grid-cols-[1fr_1fr] max-[400px]:flex max-[400px]:flex-col">
      <Input
        value={title}
        onChange={e => setTitle(e.target.value)}
        placeholder="Filter by title, companies...">
        <IoIosSearch className="text-indigo-600" />
      </Input>
      <Input
        value={country}
        onChange={e => setCountry(e.target.value)}
        placeholder="Filter by location">
        <IoLocationSharp className="text-indigo-600" />
      </Input>
      <div className="flex flex-wrap items-center gap-8 p-4 max-[863px]:col-span-2">
        <div className="flex items-center gap-2 p-3">
          <Checkbox
            checked={isFullTime}
            onCheckedChange={e => setIsFullTime(e)}
            id="fullTime"
          />
          <label
            className="text-md font-semibold cursor-pointer text-indigo-950 dark:text-indigo-50"
            htmlFor="fullTime">
            Full Time Only
          </label>
        </div>
        <Button disabled={isLoading}>Search</Button>
        <Button
          disabled={isLoading}
          onClick={handleReset}
          type="reset"
          variation="link">
          Reset
        </Button>
      </div>
    </form>
  );
}

export default Search;
