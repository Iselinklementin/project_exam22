import styled from "styled-components";
import { mediaQ } from "../../../styles/global/ThemeConfig";
import Heading from "../../../components/typography/Heading";

export const StyledFilter = styled.div`
  background-color: ${(props) => props.theme.light};

  @media ${mediaQ.tablet} {
    background-color: ${(props) => props.theme.backgroundColour};
  }

  h1 {
    border: red solid thin;
  }

  #input-container {
    #label-filter {
      margin-left: 0;
    }
  }

  button  {
    color: ${(props) => props.theme.body};
  }

  .filter-tablet {
    @media ${mediaQ.tablet} {
      border-left: solid thin grey;
      padding-left: 2rem;
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

  .line {
    position: absolute;
    bottom: 0;
  }
`;

export const StyledFilterWrap = styled.div`
  display: flex;
  align-items: baseline;
  margin-top: 3rem;

  #input-container {
    display: flex;

    #label-filter {
      display: flex;
      align-items: baseline;
    }

    #label-filter:first-of-type {
      margin-left: 0;
    }
  }

  .rating-container {
    input {
      margin-right: 0.8rem;
    }
  }
`;

export const StayHeading = styled(Heading)`
  max-width: 400px;

  @media ${mediaQ.tablet} {
    max-width: 450px;
    font-size: 36px;
    margin-top: 4rem;

    @media ${mediaQ.desktop_large} {
      font-size: 40px;
    }
  }
`;
