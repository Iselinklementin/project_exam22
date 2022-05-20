import { mediaQ } from "../../../styles/global/ThemeConfig";
import styled from "styled-components";

export const ExploreContainer = styled.div`
  position: absolute;
  left: 15px;
  top: 65px;
  color: ${(props) => props.theme.light};

  @media ${mediaQ.mobile_large} {
    left: 10%;
  }

  @media ${mediaQ.small_tablet} {
    top: 15%;
    left: 6%;
  }

  p {
    max-width: 230px;
    margin-bottom: 2rem;
    text-shadow: 2px 3px 2px #4d4c4c88;

    @media ${mediaQ.laptop} {
      max-width: 300px;
    }
  }

  h2 {
    font-size: 20px;
    max-width: 220px;
    line-height: 1.4;
    margin-bottom: 2rem;
    text-shadow: 2px 3px 2px #4d4c4c88;
  }
`;
