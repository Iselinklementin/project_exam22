import PropTypes from "prop-types";

export default function Heading({ size = "1", className, children }) {
  const VariableHeading = `h${size}`;

  return <VariableHeading className={className}>{children}</VariableHeading>;
}

Heading.propTypes = {
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  fontSize: PropTypes.string,
};
