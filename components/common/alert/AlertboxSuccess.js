import { Alert } from "react-bootstrap";
import PropTypes from "prop-types";
import styled from "styled-components";
import { mediaQ } from "../../../styles/global/ThemeConfig";

const StyledAlert = styled(Alert)`
  background: ${(props) => props.theme.success};
  color: white;
  border: white;
  border-radius: 6px;
  padding: 2rem;

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

    @media ${mediaQ.desktop_large} {
      font-size: 16px;
    }
  }
`;

export default function AlertboxSuccess({ type, className, children }) {
  return (
    <StyledAlert variant={type} className={className}>
      {children}
    </StyledAlert>
  );
}

AlertboxSuccess.propTypes = {
  children: PropTypes.any.isRequired,
  type: PropTypes.string,
  className: PropTypes.string,
};
