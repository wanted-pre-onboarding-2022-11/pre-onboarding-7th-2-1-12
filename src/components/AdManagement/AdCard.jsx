import React from "react";
import styled from "styled-components";
import { useAdIdSelector } from "../../features/advertisements/advertisementsSlice";

const handleTitlePrefix = ({ adType, title }) => {
  if (adType === "web") return `웹광고_${title}`;
  else if (adType === "app") return `앱광고_${title}`;
};
const AdCard = ({ id: targetId }) => {
  const {
    id,
    adType,
    title,
    status,
    budget,
    startDate,
    report: { cost, convValue, roas },
  } = useAdIdSelector(targetId);

  return (
    <S.CardContainer key={id}>
      <h5>{handleTitlePrefix({ adType, title })}</h5>
      <div>
        <span>
          <p>상태</p>
          <strong>{status}</strong>
        </span>
        <span>
          <p>광고 생성일</p>
          <strong>{startDate}</strong>
        </span>
        <span>
          <p>일 희망 예산</p>
          <strong>{budget}만원</strong>
        </span>
        <span>
          <p>광고 수익률</p>
          <strong>{roas}%</strong>
        </span>
        <span>
          <p>매출</p>
          <strong>{convValue}</strong>
        </span>
        <span>
          <p>광고 비용</p>
          <strong>{cost}</strong>
        </span>
      </div>
    </S.CardContainer>
  );
};

const S = {
  CardContainer: styled.div`
    min-width: 305px;
    padding: 4rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    max-width: 305px;
    height: 420px;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #586cf5;
    border-radius: 10px;

    h5 {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 19px;
      margin-bottom: 2rem;
    }
    span {
      padding: 1.3rem;
      display: flex;
      justify-content: space-between;
      padding-right: 6rem;
      border-bottom: 1px solid #edeff1;
      border-top: 1px solid #edeff1;
    }

    p {
      color: #94a2ad;
    }
    strong {
      color: #3a474e;
    }
  `,
};

export default AdCard;
