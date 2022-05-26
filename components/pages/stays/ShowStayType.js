import PropTypes from "prop-types";
import Heading from "../../typography/Heading";
import StaysCard from "../../cards/StaysCard";
import { StyledLine } from "../../../styles/pages/stays/StyledLine.styled";

export const ShowStayType = ({ title, array }) => {
  return (
    <div className="mt-5">
      <Heading size="2">{title}</Heading>
      <StyledLine className="mb-4"></StyledLine>
      <StaysCard stays={array} />
    </div>
  );
};

ShowStayType.propTypes = {
  title: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
};
