import React from "react";
import styled from "styled-components";
import { AiOutlineBarChart, AiOutlineDashboard, AiOutlinePlus } from "react-icons/ai";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  return (
    <SidebarContainer>
      <div>
        <Logo />
      </div>
      <SidebarTitle>서비스</SidebarTitle>
      <SidebarButton isSelected={true}>
        <AiOutlinePlus />
        <span>서비스 추가</span>
      </SidebarButton>
      <SidebarTitle>광고 센터</SidebarTitle>
      <SidebarButton onClick={() => navigate("/")}>
        <AiOutlineDashboard />
        <span>대시보드</span>
      </SidebarButton>
      <SidebarButton onClick={() => navigate("/ads")}>
        <AiOutlineBarChart />
        <span>광고관리</span>
      </SidebarButton>
    </SidebarContainer>
  );
};

const SidebarContainer = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  width: 320px;
  min-height: 100vh;
  height: 100%;
  padding: 40px;
  box-shadow: 4px 0px 10px rgba(0, 0, 0, 0.04);
  background: #fff;

  > div:first-child {
    padding: 60px 0;
    margin-bottom: 40px;
    border-bottom: 1px solid #edeff1;
  }
`;

const SidebarTitle = styled.div`
  color: #94a2ad;
  font-size: 12px;
  padding: 13px 20px;
`;

const SidebarButton = styled.button`
  border: none;
  outline: none;
  background: none;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isSelected ? "#586cf5" : "#3a474e")};
  height: 60px;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 700;

  &:nth-child(3) {
    border: 1px solid #d1d8dc;
    margin-bottom: 60px;
  }

  > span {
    margin-left: 10px;
  }

  > svg {
    margin-left: 20px;
  }
`;

export default Sidebar;
