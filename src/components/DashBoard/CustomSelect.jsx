import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { getFilterData, useTrendDataSelector } from "../../features/trend/trendDataSlice";

const CustomSelect = ({ option, positon }) => {
  const dispatch = useDispatch();
  const trendData = useTrendDataSelector();

  const [isVisivle, setIsVisivle] = useState(false);

  const handleVisivle = () => {
    setIsVisivle(!isVisivle);
  };

  const handleFilerData = (target) => {
    switch (positon) {
      case 0:
        dispatch(getFilterData({ orderBy: [target, trendData.orderBy[1]] }));
        break;
      case 1:
        dispatch(getFilterData({ orderBy: [trendData.orderBy[0], target] }));
        break;
      default:
    }
  };

  return (
    <>
      <CustomSelectContainer onClick={handleVisivle} positon={positon}>
        <div />
        <div>{trendData.orderBy[positon]}</div>
        <div />
        <CustomOptions isVisivle={isVisivle}>
          {option.map((e) =>
            trendData.orderBy[positon === 0 ? 1 : 0] === e.value ||
            trendData.orderBy[positon] === e.value ? (
              ""
            ) : (
              <div key={e.value} onClick={() => handleFilerData(e.value)}>
                {e.name}
              </div>
            ),
          )}
        </CustomOptions>
      </CustomSelectContainer>
    </>
  );
};

const CustomSelectContainer = styled.div`
  width: 123px;
  height: 40px;
  background: #ffffff;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #3a474e;
  padding: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-right: 10px;
  cursor: pointer;

  > div:first-child {
    position: absolute;
    left: 12px;
    width: 10px;
    height: 10px;
    border-radius: 10px;
    background: rgb(65, 105, 225);
    background: ${(props) => (props.positon === 0 ? "tomato" : "royalblue")};
  }

  > div:nth-child(3) {
    position: absolute;
    top: 14px;
    right: 12px;
    border-bottom: 7px solid transparent;
    border-top: 7px solid #3a474e;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
  }
`;

const CustomOptions = styled.div`
  display: ${(props) => (props.isVisivle ? "block" : "none")};
  width: 123px;
  background: #fff;
  border: 1px solid #d1d8dc;
  border-radius: 10px;
  position: absolute;
  top: 45px;
  left: 0;
  border-radius: 10px;

  > div {
    cursor: pointer;
    padding: 12px;
    font-size: 12px;

    &:hover {
      background: #eee;
    }
  }
`;

export default CustomSelect;
