import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getList } from "app/module/managementSlice";

import Layout from "components/common/Layout";
import Nav from "components/common/Nav";
import Main from "components/common/Main";
import Header from "components/common/Header";
import Title from "components/common/Title";
import AdCard from "components/feature/management/AdCard";
import ManageDropdown from "components/feature/management/ManageDropdown";

import styled from "styled-components";

const Management = () => {
  const dispatch = useDispatch();
  const { select, data } = useSelector((state) => state.management);

  useEffect(() => {
    dispatch(getList(select));
  }, [dispatch, select]);

  return (
    <Layout>
      <Nav />

      <Main>
        <Header />

        <Title>
          <span>광고관리</span>
        </Title>

        <S.Container>
          <ManageDropdown select={select} />

          <S.CardContainer>
            {data.map((item) => (
              <AdCard key={item.id} item={item} />
            ))}
          </S.CardContainer>
        </S.Container>
      </Main>
    </Layout>
  );
};

const S = {
  Container: styled.div`
    padding: 4rem;
    margin: 3rem 4rem 4rem 4rem;
    background-color: ${({ theme }) => theme.color.white};
    border-radius: 2rem;

    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
  `,

  CardContainer: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;

    margin-top: 4rem;
  `,
};

export default Management;
