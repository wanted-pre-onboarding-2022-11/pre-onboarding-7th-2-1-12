import React from "react";
import styled from "styled-components";
import { useAdIdSelector } from "../../features/advertisements/advertisementsSlice";

const AdCardEdited = ({ isEdited, targetId, submitEditAd }) => {
  const {
    status,
    budget,
    startDate,

    report: { cost, convValue, roas },
  } = useAdIdSelector(targetId);

  return (
    <S.CarEdited isEdited={isEdited}>
      <form onSubmit={submitEditAd}>
        <S.InfoContainer>
          <p>상태</p>
          <input name="status" defaultValue={status} />
        </S.InfoContainer>
        <S.InfoContainer>
          <p>광고 생성일 </p>
          <input name="startDate" defaultValue={startDate} />
        </S.InfoContainer>
        <S.InfoContainer>
          <p>일 희망 예산</p>
          <input name="budget" defaultValue={budget} />
        </S.InfoContainer>
        <S.InfoContainer>
          <p>광고 수익률</p>
          <input name="roas" defaultValue={roas} />
        </S.InfoContainer>
        <S.InfoContainer>
          <p>매출</p>
          <input name="convValue" defaultValue={convValue} />
        </S.InfoContainer>
        <S.InfoContainer>
          <p>광고 비용</p>
          <input name="cost" defaultValue={cost} />
        </S.InfoContainer>
        <S.EditButton type="submit">완료하기</S.EditButton>
      </form>
    </S.CarEdited>
  );
};

const S = {
  InfoContainer: styled.span`
    min-width: 20rem;
    padding: 1.3rem 0;
    display: flex;
    border-bottom: 1px solid #edeff1;
    border-top: 1px solid #edeff1;
    font-weight: 700;
    font-size: 1.2rem;

    p {
      color: #94a2ad;
      min-width: 10rem;
    }
    strong {
      color: #3a474e;
    }
  `,
  EditButton: styled.button`
    text-align: center;
    width: 92px;
    height: 40px;
    background: #ffffff;
    border: 1px solid #d1d8dc;
    border-radius: 10px;
    font-weight: 700;
    font-size: 1.4rem;
    color: #3a474e;
  `,

  CardView: styled.div`
    display: ${(props) => (props.isEdited ? "none" : null)};
    padding: 3rem 0;
  `,
  CarEdited: styled.div`
    display: ${(props) => (props.isEdited ? null : "none")};
    padding: 3rem 0;
  `,
};

export default AdCardEdited;
