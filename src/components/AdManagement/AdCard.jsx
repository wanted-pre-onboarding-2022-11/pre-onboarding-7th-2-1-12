import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editById, useAdIdSelector } from "../../features/advertisements/advertisementsSlice";
import { formatAmout } from "../../utils/formatAmount";

const handleTitlePrefix = ({ adType, title }) => {
  if (adType === "web") return `웹광고_${title}`;
  else if (adType === "app") return `앱광고_${title}`;
};

const dateFomatter = (data) => {
  return data.split("T")[0];
};

const AdCard = ({ id: targetId }) => {
  const [isEdited, setIsEdited] = useState(false);
  const dispath = useDispatch();
  const {
    id,
    adType,
    title,
    status,
    budget,
    startDate,
    endDate,
    report: { cost, convValue, roas },
  } = useAdIdSelector(targetId);

  const submitEditAd = (event) => {
    event.preventDefault();

    const submitValues = {};

    const inputs = event.target.elements;
    for (let i = 0; i < 6; i++) {
      submitValues[inputs[i].name] = inputs[i].value;
    }
    dispath(editById({ targetId, submitValues }));
    setIsEdited((prev) => !prev);
  };

  const handleEdit = () => {
    setIsEdited((prev) => !prev);
  };
  return (
    <S.CardContainer key={id}>
      <h5>{handleTitlePrefix({ adType, title })}</h5>
      <S.CardView isEdited={isEdited}>
        <S.InfoContainer>
          <p>상태</p>
          <strong>{status}</strong>
        </S.InfoContainer>
        <S.InfoContainer>
          <p>광고 생성일 </p>
          <strong>{dateFomatter(startDate)}</strong>
          {status === "ended" ? <p> ~ ({dateFomatter(endDate)})</p> : null}
        </S.InfoContainer>
        <S.InfoContainer>
          <p>일 희망 예산</p>
          <strong>{formatAmout(budget)}</strong>
        </S.InfoContainer>
        <S.InfoContainer>
          <p>광고 수익률</p>
          <strong>{roas}%</strong>
        </S.InfoContainer>
        <S.InfoContainer>
          <p>매출</p>
          <strong>{formatAmout(convValue)}</strong>
        </S.InfoContainer>
        <S.InfoContainer>
          <p>광고 비용</p>
          <strong>{cost}</strong>
        </S.InfoContainer>
      </S.CardView>
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
      {isEdited ? null : <S.EditButton onClick={handleEdit}>수정하기</S.EditButton>}
    </S.CardContainer>
  );
};

const S = {
  CardContainer: styled.div`
    max-width: 305px;
    min-width: 305px;
    height: 420px;
    padding: 4rem 2rem 2rem 2rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    background: #ffffff;
    border: 1px solid #586cf5;
    border-radius: 10px;

    h5 {
      font-weight: 700;
      font-size: 1.6rem;
      line-height: 19px;
      margin-bottom: 2rem;
    }
  `,
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
  `,
  CarEdited: styled.div`
    display: ${(props) => (props.isEdited ? null : "none")};
  `,
};

export default AdCard;
