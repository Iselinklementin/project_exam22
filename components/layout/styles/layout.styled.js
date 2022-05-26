import { mediaQ } from "../../../styles/global/ThemeConfig";
import { Navbar } from "react-bootstrap";
import styled from "styled-components";

export const StyledNav = styled(Navbar)`
  max-width: 1024px;
  margin: auto;

  .nav-link-active {
    color: ${(props) => props.theme.primaryColour};
    border-bottom: ${(props) => props.theme.primaryColour} thin solid;
  }

  .nav-link-active-mobile {
    color: ${(props) => props.theme.primaryColour};
  }
`;

export const MenuContainer = styled.div`
  button {
    box-shadow: none;
    border: none;
    background: transparent;
    position: relative;
  }

  .dropdown-menu-container {
    background-color: ${(props) => props.theme.light};
    position: absolute;
    padding: 2rem;
    padding-bottom: 5rem;

    a {
      width: 100%;
      padding: 10px 0;
      transition: all 0.3s;
      margin: 0;
    }

    .logout-icon {
      padding: 10px 0;
      padding-top: 1rem;
    }

    a:hover,
    .logout-icon:hover {
      :after {
        content: "»";
        font-size: 18px;
        padding-left: 24px;
        line-height: 1.2;
      }
      color: ${(props) => props.theme.body};
    }
  }

  .dropdown-menu-container.show {
    width: 95%;
    animation-name: slide;
    animation-duration: 0.8s;
    margin: auto;
    left: 0;
    right: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }

    to {
      opacity: 1;
    }
  }

  @keyframes slide {
    from {
      width: 0%;
    }

    to {
      width: 95%;
    }
  }

  .menu {
    position: absolute;
    background-color: ${(props) => props.theme.primaryColour};
    top: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    padding-bottom: 1rem;
    padding-top: 1rem;
  }

  .menu-trigger {
    z-index: 3;
  }

  .active {
    opacity: 1;
    visibility: visible;
    height: 100vh;
    margin-top: 6rem;
    animation-name: fadeIn;
    animation-duration: 0.5s;
  }
`;

export const StyledLogoutBtn = styled.div`
  display: flex;
  cursor: pointer;
  padding: 5px 0 0 0;
`;

export const StyledIconContainer = styled.div`
  margin-right: 10px;
  height: 28px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  .userIcon {
    margin-bottom: 4px;
  }

  .logout-icon {
    margin-top: 1px;
    margin-left: 6px;
  }
`;

export const StyledWideContainer = styled.div`
  font-weight: 500;
  text-transform: uppercase;
  font-size: 14px;
  display: flex;
  align-items: center;

  @media ${mediaQ.desktop_large} {
    font-size: 16px;
  }

  button {
    background: transparent;
    box-shadow: none;
    border: none;
    position: relative;
  }

  .admin-menu {
    position: absolute;
    max-width: 180px;
    right: 50px;
    top: 6rem;
    opacity: 0;
    visibility: hidden;
    z-index: 2;
    padding: 6px;
    border-radius: 6px;
    background: ${(props) => props.theme.backgroundColour};

    .list-group-item {
      border: transparent;
      display: flex;
      align-items: center;
      margin: 0;
      padding: 0;
      transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out,
        box-shadow 0.15s ease-in-out;
    }

    .list-group-item:hover,
    a:hover {
      background: #eceaea;
      color: ${(p) => p.theme.body};
      cursor: pointer;
    }

    .item-logout,
    a {
      padding: 10px 5px;
      margin: 0;
      width: 100%;
    }

    .logout-icon {
      margin-top: -6px;
    }
  }

  .admin-menu.active {
    z-index: 2;
    opacity: 1;
    visibility: visible;
    -webkit-box-shadow: 1px 3px 5px 0px darkgrey;
    -moz-box-shadow: 1px 3px 5px 0px darkgrey;
    box-shadow: 0px 0px 10px 0px darkgrey;
  }
`;

export const StyledCoordinatesContainer = styled.div`
  position: absolute;
  left: 20px;
  top: 120px;
  display: none;

  @media ${mediaQ.desktop} {
    left: 0;
  }
`;
