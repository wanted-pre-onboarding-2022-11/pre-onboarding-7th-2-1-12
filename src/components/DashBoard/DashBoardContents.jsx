import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import useInitailData from "../../hooks/useInitailData";
import Chart from "./Chart";
import HomeInfo from "./HomeInfo";
import Filter from "./FIlter";

const DashBoardContents = () => {
  const trendData = useSelector((state) => state.trendDataReducer);
  useInitailData();

  if (trendData.isLoading) return <div>로딩중</div>;

  return (
    <>
      <HomeTitle>통합 광고 현황</HomeTitle>
      <HomeContainer>
        <HomeInfo infoData={trendData.infoData} prevInfoData={trendData.prevInfoData} />
        <Filter />
        <Chart date={trendData.date} chartData={trendData.chartData} />
      </HomeContainer>
    </>
  );
};

const HomeContainer = styled.div`
  background: #fff;
  padding: 40px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  border-radius: 20px;
`;

const HomeTitle = styled.div`
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #3a474e;
  margin-bottom: 20px;
`;

export default DashBoardContents;
