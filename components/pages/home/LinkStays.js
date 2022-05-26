import Heading from "../../../components/typography/Heading";
import Paragraph from "../../../components/typography/Paragraph";
import Link from "next/link";
import styled from "styled-components";
import Icon, { icons } from "../../../constants/icons";
import { Container } from "react-bootstrap";
import { mediaQ } from "../../../styles/global/ThemeConfig";
import { useState } from "react";

export const StyledLinkStaysContainer = styled.div`
  margin-top: 3rem;
  max-width: 960px;
  margin: auto;

  @media ${mediaQ.tablet} {
    display: flex;
    margin-top: 1.5rem;
  }

  .wrapper {
    max-width: 95%;

    @media ${mediaQ.tablet} {
      max-width: initial;
    }
  }

  .contain-text {
    margin-top: 1.5rem;
    border-radius: 8px;
    border: ${(props) => props.theme.body} solid 1px;
    padding: 2rem 1rem 1rem 1rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
      box-shadow 0.15s ease-in-out;

    :hover {
      box-shadow: 0 3px 5px rgb(0 0 0 / 10%);
      border: ${(props) => props.theme.primaryColour} solid 1px;
    }
    @media ${mediaQ.tablet} {
      min-height: 160px;
    }
  }

  .heading-container {
    display: flex;
    align-items: center;

    svg {
      margin-top: -0.5rem;
      font-size: 18px;

      @media ${mediaQ.tablet} {
        font-size: 20px;
      }
    }
  }

  h3 {
    font-size: 18px;

    @media ${mediaQ.desktop_large} {
      font-size: 20px;
    }
  }

  a:hover {
    color: ${(props) => props.theme.body};
  }
`;

export const LinkStays = () => {
  const [stayType, setStayType] = useState("");

  return (
    <StyledLinkStaysContainer>
      <Container onMouseEnter={() => setStayType("Hotel")} className="wrapper">
        <Link href={{ pathname: `/stays`, query: { type: stayType } }}>
          <a>
            <div className="contain-text">
              <div className="heading-container">
                <Icon icon={icons.map((icon) => icon.hotel)} />
                <Heading size="3" fontSize="18px" className="ms-2">
                  Hotels
                </Heading>
              </div>
              <Paragraph>Find a suitable, local hotel for one or more travelers.</Paragraph>
            </div>
          </a>
        </Link>
      </Container>

      <Container onMouseEnter={() => setStayType("Apartment")} className="wrapper">
        <Link href={{ pathname: `/stays`, query: { type: stayType } }}>
          <a>
            <div className="contain-text">
              <div className="heading-container">
                <Icon icon={icons.map((icon) => icon.apartment)} />
                <Heading size="3" fontSize="18px" className="ms-2 ">
                  Apartments
                </Heading>
              </div>
              <Paragraph>Rent an apartment and feel at home. Several places to show.</Paragraph>
            </div>
          </a>
        </Link>
      </Container>

      <Container onMouseEnter={() => setStayType("Bedbreakfast")} className="wrapper">
        <Link href={{ pathname: `/stays`, query: { type: stayType } }}>
          <a>
            <div className="contain-text">
              <div className="heading-container">
                <Icon icon={icons.map((icon) => icon.bed)} />
                <Heading size="3" fontSize="18px" className="ms-2">
                  Bed & Breakfast
                </Heading>
              </div>
              <Paragraph>Find a place that offers overnight accommodation and breakfast.</Paragraph>
            </div>
          </a>
        </Link>
      </Container>
    </StyledLinkStaysContainer>
  );
};
