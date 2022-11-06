import { useEffect } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useAdSelector } from "../../features/advertisements/advertisementsSlice";
import { filter } from "../../features/advertisements/advertisementsThunk";
import { useFilterStateSelector } from "../../features/advertisements/filterStateSlice";
import AdCard from "./AdCard";

const AdList = () => {
  const { data } = useAdSelector();
  const { value: filterState } = useFilterStateSelector();
  const dispath = useDispatch();

  useEffect(() => {
    dispath(filter());
  }, [dispath, filterState]);
  return <S.AdList>{data ? data.map(({ id }) => <AdCard key={id} id={id} />) : null}</S.AdList>;
};

const S = {
  AdList: styled.div`
    display: grid;
    grid-gap: 2rem;
    grid-template-columns: 1fr 1fr 1fr;
  `,
};

export default AdList;
