import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";

export default function Alertbox({ type, className, children }) {
  return (
    <Alert variant={type} className={className}>
      {children}
    </Alert>
  );
}

Alertbox.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};
