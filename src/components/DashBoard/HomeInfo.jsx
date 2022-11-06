import React from "react";
import styled from "styled-components";
import { formatAmout } from "../../utils/formatAmount";

const HomeInfo = ({ infoData, prevInfoData }) => {
  return (
    <HomeInfoContainer>
      <HomeInfoItem>
        <HomeInfoItemTitle>ROAS</HomeInfoItemTitle>
        <HomeInfoItemContent isPositive={prevInfoData.roas > 0}>
          <span>{infoData.roas}</span>
          <span>{prevInfoData.roas}</span>
        </HomeInfoItemContent>
      </HomeInfoItem>
      <HomeInfoItem>
        <HomeInfoItemTitle>광고비</HomeInfoItemTitle>
        <HomeInfoItemContent isPositive={prevInfoData.cost > 0}>
          <span>{formatAmout(infoData.cost)}</span>
          <span>{formatAmout(prevInfoData.cost)}</span>
        </HomeInfoItemContent>
      </HomeInfoItem>
      <HomeInfoItem>
        <HomeInfoItemTitle>노출 수</HomeInfoItemTitle>
        <HomeInfoItemContent isPositive={prevInfoData.imp > 0}>
          <span>{formatAmout(infoData.imp)}</span>
          <span>{formatAmout(prevInfoData.imp)}</span>
        </HomeInfoItemContent>
      </HomeInfoItem>
      <HomeInfoItem>
        <HomeInfoItemTitle>클릭수</HomeInfoItemTitle>
        <HomeInfoItemContent isPositive={prevInfoData.click > 0}>
          <span>{formatAmout(infoData.click)}</span>
          <span>{formatAmout(prevInfoData.click)}</span>
        </HomeInfoItemContent>
      </HomeInfoItem>
      <HomeInfoItem>
        <HomeInfoItemTitle>전환 수</HomeInfoItemTitle>
        <HomeInfoItemContent isPositive={prevInfoData.conv > 0}>
          <span>{infoData.conv}</span>
          <span>{prevInfoData.conv}</span>
        </HomeInfoItemContent>
      </HomeInfoItem>
      <HomeInfoItem>
        <HomeInfoItemTitle>매출</HomeInfoItemTitle>
        <HomeInfoItemContent isPositive={prevInfoData.convValue > 0}>
          <span>{formatAmout(infoData.convValue)}</span>
          <span>{formatAmout(prevInfoData.convValue)}</span>
        </HomeInfoItemContent>
      </HomeInfoItem>
    </HomeInfoContainer>
  );
};

const HomeInfoContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  margin-bottom: 40px;
`;

const HomeInfoItem = styled.div`
  padding: 18px 40px;
  background: #ffffff;
  border: 0.5px solid #edeff1;
  border-radius: 10px;
`;

const HomeInfoItemTitle = styled.p`
  font-size: 12px;
  line-height: 14px;
  color: #94a2ad;
`;

const HomeInfoItemContent = styled.div`
  display: flex;
  justify-content: space-between;

  > span:first-child {
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #3a474e;
  }

  > span:last-child {
    position: relative;
    font-size: 12px;
    line-height: 14px;
    text-align: right;
    color: #94a2ad;

    &::before {
      position: absolute;
      content: "";
      border-bottom: 7px solid ${(props) => (props.isPositive ? "#EA3A4B" : "transparent")};
      border-top: 7px solid ${(props) => (props.isPositive ? "transparent" : "#85DA47")};
      border-left: 7px solid transparent;
      border-right: 7px solid transparent;
      top: ${(props) => (props.isPositive ? "-3px" : "3px")};
      left: -20px;
    }
  }
`;

export default HomeInfo;
