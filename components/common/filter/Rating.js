import { StyledCheckbox } from "../../../styles/forms/StyledCheckbox.styled";
import Heading from "../../../components/typography/Heading";
import Icon, { icons } from "../../../constants/icons";
import { Form } from "react-bootstrap";
import styled from "styled-components";

const StyledHeading = styled(Heading)`
  font-size: 16px;
`;

export const Rating = ({ click }) => {
  return (
    <div className="rating-container mb-4">
      <div className="d-flex mb-3">
        <Icon icon={icons.map((icon) => icon.star)} fontSize="16px" className="me-2" />
        <StyledHeading size="3">Rating</StyledHeading>
      </div>

      <StyledCheckbox>
        <Form.Label name="3 stars" className="d-flex">
          <Form.Check type="checkbox" name="3 stars" className="me-2" onClick={(e) => click(e.target)} />3 stars
        </Form.Label>
        <Form.Label name="4 stars" className="d-flex">
          <Form.Check type="checkbox" name="4 stars" className="me-2" onClick={(e) => click(e.target)} />4 stars
        </Form.Label>
        <Form.Label name="5 stars" className="d-flex">
          <Form.Check type="checkbox" name="5 stars" className="me-2" onClick={(e) => click(e.target)} />5 stars
        </Form.Label>
      </StyledCheckbox>
    </div>
  );
};
