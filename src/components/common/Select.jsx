import React from "react";
import styled from "styled-components";
import { Label } from ".";

// interface Option {
//   value: String;
//   text: String;
// }

// interface SelectProps {
//   label?: String;
//   name: String;
//   options: Option[]
// }

const Select = ({ label, name, options }) => {
  return (
    <Container>
      {label && <Label name={name} label={label} />}
      <select name={name}>
        {options.map(({ value, text }) => (
          <option key={value} value={value}>
            {text}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default Select;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
