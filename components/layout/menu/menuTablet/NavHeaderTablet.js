import AuthContext from "../../../../context/AuthContext";
import Logo from "../../../../assets/logo.svg";
import Link from "next/link";
import Image from "next/image";
import Coordinates from "../../../../assets/coordinates.svg";
import { useContext, useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import {
  StyledCoordinatesContainer,
  StyledNav,
  StyledWideContainer,
} from "../../styles/layout.styled";
import { DropdownMenuAdmin } from "./DropdownMenuAdmin";
import { StyledStayBtn } from "../../../../styles/buttons/StyledStayBtn.styled";
import { useRouter } from "next/router";

export const NavHeaderTablet = () => {
  const [authorized, setAuthorized] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  // This removes React Hydration Error
  useEffect(() => {
    auth ? setAuthorized(true) : false;
  }, []);

  return (
    <StyledNav expand="lg">
      <Container className="mt-4">
        <StyledCoordinatesContainer>
          <Image src={Coordinates} alt="Bergen Coordinates" width="20" height="200" />
        </StyledCoordinatesContainer>
        <Navbar.Brand>
          <Link href="/" passHref>
            <a>
              <Image src={Logo} alt="Holidaze logo" width="160.08" height="45" />
            </a>
          </Link>
        </Navbar.Brand>

        <StyledWideContainer>
          <Link href="/stays" passHref>
            <StyledStayBtn className="me-4">Stays</StyledStayBtn>
          </Link>
          <Link href="/contact" passHref>
            <a className={router.pathname == "/contact" ? "me-4 nav-link-active" : "me-4"}>
              Contact
            </a>
          </Link>

          {authorized ? (
            <>
              <Link href="/admin">
                <a className={router.pathname == "/admin" ? "me-4 nav-link-active" : "me-4"}>
                  Admin
                </a>
              </Link>
              <DropdownMenuAdmin />
            </>
          ) : (
            <Link href="/login">
              <a className={router.pathname == "/login" ? "me-4 nav-link-active" : "me-4"}>Login</a>
            </Link>
          )}
        </StyledWideContainer>
      </Container>
    </StyledNav>
  );
};
