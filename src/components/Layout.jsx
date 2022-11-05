import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;

const Container = styled.div`
  background-color: #fafafa;
  display: flex;
  height: 100vh;
`;

const Main = styled.main`
  flex: 1;
`;
