import PropTypes from "prop-types";

export default function CapitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

CapitalizeFirstLetter.propTypes = {
  string: PropTypes.string.isRequired,
};
