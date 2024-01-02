import styled from "styled-components";
import Spinner from "../../components/Spinner";
import { useJobs } from "./useJobs";
import JobItem from "./JobItem";
import Button from "../../components/Button";
import { PAGE_COUNT } from "../../utils/constants";
import Empty from "../../components/Empty";
const StyledList = styled.ul`
  list-style: none;
  /* display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  justify-content: start;
  align-items: center;
  gap: 3rem;
  row-gap: 5rem; */
  display: flex;
  flex-wrap: wrap;
  gap: 4rem;
  row-gap: 6rem;
`;

function JobsList() {
  const { data, isLoading, fetchNextPage, isFetchingNextPage } = useJobs();
  function handleLoadMore() {
    fetchNextPage();
  }
  if (isLoading) return <Spinner />;
  const hasNextPage = PAGE_COUNT <= data.pages.at(-1).length;
  if (!data.pages[0].length) return <Empty>No Result Found 😴</Empty>;
  return (
    <>
      <StyledList>
        {data.pages.map(pages =>
          pages.map(job => <JobItem key={job.id} job={job} />)
        )}
      </StyledList>
      <div className="flex items-center justify-center">
        {hasNextPage && (
          <Button onClick={handleLoadMore} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </div>
    </>
  );
}

export default JobsList;
