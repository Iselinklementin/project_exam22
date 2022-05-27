import styled from "styled-components";
import PropTypes from "prop-types";
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";
import { mediaQ } from "../../../styles/global/ThemeConfig";

const StyledBreadcrumb = styled(Breadcrumb)`
  li {
    font-size: 12px;
    text-transform: uppercase;

    @media ${mediaQ.desktop_large} {
      font-size: 14px;
    }
  }
`;

// Reusable Breadcrumbs

export const Breadcrumbs = ({ link, linkName, title }) => {
  return (
    <StyledBreadcrumb>
      <li className="breadcrumb-item">
        <Link href={link}>{linkName}</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {title}
      </li>
    </StyledBreadcrumb>
  );
};

Breadcrumbs.propTypes = {
  link: PropTypes.string.isRequired,
  linkName: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
