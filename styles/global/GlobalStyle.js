import { createGlobalStyle } from "styled-components";
import { mediaQ } from "./ThemeConfig";

const GlobalStyle = createGlobalStyle`
  #root {
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
  }

*,
*::before,
*::after {
  box-sizing: border-box;
}

  html ,
  body {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.body};
    background: ${(props) => props.theme.backgroundColour};
    font-family: "Roboto", sans-serif;
    height: 100%;
    width: 100%;
  }

  h1 {
    font-family: "Roboto";
    font-size: 28px;
    line-height: 1.3;

     @media ${mediaQ.tablet} {
    font-size: 34px;
  } 
  }

  h2 {
    font-size: 20px;
    line-height: 1.3;


  @media ${mediaQ.desktop_large} {
      font-size: 26px;
  }
  }

  a {
    color: ${(props) => props.theme.body};
    text-decoration: none;
  

    &:hover {
      color: ${(props) => props.theme.primaryColour};
      cursor: pointer;
    }
  }

.body_menu_open {
  overflow: hidden;
}

`;

export default GlobalStyle;
