import styled from "styled-components";
import { mediaQ } from "../../../styles/global/ThemeConfig";

export const StyledIconFormContainer = styled.div`
  margin-right: 0.5rem;
  font-size: 18px;
  width: 35px;
  display: block;
  text-align: center;

  @media ${mediaQ.desktop_large} {
    font-size: 20px;
  }

  svg {
    margin: auto;
  }
`;
