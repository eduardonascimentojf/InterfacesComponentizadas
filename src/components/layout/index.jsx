import React from "react";
import Header from "../header/index";
import styled from "styled-components";

const StyledLayout = styled.section`
  margin: 16px;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <Header />
      {children}
    </StyledLayout>
  );
};

export default Layout;
