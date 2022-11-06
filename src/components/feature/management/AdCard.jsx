import React from "react";
import { fontStyle } from "styles/font";
import styled from "styled-components";

const AdCard = ({ item }) => {
  return (
    <S.Container>
      <S.Title>
        {item.adType}_{item.title}
      </S.Title>

      <S.Content>
        <span>상태</span>
        <span>{item.status}</span>
      </S.Content>

      <S.Content>
        <span>광고 생성일</span>
        <span>{item.startDate}</span>
      </S.Content>

      <S.Content>
        <span>일 희망 예산</span>
        <span>{item.budget}원</span>
      </S.Content>

      <S.Content>
        <span>광고 수익률</span>
        <span>{item.report.roas}%</span>
      </S.Content>

      <S.Content>
        <span>매출</span>
        <span>{item.report.convValue}원</span>
      </S.Content>

      <S.Content>
        <span>광고 비용</span>
        <span>{item.report.cost}원</span>
      </S.Content>

      <S.Button>수정하기</S.Button>
    </S.Container>
  );
};

const S = {
  Container: styled.div`
    padding: 4rem 2rem 2rem 2rem;

    border: 1px solid ${({ theme }) => theme.color.grey_100};
    border-radius: 1rem;
  `,

  Title: styled.div`
    padding-bottom: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey_50};

    ${fontStyle.head_16}
  `,

  Content: styled.div`
    display: grid;
    grid-template-columns: 10rem auto;
    align-items: center;

    height: 4rem;
    border-bottom: 1px solid ${({ theme }) => theme.color.grey_50};

    > span:nth-child(1) {
      ${fontStyle.body_12}
      color: ${({ theme }) => theme.color.grey_300};
    }

    > span:nth-child(2) {
      ${fontStyle.body_12_bold}
      color: ${({ theme }) => theme.color.grey_800};
    }
  `,

  Button: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    width: 9.2rem;
    height: 4rem;
    margin-top: 2rem;

    border: 1px solid ${({ theme }) => theme.color.grey_100};
    border-radius: 1rem;

    ${fontStyle.body_14_bold}
  `,
};

export default AdCard;
