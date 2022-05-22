import styled from "styled-components";
import { mediaQ } from "../../../styles/global/ThemeConfig";
import Heading from "../../../components/typography/Heading";

export const StyledFilter = styled.div`
  background-color: ${(props) => props.theme.light};

  @media ${mediaQ.tablet} {
    background-color: ${(props) => props.theme.backgroundColour};
  }

  button  {
    color: ${(props) => props.theme.body};
  }

  .filter-tablet {
    @media ${mediaQ.tablet} {
      border-left: solid thin grey;
      padding-left: 3rem;
      padding-right: 3rem;
    }
  }

  .filter-container {
    padding-top: 1.5rem;
  }

  .rating-container {
    input {
      margin-right: 0.8rem;
    }
  }

  button {
    background-color: transparent;
    border-radius: 6px;
    padding: 5px 10px;
    border: 1px solid grey;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    @media ${mediaQ.tablet} {
      /* margin: 20px 15px 10px 15px; */
    }
  }

  .hidden {
    display: none;
  }

  .active {
    background-color: ${(props) => props.theme.primaryColour};
    border: ${(props) => props.theme.primaryColour} thin solid;
    color: white;
  }

  .active:before {
    content: "× ";
  }
`;

export const StyledFilterBtn = styled.div`
  position: relative;
  font-weight: 500;

  svg {
    margin-top: -2px;
  }

  // ordnet en egen fil til denne
  // StyledLine
  .line {
    border: ${(props) => props.theme.primaryColour} 1px solid;
    width: 40px;
    height: 1px;
    position: absolute;
    bottom: 0;
  }
`;

export const StyledFilterWrap = styled.div`
  display: flex;
  margin-top: 3rem;

  .rating-container {
    width: 240px;

    input {
      margin-right: 0.8rem;
    }
  }
`;

export const StayHeading = styled(Heading)`
  @media ${mediaQ.tablet} {
    max-width: 450px;
    font-size: 36px;
    margin-top: 4rem;
  }
`;
