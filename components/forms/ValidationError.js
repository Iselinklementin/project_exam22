import Alertbox from "../common/alert/Alertbox";
import Icon, { icons } from "../../constants/icons";
import { StyledFeedbackContainer } from "../forms/styles/StyledForm.styled";
import styled from "styled-components";

const StyledFeedbackContainerSelect = styled(StyledFeedbackContainer)`
  .left {
    margin-left: 0;
    padding: 0;
  }
`;

const StyledFeedbackContainerImages = styled(StyledFeedbackContainer)`
  position: absolute;
  left: 0;
  bottom: 0;

  .photo-error {
    padding-left: 1rem;
  }
`;

export const ValidationError = ({ errorName }) => {
  return (
    <StyledFeedbackContainer>
      <Icon icon={icons.map((icon) => icon.error)} color="#D11117" fontSize="18px" className="warning-icon" />
      <Alertbox className="mt-2">{errorName}</Alertbox>
    </StyledFeedbackContainer>
  );
};

export const ValidationErrorSelect = ({ errorName, box_class }) => {
  return (
    <StyledFeedbackContainerSelect>
      <Alertbox className={box_class}>{errorName}</Alertbox>
    </StyledFeedbackContainerSelect>
  );
};

export const ValidationErrorImage = ({ errorName, box_class }) => {
  return (
    <StyledFeedbackContainerImages>
      <Alertbox className="photo-error">{errorName}</Alertbox>
    </StyledFeedbackContainerImages>
  );
};
