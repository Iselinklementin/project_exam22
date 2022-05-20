import { mediaQ } from "../../../styles/global/ThemeConfig";
import styled from "styled-components";

export const StyledIconWrap = styled.div`
  position: relative;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 100%;
  background: ${(props) => props.theme.primaryColour};
  color: white;

  @media ${mediaQ.tablet} {
    max-width: 720px;
    padding: 0 1rem;
    margin: auto;
    color: ${(props) => props.theme.body};
    background: ${(props) => props.theme.backgroundColour};
  }

  @media ${mediaQ.laptop} {
    max-width: 960px;
  }

  input {
    padding-left: 38px;
    border: none;

    :focus {
      border-color: #fc5156;
      box-shadow: 0 0 0 0.05rem rgb(252 81 86 / 25%);
    }

    @media ${mediaQ.tablet} {
      border: ${(props) => props.theme.primaryColour} solid thin;
    }
  }

  input::placeholder {
    font-size: 14px;
    color: ${(props) => props.theme.body};
    opacity: 0.8;
  }

  .search-icon {
    position: absolute;
    bottom: -1.6rem;
    left: 0.6rem;
  }

  // her er ny loader

  .loader {
    position: absolute;
    height: 20px;
    width: 20px;
    right: 10px;
    top: 40px;
    display: inline-block;
    animation: around 5.4s infinite;
    display: none;
  }

  .loader.show {
    display: initial;
  }

  .loader::after,
  .loader::before {
    content: "";
    background: white;
    position: absolute;
    display: inline-block;
    width: 100%;
    height: 100%;
    border-width: 2px;
    border-color: #333 #333 transparent transparent;
    border-style: solid;
    border-radius: 20px;
    box-sizing: border-box;
    top: 0;
    left: 0;
    animation: around 0.7s ease-in-out infinite;
  }

  .loader::after {
    animation: around 0.7s ease-in-out 0.1s infinite;
    background: transparent;
  }

  @keyframes around {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const StyledWideContainer = styled.div`
  .list-group-item:hover {
    background: #fdc2c2;
    color: ${(props) => props.theme.body};
  }

  .container {
    position: relative;

    .split {
      @media ${mediaQ.tablet} {
        border-right: solid thin grey;
        height: 50px;
        position: absolute;
        right: -4%;
        top: 40px;
      }
    }
  }

  @media ${mediaQ.tablet} {
    display: flex;
    align-items: center;
  }
`;

export const StyledButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.5rem;
  height: 40px;
  padding-left: 1.8rem;
  position: absolute;
  top: 47px;
  right: 25px;

  a {
    height: 40px;
    line-height: 2;
    width: 146px;

    svg {
      margin-top: 5px;
    }
  }
`;
