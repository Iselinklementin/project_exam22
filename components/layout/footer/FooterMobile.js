import Image from "next/image";
import Link from "next/link";
import Mountain from "../../../assets/mountain.svg";
import LogoIcon from "../../../assets/logo_element.svg";
import { Container } from "react-bootstrap";

export const FooterMobile = () => {
  return (
    <>
      <Container>
        <Image
          src={Mountain}
          alt="image"
          quality={30}
          layout="responsive"
          objectFit="cover"
          priority
          style={{ opacity: "0.8" }}
        />
      </Container>

      <Link href="/">
        <a>
          <Image src={LogoIcon} alt="Holidaze logo element" width="34.28" height="34.28" />
        </a>
      </Link>

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
    </>
  );
};
