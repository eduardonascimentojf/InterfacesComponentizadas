import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 16px;
  display: flex;
  justify-content: center;

  h1 {
    font-weight: bold;
    font-size: 32px;
  }
`;

export default function NoSearch(props) {
  return (
    <Wrapper>
      <h1>Nenhum usuario pesquisado</h1>
    </Wrapper>
  );
};
