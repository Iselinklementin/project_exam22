import LogoIcon from "../../../../assets/logo_element.svg";
import Stays from "../../../../assets/stays.svg";
import Link from "next/link";
import Image from "next/image";
import { Container, Navbar } from "react-bootstrap";
import { DropdownMenu } from "./DropdownMenu";
import { StyledNav } from "../../styles/layout.styled";

export const NavHeaderMobile = () => {
  const clickLink = () => {
    document.body.classList.remove("body_menu_open");
  };

  return (
    <StyledNav expand="lg">
      <Container className="mt-3 justify-space-between">
        <DropdownMenu />
        <Navbar.Brand className="logo">
          <Link href="/" passHref>
            <a onClick={clickLink}>
              <Image src={LogoIcon} alt="Holidaze logo element" width="38.71" height="38.69" />
            </a>
          </Link>
        </Navbar.Brand>

        <Link href="/stays">
          <a onClick={clickLink} style={{ lineHeight: "0.9" }}>
            <Image src={Stays} alt="Icon, a house with a chimney" width="28.18" height="20" />
          </a>
        </Link>
      </Container>
    </StyledNav>
  );
};
