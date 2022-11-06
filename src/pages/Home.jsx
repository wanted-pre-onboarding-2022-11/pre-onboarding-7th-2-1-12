import React from "react";
import styled from "styled-components";
import { getFilterData } from "../redux/trendDataSlice";
import { useSelector, useDispatch } from "react-redux";
import useInitailData from "../hooks/useInitailData";
import Chart from "../components/Chart";

const Home = () => {
  const dispatch = useDispatch();
  const { trendData } = useSelector((state) => state);
  useInitailData();

  if (trendData.isLoading) return <div>로딩중</div>;

  return (
    <>
      <HomeTitle>통합 광고 현황</HomeTitle>
      <HomeContainer>
        <HomeInfo></HomeInfo>
        <button
          onClick={() => {
            dispatch(getFilterData({ orderBy: ["imp", trendData.orderBy[1]] }));
          }}
        >
          첫 번째
        </button>
        <button
          onClick={() => {
            dispatch(getFilterData({ orderBy: [trendData.orderBy[0], "cost"] }));
          }}
        >
          두 번째
        </button>
        <button
          onClick={() => {
            dispatch(getFilterData({ orderBy: [trendData.orderBy[0], null] }));
          }}
        >
          두 번째 삭제
        </button>

        {!trendData.isLoading && (
          <Chart date={trendData.date} filterdData={trendData.filterdData} />
        )}
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

const HomeInfo = styled.div``;

const HomeInfoItem = styled.div``;

export default Home;
