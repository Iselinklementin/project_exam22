import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import Paragraph from "../../typography/Paragraph";
import { StyledFormButton } from "../../../styles/buttons/StyledFormButton.styled";
import styled from "styled-components";

const StyledModalBtnContainer = styled.div`
  width: 60%;
  display: flex;
  margin: auto;
  align-items: center;
  justify-content: space-between;
`;

const StyledCancel = styled(StyledFormButton)`
  background: transparent;
  color: ${props => props.theme.body};

  &:hover,
  &:focus {
    background: #f5f5f5;
    border-color: transparent;
    color: ${props => props.theme.body};
    box-shadow: 0 0 0 0.25rem #afacac3d;
  }
`;

export const ShowModal = ({ modalShow, heading, message, cancel, confirmed }) => {
  return (
    <Modal
      show={modalShow}
      onHide={cancel}
      centered
      aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Paragraph>{message}</Paragraph>
      </Modal.Body>

      <Modal.Footer>
        <StyledModalBtnContainer>
          <StyledCancel onClick={cancel}>Cancel</StyledCancel>
          <StyledFormButton onClick={confirmed}>Confirm</StyledFormButton>
        </StyledModalBtnContainer>
      </Modal.Footer>
    </Modal>
  );
};

ShowModal.propTypes = {
  modalShow: PropTypes.bool.isRequired,
  heading: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  confirmed: PropTypes.func.isRequired,
};
