import React from "react";
import styled from "styled-components";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { BiBarChartSquare } from "react-icons/bi";

const Header = () => {
  return (
    <Container>
      <Logo />
      <Service>
        <SubTitle>서비스</SubTitle>
        <select>
          <option>매드업</option>
        </select>
      </Service>
      <>
        <SubTitle>광고센터</SubTitle>
        <PageBtn>
          <div>
            <MdOutlineSpaceDashboard />
          </div>
          <span>대시보드</span>
        </PageBtn>
        <PageBtn isSelected>
          <div>
            <BiBarChartSquare />
          </div>
          <span>광고목록</span>
        </PageBtn>
      </>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  flex-shrink: 0;
  flex-basis: 150px;
  padding: 60px 40px;
  background-color: #fff;
`;

const Logo = styled.div`
  width: 100%;
  height: 30px;
  padding-bottom: 60px;
  background-image: url("/assets/images/Lever_BI 1.png");
  background-repeat: no-repeat;
  border-bottom: 1px solid #edeff1;
`;

const Service = styled.div`
  > select {
    padding: 20px;
    border: 1px solid #d1d8dc;
    border-radius: 10px;
    width: 100%;
    margin-bottom: 53px;
  }
`;

const SubTitle = styled.div`
  font-size: 12px;
  color: #94a2ad;
  margin-left: 30px;
  margin-top: 53px;
  margin-bottom: 14px;
`;

const PageBtn = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding-left: 22px;
  background-color: ${({ isSelected }) => `${isSelected ? "#EDEFF1" : "#fff"}`};
  > div {
    width: 20px;
    height: 20px;
    color: ${({ isSelected }) => `${isSelected ? "#586CF5" : "inherit"}`};
    margin-right: 16px;
  }
  > span {
    font-weight: 700;
    color: ${({ isSelected }) => `${isSelected ? "#586CF5" : "inherit"}`};
  }
`;
