import styled from "styled-components";
import Link from "next/link";
import { Breadcrumb } from "react-bootstrap";

const StyledBreadcrumb = styled(Breadcrumb)`
  li {
    font-size: 12px;
    text-transform: uppercase;
  }
`;

export const Breadcrumbs = ({ title }) => {
  return (
    <StyledBreadcrumb>
      <li className="breadcrumb-item">
        <Link href="/stays">Stays</Link>
      </li>
      <li className="breadcrumb-item active" aria-current="page">
        {title}
      </li>
    </StyledBreadcrumb>
  );
};

// her må det være props
