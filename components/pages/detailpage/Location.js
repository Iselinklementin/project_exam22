import PropTypes from "prop-types";
import Paragraph from "../../typography/Paragraph";

export const Location = ({ className, address, location }) => {
  return (
    <>
      <Paragraph>
        <span className="fw-bold">Address: </span>
        {address}
      </Paragraph>

      <Paragraph className={className}>
        <span className="fw-bold">Location: </span>
        {location}
      </Paragraph>
    </>
  );
};

Location.propTypes = {
  className: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
};
