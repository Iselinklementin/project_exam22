import PropTypes from "prop-types";
import Icon, { icons } from "../../../constants/icons";

// Finds spesific icons
// Component used with "ShowIcons.js"

export default function FilterIcons({ includes, iconIncludes }) {
  let stayIcons = [];

  icons.map((icon) => {
    let keys = Object.keys(icon);
    if (includes && keys.includes(iconIncludes)) {
      stayIcons.push(icon);
    }
  });
  return <Icon icon={stayIcons.map((icon) => Object.entries(icon)[0][1])} className="me-2" fontSize="16px" />;
}

FilterIcons.propTypes = {
  includes: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  iconIncludes: PropTypes.string.isRequired,
};
