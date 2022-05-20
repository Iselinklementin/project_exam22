import { Container } from "react-bootstrap";
import Image from "next/image";
import Link from "next/link";
import Mountain from "../../../assets/mountain.svg";
import Logo from "../../../assets/logo.svg";
import styled from "styled-components";
import Coordinates from "../../../assets/coordinates.svg";

const StyledFooterContainer = styled(Container)`
  position: relative;
  display: flex;
  max-width: 960px;
  margin: auto;
  margin-top: 5rem;

  .mountain {
    position: absolute;
    opacity: 0.8;
  }

  .logo-container {
    position: absolute;
    left: 0;
    bottom: 35%;
  }

  .coordinates {
    position: absolute;
    right: -10px;
    bottom: 22%;
  }

  .mountain-links-container {
    margin: auto;
  }
`;

export const FooterWide = () => {
  return (
    <StyledFooterContainer>
      <div className="mountain-links-container">
        <Container>
          <Image
            src={Mountain}
            alt="Mountain"
            width="500"
            height="90"
            objectFit="cover"
            className="mountain"
            priority
          />
        </Container>

        <Container className="mb-5 mt-3">
          <Link href="/">
            <a>Stays</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
          <Link href="/login">
            <a>Login</a>
          </Link>
        </Container>
      </div>

      <div className="coordinates">
        <Image src={Coordinates} alt="Bergen Coordinates" width="20" height="200" />
      </div>
    </StyledFooterContainer>
  );
};
