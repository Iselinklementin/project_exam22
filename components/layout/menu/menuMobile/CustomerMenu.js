import Image from "next/image";
import Stays from "../../../../assets/stays.svg";
import Link from "next/link";
import Icon, { icons } from "../../../../constants/icons";
import { StyledIconContainer } from "../../styles/layout.styled";
import { useRouter } from "next/router";

export const CustomerMenu = () => {
  const router = useRouter();
  return (
    <>
      <Link href="/stays">
        <a
          className={
            router.pathname == "/stays"
              ? "d-flex align-items-center my-2 nav-link-active-mobile"
              : "d-flex align-items-center my-2"
          }>
          <StyledIconContainer>
            <Image src={Stays} alt="Icon, a house with a chimney" width="21.6" height="15" />
          </StyledIconContainer>
          Stays
        </a>
      </Link>
      <hr />
      <Link href="/contact">
        <a
          className={
            router.pathname == "/contact"
              ? "d-flex align-items-center my-2 nav-link-active-mobile"
              : "d-flex align-items-center my-2"
          }>
          <StyledIconContainer>
            <Icon icon={icons.map(icon => icon.email)} fontSize="17px" />
          </StyledIconContainer>
          Contact us
        </a>
      </Link>
      <hr />
      <Link href="/login">
        <a
          className={
            router.pathname == "/login"
              ? "d-flex align-items-center my-2 nav-link-active-mobile"
              : "d-flex align-items-center my-2"
          }>
          <StyledIconContainer>
            <Icon icon={icons.map(icon => icon.user)} fontSize="16px" className="userIcon" />
          </StyledIconContainer>
          Login
        </a>
      </Link>
    </>
  );
};
