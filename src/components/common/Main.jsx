import React from "react";
import styled from "styled-components";

const Main = ({ children }) => {
  return <S.Main>{children}</S.Main>;
};

const S = {
  Main: styled.div`
    min-width: 112rem;
    width: 100%;
    background-color: ${({ theme }) => theme.color.bg_g};
  `,
};

export default Main;
