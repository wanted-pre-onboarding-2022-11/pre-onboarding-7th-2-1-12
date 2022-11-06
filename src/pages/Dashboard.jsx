import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { BoardCard, Select, Title } from "../components/common";
import { fetchAllTrend } from "../store/trends";

const Dashboard = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => {
    return state.trends.data;
  });

  useEffect(() => {
    if (!data) {
      dispatch(fetchAllTrend());
    }
  }, [dispatch, data]);

  console.log(data);

  if (!data) {
    return (
      <>
        <TitleContainer>
          <Title text="대시보드" />
          <Select name="date" options={[]} />
        </TitleContainer>
        <span>로딩 중...</span>
      </>
    );
  }

  // TODO
  // 차트 렌더링

  return (
    <>
      <TitleContainer>
        <Title text="대시보드" />
        <Select name="date" options={[]} />
      </TitleContainer>
      <BoardCard subTitle="통합 광고 현황"></BoardCard>
    </>
  );
};

export default Dashboard;

const TitleContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
