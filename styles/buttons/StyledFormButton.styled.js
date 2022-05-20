import { mediaQ } from "../../../styles/global/ThemeConfig";
import { Button } from "react-bootstrap";
import styled from "styled-components";

export const StyledFormButton = styled(Button)`
  background: ${(props) => props.theme.primaryColour};
  text-transform: Uppercase;
  font-size: 14px;
  border-color: transparent;
  display: inline-flex;
  color: white;
  border-radius: 6px;
  width: 100%;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus,
  &:active,
  &:visited {
    background: #f4454b !important;
    border-color: transparent;
    color: white;
    box-shadow: 0 0 0 0.25rem #fb76793d;
  }

  @media ${mediaQ.tablet} {
    width: unset;
    padding: 0 30px;
  }
`;
