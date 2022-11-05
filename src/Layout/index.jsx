import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./Header";
import UserInfo from "./UserInfo";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Dashboard>
        <UserInfo />
        <Outlet />
      </Dashboard>
    </Container>
  );
};

export default Layout;

const Dashboard = styled.section`
  display: flex;
  flex-direction: column;
  width: calc(100% - 150px);
  flex-grow: 1;
  padding: 0 40px;
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  background-color: #f6f7f8;
`;
