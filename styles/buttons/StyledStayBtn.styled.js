import React from "react";
import styled from "styled-components";
import { StyledBasicButton } from "./StyledBasicButton.styled";

export const StyledStayBtn = styled(StyledBasicButton)`
  background: ${(props) => props.theme.secondaryColour};
  padding: 6px 10px;
  letter-spacing: 0.8px;
  font-weight: 500;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
    box-shadow 0.15s ease-in-out;

  &:hover {
    background: #462670;
    background: ${(props) => props.theme.primaryColour};
  }
`;
