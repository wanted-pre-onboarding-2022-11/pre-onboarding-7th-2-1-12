import styled from "styled-components";
import { useAdSelector } from "../../features/advertisements/advertisementsSlice";
import AdCard from "./AdCard";

const AdList = () => {
  const { data } = useAdSelector();
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
