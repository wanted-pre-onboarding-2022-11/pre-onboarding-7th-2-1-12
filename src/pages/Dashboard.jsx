import React from "react";
import styled from "styled-components";
import { BoardCard, Select, Title } from "../components/common";

const dates = [
  {
    value: "11",
    text: "2021년 11월 1일~2021년 11월 16일",
  },
];

const Dashboard = () => {
  return (
    <>
      <TitleContainer>
        <Title text="대시보드" />
        <Select name="date" options={dates} />
      </TitleContainer>
      <BoardCard />
      <BoardCard />
    </>
  );
};

export default Dashboard;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
