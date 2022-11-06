import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "layouts/Header";
import Sidebar from "layouts/Sidebar";

const Layout = () => {
  return (
    <LayoutContainer>
      <Sidebar />
      <Contents>
        <Header />
        <Outlet />
      </Contents>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  height: 100vh;
`;

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
`;

export default Layout;
