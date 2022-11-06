import React from "react";
import { useSelector } from "react-redux";

import Layout from "components/common/Layout";
import Nav from "components/common/Nav";
import Main from "components/common/Main";
import Header from "components/common/Header";
import Title from "components/common/Title";
import Datepicker from "components/common/Datepicker";
import InfoCard from "components/feature/dashboard/InfoCard";
import Chart from "components/feature/dashboard/Chart";

import { dashboardArr } from "utils/arr";

import styled from "styled-components";
import { fontStyle } from "styles/font";
import BoardDropdown from "components/feature/dashboard/BoardDropdown";

const Dashboard = () => {
  const {
    category: { option1, option2 },
    select: { data, prevData },
  } = useSelector((state) => state.trend);

  return (
    <Layout>
      <Nav />

      <Main>
        <Header />

        <Title>
          <span>대시보드</span>
          <span>
            <Datepicker />
          </span>
        </Title>

        <S.SubTitle>통합 광고 현황</S.SubTitle>

        <S.Content>
          <InfoCard data={data} prevData={prevData} />

          <S.Dropdown>
            <BoardDropdown
              arr={dashboardArr.filter((item) => item !== option2)}
              select={option1}
              number={1}
              color={"#4FADF7"}
            />

            {option1.menu !== "선택" && (
              <BoardDropdown
                arr={dashboardArr.filter((item) => item !== option1)}
                select={option2}
                number={2}
                color={"#85DA47"}
              />
            )}
          </S.Dropdown>

          <Chart data={data} status1={option1.status} status2={option2.status} />
        </S.Content>
      </Main>
    </Layout>
  );
};

const S = {
  Content: styled.div`
    padding: 4rem;
    margin: 2rem 4rem 4rem 4rem;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 2rem;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  `,

  SubTitle: styled.div`
    margin: 4rem 0 0 4rem;

    ${fontStyle.head_16}
    color: ${({ theme }) => theme.color.grey_800};
  `,

  Dropdown: styled.div`
    display: flex;
    gap: 1rem;

    margin-top: 4rem;
  `,
};

export default Dashboard;
