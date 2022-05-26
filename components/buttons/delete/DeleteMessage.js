import useAxios from "../../../hooks/useAxios";
import { useState } from "react";
import styled from "styled-components";
import Icon, { icons } from "../../../constants/icons";
import { ShowModal } from "../../common/modal/ShowModal";
import Alertbox from "../../common/alert/Alertbox";
import PropTypes from "prop-types";

const StyledDelete = styled.div`
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.primaryColour};
  }
`;

export const DeleteMessage = ({ id, getMessages, messageUrl }) => {
  const [modalShow, setModalShow] = useState(false);
  const [error, setError] = useState(null);
  const http = useAxios();
  const url = messageUrl + `/${id}`;

  function hideModal() {
    setModalShow(false);
  }

  async function deleteMessage() {
    try {
      await http.delete(url);
      setModalShow(false);
      getMessages();
    } catch (error) {
      setError(error);
      console.log(error);
    }
  }

  return (
    <>
      {error ? (
        <Alertbox className="mt-4" type="danger">
          Sorry, something went wrong deleting the message.
        </Alertbox>
      ) : (
        <>
          <StyledDelete className="mt-5" data-id={id} onClick={() => setModalShow(true)}>
            <Icon icon={icons.map((icon) => icon.trash)} />
            <small className="ms-2">Delete message</small>
          </StyledDelete>

          <ShowModal
            modalShow={modalShow}
            cancel={hideModal}
            heading="Delete message"
            message="Are you sure you want to delete this message?"
            confirmed={deleteMessage}
          />
        </>
      )}
    </>
  );
};

DeleteMessage.propTypes = {
  id: PropTypes.number.isRequired,
  getMessages: PropTypes.func.isRequired,
};
