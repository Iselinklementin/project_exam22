import PropTypes from "prop-types";
import styled from "styled-components";

const StyledParagraph = styled.p`
  line-height: 1.4;
`;

export const StyledParagraphColoured = styled(StyledParagraph)`
  color: ${props => props.theme.primaryColour};
`;

export default function Paragraph({ className, children }) {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
