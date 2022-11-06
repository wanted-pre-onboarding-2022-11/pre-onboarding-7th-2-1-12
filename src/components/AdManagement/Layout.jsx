import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../SideBar";

const Layout = () => {
  return (
    <S.MainContainer>
      <SideBar />
      <Outlet />
    </S.MainContainer>
  );
};

const S = {
  MainContainer: styled.main`
    display: flex;
  `,
};
export default Layout;
