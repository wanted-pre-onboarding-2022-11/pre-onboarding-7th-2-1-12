import React from "react";
import styled from "styled-components";
import CustomSelect from "./CustomSelect";

const Filter = () => {
  const option = [
    { value: "roas", name: "ROAS" },
    { value: "cost", name: "광고비" },
    { value: "imp", name: "노출수" },
    { value: "click", name: "클릭수" },
    { value: "conv", name: "전환수" },
    { value: "convValue", name: "매출" },
  ];

  return (
    <FiletBar>
      <CustomSelectContainer>
        <CustomSelect option={option} positon={0}></CustomSelect>
        <CustomSelect option={option} positon={1}></CustomSelect>
      </CustomSelectContainer>
    </FiletBar>
  );
};

const FiletBar = styled.div`
  margin-bottom: 40px;

  > select {
    font-weight: 500;
    font-size: 14px;
    line-height: 16px;
    color: #3a474e;
    background: #ffffff;
    border: 1px solid #d1d8dc;
    border-radius: 10px;
    padding: 12px;
    margin-right: 20px;
  }
`;

const CustomSelectContainer = styled.div`
  display: flex;
  position: relative;
  transition: all 0.3s;
`;

export default Filter;
