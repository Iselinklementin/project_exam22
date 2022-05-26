import PropTypes from "prop-types";
import Heading from "../../../components/typography/Heading";
import Paragraph from "../../../components/typography/Paragraph";

export const Description = ({ className, hSize, heading, body }) => {
  return (
    <>
      <Heading className={className} size={hSize}>
        {heading}
      </Heading>
      <Paragraph>{body}</Paragraph>
    </>
  );
};

Description.propTypes = {
  className: PropTypes.string.isRequired,
  hSize: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
};
