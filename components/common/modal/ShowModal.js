import { Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import React from "react";
import Paragraph from "../../typography/Paragraph";
import { StyledFormButton } from "../../../styles/buttons/StyledFormButton.styled";
import { StyledCancel, StyledModalBtnContainer } from "../../../styles/buttons/StyledModalBtnContainer.styled";

export const ShowModal = ({ modalShow, heading, message, cancel, confirmed }) => {
  return (
    <Modal show={modalShow} onHide={cancel} centered aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton>
        <Modal.Title>{heading}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Paragraph>{message}</Paragraph>
      </Modal.Body>

      <Modal.Footer>
        <StyledModalBtnContainer>
          <StyledCancel onClick={cancel} className="me-2">
            Cancel
          </StyledCancel>
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
