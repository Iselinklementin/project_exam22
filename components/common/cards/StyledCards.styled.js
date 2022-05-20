import styled from "styled-components";
import { Card } from "react-bootstrap";
import { mediaQ } from "../../../styles/global/ThemeConfig";

export const StyledCard = styled(Card)`
  border: none;
  cursor: pointer;
  height: 100%;

  /* min-height: 400px; */

  :hover {
    box-shadow: 0 3px 5px rgb(0 0 0 / 10%);

    .card-body {
      background-color: #472673;
    }
  }

  @media ${mediaQ.tablet} {
  }

  .card-title {
    font-family: ${(props) => props.theme.secondaryFont};
    font-weight: 600;
  }

  .card-body {
    padding: 20px;
    background: ${(props) => props.theme.secondaryColour};
    background: #26153d;
    color: ${(props) => props.theme.light};
    border-radius: 0px 0px 8px 8px;
    font-size: 14px;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;
    /* height: 180px; */
  }

  .card-img {
    border-radius: 8px 8px 0px 0px;
  }
  /* 
  .keywords {
    font-size: 12px;
  } */

  .card-text {
  }

  .badge {
    position: absolute;
    right: 15px;
    top: 15px;
    z-index: 1;
    display: flex;
    align-items: center;
  }

  .rating-container {
    //
  }
`;
