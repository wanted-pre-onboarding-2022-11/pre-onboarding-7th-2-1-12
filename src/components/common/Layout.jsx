import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return <S.Layout>{children}</S.Layout>;
};

const S = {
  Layout: styled.div`
    display: grid;
    grid-template-columns: 32rem auto;

    width: 100%;
    height: 100vh;
  `,
};

export default Layout;
