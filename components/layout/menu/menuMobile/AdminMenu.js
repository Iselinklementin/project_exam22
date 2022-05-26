import AuthContext from "../../../../context/AuthContext";
import Image from "next/image";
import Stays from "../../../../assets/stays.svg";
import Link from "next/link";
import Icon, { icons } from "../../../../constants/icons";
import { useContext, useState } from "react";
import { useRouter } from "next/router";
import { StyledIconContainer, StyledLogoutBtn } from "../../styles/layout.styled";
import { ShowModal } from "../../../common/modal/ShowModal";

export const AdminMenu = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [modalShow, setModalShow] = useState(false);
  const router = useRouter();

  function logout() {
    setAuth(null);
    setModalShow(false);
    router.push("/");
  }

  function hideModal() {
    setModalShow(false);
  }

  return (
    <>
      <Link href="/stays">
        <a className="d-flex align-items-center my-2">
          <StyledIconContainer>
            <Image src={Stays} alt="Icon, a house with a chimney" width="21.6" height="15" />
          </StyledIconContainer>
          Stays
        </a>
      </Link>
      <hr />
      <Link href="/add">
        <a
          className={
            router.pathname == "/add"
              ? "d-flex align-items-center my-2 nav-link-active-mobile"
              : "d-flex align-items-center my-2"
          }>
          <StyledIconContainer>
            <Icon icon={icons.map(icon => icon.plus)} fontSize="22px" />
          </StyledIconContainer>
          Add stay
        </a>
      </Link>
      <hr />

      <Link href="/admin">
        <a
          className={
            router.pathname == "/admin"
              ? "d-flex align-items-center my-2 nav-link-active-mobile"
              : "d-flex align-items-center my-2"
          }>
          <StyledIconContainer>
            <Icon icon={icons.map(icon => icon.user)} fontSize="16px" className="userIcon" />
          </StyledIconContainer>
          Admin
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

      <StyledLogoutBtn onClick={() => setModalShow(true)} className="logout-icon">
        <StyledIconContainer>
          <Icon icon={icons.map(icon => icon.logout)} />
        </StyledIconContainer>
        Log out
      </StyledLogoutBtn>
      <ShowModal
        modalShow={modalShow}
        cancel={hideModal}
        heading="Sign out"
        message="Are you sure?"
        confirmed={logout}
      />
    </>
  );
};
