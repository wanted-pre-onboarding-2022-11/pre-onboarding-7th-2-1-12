import React from "react";
import styled from "styled-components";
import { useAdIdSelector } from "../../features/advertisements/advertisementsSlice";
import { formatAmout } from "../../utils/formatAmount";

const dateFomatter = (data) => {
  return data.split("T")[0];
};

const AdCardView = ({ targetId, isEdited }) => {
  const {
    status,
    budget,
    startDate,
    endDate,
    report: { cost, convValue, roas },
  } = useAdIdSelector(targetId);

  return (
    <S.CardView isEdited={isEdited}>
      <S.InfoContainer>
        <p>상태</p>
        <strong>{status}</strong>
      </S.InfoContainer>
      <S.InfoContainer>
        <p>광고 생성일 </p>
        <strong>{dateFomatter(startDate)}</strong>
        {status === "ended" ? <p> ~ ({dateFomatter(endDate)})</p> : null}
      </S.InfoContainer>
      <S.InfoContainer>
        <p>일 희망 예산</p>
        <strong>{formatAmout(budget)}</strong>
      </S.InfoContainer>
      <S.InfoContainer>
        <p>광고 수익률</p>
        <strong>{roas}%</strong>
      </S.InfoContainer>
      <S.InfoContainer>
        <p>매출</p>
        <strong>{formatAmout(convValue)}</strong>
      </S.InfoContainer>
      <S.InfoContainer>
        <p>광고 비용</p>
        <strong>{cost}</strong>
      </S.InfoContainer>
    </S.CardView>
  );
};

const S = {
  InfoContainer: styled.span`
    min-width: 20rem;
    padding: 1.3rem 0;
    display: flex;
    border-bottom: 1px solid #edeff1;
    border-top: 1px solid #edeff1;
    font-weight: 700;
    font-size: 1.2rem;

    p {
      color: #94a2ad;
      min-width: 10rem;
    }
    strong {
      color: #3a474e;
    }
  `,

  CardView: styled.div`
    display: ${(props) => (props.isEdited ? "none" : null)};
    padding: 2rem 0;
  `,
  CarEdited: styled.div`
    display: ${(props) => (props.isEdited ? null : "none")};
  `,
};
export default AdCardView;
