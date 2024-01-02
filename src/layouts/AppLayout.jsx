import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import styled from "styled-components";

const Main = styled.main`
  /* display: grid; */
  max-width: 90rem;
  margin: 0 auto;
  padding: 1rem;
  /* grid-template-columns: auto;
  gap: 5rem; */
`;

function AppLayout() {
  return (
    <div className="bg-backgroundLight dark:bg-backgroundDark min-h-screen ">
      <Header></Header>
      <Main className="-translate-y-12 space-y-[5rem]">
        <Outlet />
      </Main>
    </div>
  );
}

export default AppLayout;
