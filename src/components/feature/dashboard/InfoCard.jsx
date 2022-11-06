import React from "react";
import { fontStyle } from "styles/font";
import styled from "styled-components";

const InfoCard = ({ data, prevData }) => {
  const roas = data.reduce((a, b) => a + b.roas, 0) / data.length;
  const prevRoas = prevData.reduce((a, b) => a + b.roas, 0) / prevData.length;

  const cost = data.reduce((a, b) => a + b.cost, 0);
  const prevCost = prevData.reduce((a, b) => a + b.cost, 0);

  const imp = data.reduce((a, b) => a + b.imp, 0);
  const prevImp = prevData.reduce((a, b) => a + b.imp, 0);

  const click = data.reduce((a, b) => a + b.click, 0);
  const prevClick = prevData.reduce((a, b) => a + b.click, 0);

  const conv = data.reduce((a, b) => a + b.conv, 0);
  const prevConv = prevData.reduce((a, b) => a + b.conv, 0);

  const convValue = data.reduce((a, b) => a + b.convValue, 0);
  const prevConvValue = prevData.reduce((a, b) => a + b.convValue, 0);

  return (
    <S.Container>
      <S.Card>
        <h3>ROAS</h3>
        <span>{roas || 0}%</span>
        <span>{roas - prevRoas || 0}%</span>
      </S.Card>

      <S.Card>
        <h3>광고비</h3>
        <span>{cost}원</span>
        <span>{cost - prevCost}원</span>
      </S.Card>

      <S.Card>
        <h3>노출 수</h3>
        <span>{imp}회</span>
        <span>{imp - prevImp}회</span>
      </S.Card>

      <S.Card>
        <h3>클릭수</h3>
        <span>{click}회</span>
        <span>{click - prevClick}회</span>
      </S.Card>

      <S.Card>
        <h3>전환 수</h3>
        <span>{conv}회</span>
        <span>{conv - prevConv}회</span>
      </S.Card>

      <S.Card>
        <h3>매출</h3>
        <span>{convValue}원</span>
        <span>{convValue - prevConvValue}원</span>
      </S.Card>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
  `,

  Card: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2.5rem auto;

    padding: 1.8rem 4rem;

    border: 0.5px solid ${({ theme }) => theme.color.grey_50};
    border-radius: 1rem;

    h3 {
      grid-column: 1 / 3;

      ${fontStyle.body_12}
      color: ${({ theme }) => theme.color.grey_300};
    }

    > span:nth-child(2) {
      ${fontStyle.head_16}
    }

    > span:nth-child(3) {
      ${fontStyle.body_12}
      text-align: right;
      color: ${({ theme }) => theme.color.grey_300};
    }
  `,
};

export default InfoCard;
