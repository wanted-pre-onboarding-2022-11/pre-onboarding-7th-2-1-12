import React from "react";
import styled from "styled-components";
import CustomDatePicker from "../components/DashBoard/CustomDatePicker";
import DashBoardContents from "../components/DashBoard/DashBoardContents";

const DashBoardPage = () => {
  return (
    <>
      <LayoutTitle>
        <h3>대시 보드</h3>
        <CustomDatePicker />
      </LayoutTitle>
      <DashBoardContents />
    </>
  );
};
const LayoutTitle = styled.div`
  color: #3a474e;
  font-weight: 900;
  font-size: 2.6rem;
  line-height: 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export default DashBoardPage;
