import React from "react";
import styled from "styled-components";
import AdList from "./AdList";
import SubHeader from "./SubHeader";
const options = ["전체 광고", "진행중 광고", "중단된 광고"];

const AdContents = () => {
  return (
    <>
      <S.AdContents>
        <SubHeader options={options} />
        <AdList />
      </S.AdContents>
    </>
  );
};

export default AdContents;

const S = {
  AdContents: styled.div`
    padding: 2.5rem 4rem;

    background: #ffffff;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    border-radius: 20px;
  `,
};
