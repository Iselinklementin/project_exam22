import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledAlert = styled(Alert)`
  // skift ut success med denne:
  background: #8bb263;
  /* background: ${(props) => props.theme.success}; */
  color: white;
  border: white;
  border-radius: 6px;

  a {
    color: white;
    border-bottom: white solid thin;
    padding-bottom: 6px;
    font-size: 14px;
    text-transform: uppercase;
    transition: padding 0.15s ease-in-out;

    &:hover {
      color: white;
      border-bottom: white solid 2px;
      padding: 0 0 8px 0;
    }
  }
`;

export default function Alertbox({ type, className, children }) {
  return (
    <Alert variant={type} className={className}>
      {children}
    </Alert>
  );
}

export function AlertboxSuccess({ type, className, children }) {
  return (
    <StyledAlert variant={type} className={className}>
      {children}
    </StyledAlert>
  );
}

Alertbox.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.node.isRequired,
  className: PropTypes.node,
};
