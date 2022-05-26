import AuthContext from "../../../../context/AuthContext";
import Link from "next/link";
import Icon, { icons } from "../../../../constants/icons";
import { useContext, useState } from "react";
import { Container, ListGroup, ListGroupItem } from "react-bootstrap";
import { useRouter } from "next/router";
import { ShowModal } from "../../../common/modal/ShowModal";
import { StyledIconContainer, StyledLogoutBtn } from "../../styles/layout.styled";

// Dropdown Menu Admin tablet+

export const DropdownMenuAdmin = () => {
  const [auth, setAuth] = useContext(AuthContext);
  const [activeAdmin, setActiveAdmin] = useState(false);
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
    <div>
      <button
        aria-label="navigation admin"
        className="p-2 admin-menu-trigger"
        onClick={() => setActiveAdmin(!activeAdmin)}>
        <Icon icon={icons.map(icon => icon.moreHorizontal)} color="#FC5156" fontSize="26px" />
      </button>

      <Container
        onMouseLeave={() => setActiveAdmin(!activeAdmin)}
        className={`admin-menu ${activeAdmin ? "active" : ""}`}>
        <ListGroup>
          <ListGroupItem>
            <Link href="/add">
              <a className="d-flex align-items-center">
                <StyledIconContainer>
                  <Icon icon={icons.map(icon => icon.plus)} fontSize="22px" />
                </StyledIconContainer>
                Add stay
              </a>
            </Link>
          </ListGroupItem>

          <ListGroupItem className="item-logout" onClick={() => setModalShow(true)}>
            <StyledLogoutBtn>
              <StyledIconContainer>
                <Icon icon={icons.map(icon => icon.logout)} className="logout-icon" />
              </StyledIconContainer>
              Log out
            </StyledLogoutBtn>
          </ListGroupItem>
        </ListGroup>
      </Container>
      <ShowModal
        modalShow={modalShow}
        cancel={hideModal}
        heading="Sign out"
        message="Are you sure?"
        confirmed={logout}
      />
    </div>
  );
};
