import styled from "styled-components";
import { mediaQ } from "../../global/ThemeConfig";

export const StyledAccordion = styled.div`
  span {
    font-weight: 500;
  }

  .accordion-header {
    .acc-heading {
      span {
        display: block;
      }
    }
    p {
      margin: 3px;
    }
  }

  .accordion-button {
    background: ${(props) => props.theme.light};
    color: ${(props) => props.theme.body};
    word-break: break-word;
  }

  .accordion-button::after {
    width: 40%;
  }

  .accordion-button:focus {
    box-shadow: none;
  }

  .accordion-button:not(.collapsed)::after {
    background-image: none;
  }

  .accordion-button:not(.collapsed) {
    box-shadow: none;
  }

  .received-container {
    position: absolute;
    right: 10px;
    top: 18px;
    display: flex;
    align-items: center;

    p {
      line-height: 1.5;
      font-size: 14px;

      @media ${mediaQ.desktop_large} {
        font-size: 16px;
      }
    }
  }

  .text-container {
    max-width: 240px;
    max-width: 500px;

    p {
      margin-bottom: 4px;
      word-break: break-word;
    }

    span {
      font-weight: 500;
    }
  }

  .paragraph-margin {
    margin-top: 1.5rem;
  }

  .accordion-item {
    padding-top: 1rem;
    padding-bottom: 1rem;
    button {
      background: ${(props) => props.theme.backgroundColour};
    }
  }

  .accordion {
    .accordion-item:first-of-type {
      button {
        padding-top: 2rem;

        .received-container {
          top: 34px;
        }
      }
    }
  }
`;
