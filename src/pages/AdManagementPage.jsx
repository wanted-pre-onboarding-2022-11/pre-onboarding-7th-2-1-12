import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import AdCard from "../components/AdManagement/AdCard";
import AdContents from "../components/AdManagement/AdContents";
import { setAds, useAdSelector } from "../features/advertisements/advertisementsSlice";
import { filter } from "../features/advertisements/advertisementsThunk";
import { useFilterStateSelector } from "../features/advertisements/filterStateSlice";

const AdManagementPage = () => {
  const filterState = useFilterStateSelector();
  const dispath = useDispatch();
  useEffect(() => {
    const fetchData = async () => {
      const { payload } = await dispath(filter());
      dispath(setAds(payload));
    };
    fetchData();
  }, [dispath, filterState]);

  return (
    <S.AdSection>
      <h3>광고관리</h3>
      <AdContents />
    </S.AdSection>
  );
};

const S = {
  AdSection: styled.section`
    padding: 2.5rem 4rem 2.5rem 4rem;
    width: 100vw;
    height: 100vh;
    background: #f6f7f8;
    h3 {
      padding: 2.5rem 1rem;
      font-weight: 900;
      font-size: 2.6rem;
    }
  `,
};
export default AdManagementPage;
