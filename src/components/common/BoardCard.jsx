import React from "react";
import styled from "styled-components";

// interface BoardCardProps {
//   subTitle?: String;
// }

const BoardCard = ({ subTitle, children }) => {
  return (
    <>
      {subTitle && <SubTitle>{subTitle}</SubTitle>}
      <Container>{children}</Container>
    </>
  );
};

export default BoardCard;

const Container = styled.section`
  background-color: white;
  box-sizing: border-box;
  padding: 24px;
  overflow: hidden;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const SubTitle = styled.h3`
  margin-bottom: 8px;
  font-size: 16px;
`;
