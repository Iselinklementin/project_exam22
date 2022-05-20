import { mediaQ } from "../../../styles/global/ThemeConfig";
import styled from "styled-components";

export const StyledTabs = styled.div`
  max-width: 960px;
  margin: auto;

  .nav-link {
    color: ${(props) => props.theme.body};
    background: ${(props) => props.theme.light};
    text-transform: uppercase;
    font-size: 14px;
    padding: 8px 40px;
  }

  .nav-link.active {
    background-color: #fc5156;
    color: white;
    /* border-top: ${(props) => props.theme.body} solid 1px;
    border-left: ${(props) => props.theme.body} solid 1px;
    border-right: ${(props) => props.theme.body} solid 1px; */
  }

  .nav-tabs {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 0.8px;

    @media ${mediaQ.tablet} {
      justify-content: flex-start;
    }

    /* border-bottom: ${(props) => props.theme.body} solid 1px; */
  }

  button::after {
    background-image: none;
  }

  .accordion-button:not(.collapsed)::after {
    background-image: none;
  }
`;
