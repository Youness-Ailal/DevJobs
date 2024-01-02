import supabase from "./supabase";
import { PAGE_COUNT } from "../utils/constants";
export async function getJobs({
  pageParam,
  isFullTime,
  serachTitle,
  searchCountry,
}) {
  const from = pageParam * PAGE_COUNT;
  const to = from + PAGE_COUNT - 1;
  let query = supabase
    .from("jobs")
    .select("*")
    .range(from, to)
    .order("created_at", { ascending: false });

  if (isFullTime) {
    console.log("full");
    query = query.eq("contrat", "Full Time");
  } else {
    console.log("part");
  }

  let { data, error } = await query;
  if (serachTitle.length) {
    data = data.filter(job => {
      const { company, position, level, contact, website } = job;
      const query = company + position + level + contact + level + website;
      if (query.toLowerCase().includes(serachTitle.toLowerCase())) return job;
    });
  }
  if (searchCountry.length) {
    data = data.filter(job => {
      const { location } = job;
      if (location.toLowerCase().includes(searchCountry.toLowerCase()))
        return job;
    });
  }
  if (error) throw new Error(error.message);
  return data;
}

export async function getJob(id) {
  const { data, error } = await supabase
    .from("jobs")
    .select("*")
    .eq("id", id)
    .single();
  if (error) throw new Error(error.message);
  return data;
}
