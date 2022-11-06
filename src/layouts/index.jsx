import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Layout = () => {
  return (
    <LayoutContainer>
      <Outlet />
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100vh;
`;

export default Layout;
