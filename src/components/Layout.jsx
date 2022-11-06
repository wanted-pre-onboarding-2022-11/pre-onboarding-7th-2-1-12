import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import styled from "styled-components";
import CustomDatePicker from "./CustomDatePicker";
import Sidebar from "./Sidebar";

const Layout = ({ childeren }) => {
  const { pathname } = useLocation();

  return (
    <LayoutContainer>
      <Sidebar />
      <ContentsContainer>
        <TopNav></TopNav>
        {pathname === "/" ? (
          <LayoutTitle>
            <span>대시보드</span>
            <CustomDatePicker />
          </LayoutTitle>
        ) : (
          <LayoutTitle>광고관리</LayoutTitle>
        )}
        <Contents>{childeren || <Outlet />}</Contents>
      </ContentsContainer>
    </LayoutContainer>
  );
};

const LayoutContainer = styled.div`
  display: flex;
  background: #e5e5e5;
  min-height: 100vh;
  height: 100%;
`;

const ContentsContainer = styled.div`
  width: calc(100% - 320px);
`;

const TopNav = styled.div`
  width: 100%;
  height: 80px;
`;

const LayoutTitle = styled.div`
  padding: 25px 40px;
  margin-bottom: 20px;
  color: #3a474e;
  font-weight: 900;
  font-size: 26px;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Contents = styled.div`
  padding: 20px 40px;
`;

export default Layout;
