import React from "react";
import { Container, Spinner } from "react-bootstrap";
import styled from "styled-components";

const StyledLoaderContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;

  .spinner-grow {
    position: absolute;
    top: 40%;
    height: 2.5rem;
    width: 2.5rem;
    background-color: ${(props) => props.theme.primaryColour};
    animation: 1.4s linear infinite spinner-grow;
  }
`;

function Loader() {
  return (
    <StyledLoaderContainer>
      <Spinner animation="grow" variant="dark" />
      {/* <span className="visually-hidden">Loading...</span>
      </Spinner> */}
    </StyledLoaderContainer>
  );
}

export default Loader;
