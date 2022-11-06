import React, { useState } from "react";
import styled from "styled-components";
import { COLOR_PALETTE } from "../../styles";
import { activeStatusMap, formatMoney, formatDateTime, formatDateToNumber } from "../../utils";
import EditModal from "./EditModal";

/*
interface Advertise {
  id: number;
  adType: string;
  budget: number;
  endDate: null | Date;
  report: {
    cost: number;
    convValue: number;
    roas: number;
  }
  startDate: Date;
  status: "active" | "ended"
  title: string;
}
*/

const AdvertiseItem = ({ advertise }) => {
  const { id, budget, report, startDate, status, title } = advertise;
  const [editMode, setEditMode] = useState(false);
  const handleCloseModal = () => setEditMode(false);

  return (
    <Container>
      <Title>
        {title}_{formatDateToNumber(startDate)}
      </Title>
      {editMode ? (
        <EditModal advertise={advertise} onClose={handleCloseModal} />
      ) : (
        <Information>
          <div>상태 : {activeStatusMap[status]}</div>
          <div>광고 생성 일: {formatDateTime(startDate)}</div>
          <div>일 희망 예산 : {formatMoney(budget)}</div>
          <div>광고 수익 률 : {report.roas}%</div>
          <div>매출 : {formatMoney(report.convValue)}</div>
          <div>광고 비용 : {formatMoney(report.cost)}</div>
          <button onClick={() => setEditMode(true)}>수정하기</button>
        </Information>
      )}
    </Container>
  );
};

export default AdvertiseItem;

const Container = styled.div`
  border: 1px solid ${COLOR_PALETTE.GRAY};
  border-radius: 8px;
  padding: 0 16px 16px;
`;

const Title = styled.h4`
  padding: 24px 0;
  border-bottom: 0.5px solid ${COLOR_PALETTE.GRAY};
`;

const Information = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
