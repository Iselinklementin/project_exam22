import { mediaQ } from "../global/ThemeConfig";
import styled from "styled-components";

export const StyledBasicButton = styled.a`
  background: ${(props) => props.theme.primaryColour};
  text-transform: Uppercase;
  font-size: 14px;
  border-color: transparent;
  display: inline-flex;
  color: white;
  border-radius: 6px;

  @media ${mediaQ.desktop_large} {
    font-size: 16px;
  }

  &:hover,
  &:focus {
    background: ${(props) => props.theme.secondaryColour};
    border-color: transparent;
    color: white;
  }
`;
