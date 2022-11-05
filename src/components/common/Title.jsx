import React from "react";
import styled from "styled-components";

const Title = ({ text = "제목" }) => {
  return <Container>{text}</Container>;
};

export default Title;

const Container = styled.h2`
  margin: 24px 0;
`;
