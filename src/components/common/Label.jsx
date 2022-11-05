import React from "react";
import styled from "styled-components";

// interface LabelProps {
//   label: string;
//   name: string;
// }

const Label = ({ name, label }) => {
  return (
    <Container name={name}>
      <Text>{label}</Text>
    </Container>
  );
};

export default Label;

const Container = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
`;

const Text = styled.span`
  margin-left: 4px;
  color: gray;
`;
