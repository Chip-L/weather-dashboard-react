import React from "react";
import styled from "styled-components";

const Header = styled.header`
  text-align: center;
  max-width: 100%;

  padding: 0.5rem 0.75rem;
  background: linear-gradient(to right, blue, navy);
  color: azure;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

function header() {
  return (
    <Header>
      <Title>Weather Dashboard</Title>
    </Header>
  );
}

export default header;
