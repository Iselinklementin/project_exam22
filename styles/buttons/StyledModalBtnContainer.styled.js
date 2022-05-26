import styled from "styled-components";
import { StyledFormButton } from "./StyledFormButton.styled";

export const StyledModalBtnContainer = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

export const StyledCancel = styled(StyledFormButton)`
  background: transparent;
  color: ${(props) => props.theme.body};

  &:hover,
  &:focus,
  &:active {
    border-color: transparent;
    color: ${(props) => props.theme.body};
    box-shadow: none;
    background: #f5f5f5 !important;
  }
`;
