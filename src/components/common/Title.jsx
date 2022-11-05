import React from "react";
import { fontStyle } from "styles/font";
import styled from "styled-components";

const Title = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

const S = {
  Title: styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    width: 100%;
    height: 8rem;
    padding: 0 4rem;

    > span:nth-child(1) {
      ${fontStyle.head_26}
      color: ${({ theme }) => theme.color.grey_800};
    }
  `,
};

export default Title;
