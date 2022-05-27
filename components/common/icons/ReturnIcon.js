import React from "react";
import PropTypes from "prop-types";
import Icon, { icons } from "../../../constants/icons";

// returns the correct stay-icon, depending on the name added

function ReturnIcon(value) {
  let stayType = value;
  switch (stayType) {
    case "Hotel":
      return <Icon icon={icons.map((icon) => icon.hotel)} fontSize="28px" className="me-3 mt-1" />;
      break;
    case "Apartment":
      return <Icon icon={icons.map((icon) => icon.apartment)} fontSize="24px" className="me-3 mt-1" />;
      break;
    case "Bed & Breakfast":
      return <Icon icon={icons.map((icon) => icon.bed)} fontSize="24px" className="me-3 mt-1" />;
      break;
  }
}

export default ReturnIcon;

ReturnIcon.propTypes = {
  value: PropTypes.string.isRequired,
};
