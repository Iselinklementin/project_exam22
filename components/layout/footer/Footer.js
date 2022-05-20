import React from "react";
import styled from "styled-components";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { SCREEN } from "../../../constants/misc";
import { FooterMobile } from "./FooterMobile";
import { FooterWide } from "./FooterWide";

const StyledFooter = styled.footer`
  padding: 1rem;
  margin-top: 5rem;
  text-align: center;

  a {
    text-transform: uppercase;
    font-size: 14px;
    margin: 10px;
    font-weight: 500;
  }
`;

export default function Footer() {
  const size = useWindowSize();

  return <StyledFooter>{size.width <= SCREEN.tablet ? <FooterMobile /> : <FooterWide />}</StyledFooter>;
}
