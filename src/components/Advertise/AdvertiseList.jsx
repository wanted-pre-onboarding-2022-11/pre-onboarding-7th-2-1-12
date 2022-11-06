import React from "react";
import styled from "styled-components";
import AdvertiseItem from "./AdvertiseItem";

const AdvertiseList = ({ advertises }) => {
  return (
    <Container>
      {advertises.map((advertise) => (
        <AdvertiseItem key={advertise.id} advertise={advertise} />
      ))}
    </Container>
  );
};

export default AdvertiseList;

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;
