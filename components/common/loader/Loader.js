import React from "react";
import { Container, Spinner } from "react-bootstrap";
import styled from "styled-components";

const StyledLoaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
`;

function Loader() {
  return (
    <StyledLoaderContainer>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </StyledLoaderContainer>
  );
}

export default Loader;
