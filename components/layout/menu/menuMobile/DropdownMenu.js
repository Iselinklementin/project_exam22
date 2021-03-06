import AuthContext from "../../../../context/AuthContext";
import { MenuContainer } from "../../styles/layout.styled";
import Icon, { icons } from "../../../../constants/icons";
import { useContext, useEffect, useState } from "react";
import { AdminMenu } from "./AdminMenu";
import { CustomerMenu } from "./CustomerMenu";

// Dropdown Menu Mobile

export const DropdownMenu = () => {
  const [isActive, setIsActive] = useState(false);
  const [authorized, setAuthorized] = useState(false);
  const [auth, setAuth] = useContext(AuthContext);

  useEffect(() => {
    auth ? setAuthorized(true) : false;
  }, []);

  const handleMenuClick = () => {
    setIsActive(!isActive);
    document.body.classList.toggle("body_menu_open");
  };

  return (
    <MenuContainer>
      <button aria-label="navigation" className="p-0 menu-trigger" onClick={() => handleMenuClick()}>
        <Icon icon={icons.map((icon) => icon.burger)} fontSize="28px" color="#FC5156" />
      </button>

      <div className={`menu ${isActive ? "active" : ""}`}>
        <div className={isActive ? "dropdown-menu-container show" : "dropdown-menu-container"}>
          {authorized ? <AdminMenu /> : <CustomerMenu />}
        </div>
      </div>
    </MenuContainer>
  );
};
