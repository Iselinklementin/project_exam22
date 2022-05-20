import Alertbox from "../common/alert/AlertBox";
import Icon, { icons } from "../../constants/icons";
import { StyledFeedbackContainer } from "../forms/styles/StyledForm.styled";
import styled from "styled-components";

const StyledFeedbackContainerImages = styled(StyledFeedbackContainer)`
  .left {
    margin-left: 0;
    padding: 0;
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

export const ValidationErrorImages = ({ errorName, box_class }) => {
  return (
    <StyledFeedbackContainerImages>
      <Alertbox className={box_class}>{errorName}</Alertbox>
    </StyledFeedbackContainerImages>
  );
};
