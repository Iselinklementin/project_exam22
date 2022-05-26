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

    @media ${mediaQ.desktop_large} {
      font-size: 16px;
    }
  }

  .search-icon {
    position: absolute;
    bottom: -1.6rem;
    left: 0.6rem;
  }

  .loader {
    display: none;
  }

  .loader.show {
    display: initial;
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

    @media ${mediaQ.desktop_large} {
      width: 160px;
      line-height: 1.8;
    }

    svg {
      margin-top: 5px;
    }
  }
`;
