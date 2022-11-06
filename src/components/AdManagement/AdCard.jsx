import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { editById, useAdIdSelector } from "../../features/advertisements/advertisementsSlice";
import AdCardEdited from "./AdCardEdited";
import AdCardView from "./AdCardView";

const handleTitlePrefix = ({ adType, title }) => {
  if (adType === "web") return `웹광고_${title}`;
  else if (adType === "app") return `앱광고_${title}`;
};

const AdCard = ({ id: targetId }) => {
  const dispath = useDispatch();
  const [isEdited, setIsEdited] = useState(false);
  const { id, adType, title } = useAdIdSelector(targetId);

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
      <AdCardView targetId={targetId} isEdited={isEdited} />
      <AdCardEdited targetId={targetId} isEdited={isEdited} submitEditAd={submitEditAd} />
      {isEdited ? null : <S.EditButton onClick={handleEdit}>수정하기</S.EditButton>}
    </S.CardContainer>
  );
};

const S = {
  CardContainer: styled.div`
    max-width: 305px;
    min-width: 305px;
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
};

export default AdCard;
