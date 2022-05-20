import LogoIcon from "../../../../assets/logo_element.svg";
import Stays from "../../../../assets/stays.svg";
import Link from "next/link";
import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import { DropdownMenu } from "./DropdownMenu";
import { StyledNav } from "../../styles/layout.styled";

export const NavHeaderMobile = () => {
  return (
    <StyledNav expand="lg">
      <Container className="mt-3 justify-space-between">
        <DropdownMenu />
        <Navbar.Brand className="logo">
          <Link href="/" passHref>
            <a>
              <Image src={LogoIcon} alt="Holidaze logo element" width="38.71" height="38.69" />
            </a>
          </Link>
        </Navbar.Brand>

        <Link href="/stays">
          <a style={{ lineHeight: "0.9" }}>
            <Image src={Stays} alt="Icon, a house with a chimney" width="28.18" height="20" />
          </a>
        </Link>
      </Container>
    </StyledNav>
  );
};
