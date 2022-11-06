import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { activeStatusMap, formatDateTime } from "../../utils";

const EditModal = ({ advertise, onClose }) => {
  const { id, endDate, startDate, status, title } = advertise;
  const dispatch = useDispatch();
  const [budget, setBudget] = useState(advertise.budget);
  const [roas, setRoas] = useState(advertise.report.roas);
  const [convValue, setConvValue] = useState(advertise.report.convValue);
  const [cost, setCost] = useState(advertise.report.cost);

  const handleEdit = () => {
    // 디스패치
    // onClose();
    const edittedAdvertise = { ...advertise, budget, report: { roas, convValue, cost } };
    console.log(edittedAdvertise);
  };

  return (
    <Overlay>
      <Wrapper>
        <Content>
          <div>
            <div>상태</div>
            <div>{activeStatusMap[status]}</div>
          </div>
          <div>
            <div>광고 생성 일</div>
            <div>{formatDateTime(startDate)}</div>
          </div>
          <div>
            <div>일 희망 예산</div>
            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <div>광고 수익 률</div>
            <input
              type="number"
              value={roas}
              onChange={(e) => setRoas(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <div>매출</div>
            <input
              type="number"
              value={convValue}
              onChange={(e) => setConvValue(parseInt(e.target.value, 10))}
            />
          </div>
          <div>
            <div>광고 비용</div>
            <input
              type="number"
              value={cost}
              onChange={(e) => setCost(parseInt(e.target.value, 10))}
            />
          </div>
          <button onClick={onClose}>취소</button>
          <button onClick={handleEdit}>확인</button>
        </Content>
      </Wrapper>
    </Overlay>
  );
};

export default EditModal;

const Overlay = styled.div`
  position: fixed;
  z-index: 30;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  width: 320px;
  background: white;
  padding: 1.5rem;
  border-radius: 4px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.125);
`;

const Content = styled.div`
  padding: 8px 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
