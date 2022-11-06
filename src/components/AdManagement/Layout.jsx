import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../SideBar";

const Layout = () => {
  return (
    <S.MainContainer>
      <SideBar />
      <S.AdSection>
        <Outlet />
      </S.AdSection>
    </S.MainContainer>
  );
};

const S = {
  AdSection: styled.section`
    padding: 2.5rem 4rem 2.5rem 4rem;
    width: 100vw;
    height: 100vh;
    background: #f6f7f8;
    h3 {
      padding: 2.5rem 1rem;
      font-weight: 900;
      font-size: 2.6rem;
    }
  `,
  MainContainer: styled.main`
    display: flex;
  `,
};
export default Layout;
