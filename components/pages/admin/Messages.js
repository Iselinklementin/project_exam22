import axios from "axios";
import Alertbox from "../../common/alert/Alertbox";
import Loader from "../../common/loader/Loader";
import Paragraph from "../../typography/Paragraph";
import Icon, { icons } from "../../../constants/icons";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { CONTACT_URL } from "../../../constants/api";
import { StyledAccordion } from "../../../styles/pages/admin/StyledAccordion.styled";
import { RemoveWords } from "../../common/functions/RemoveWords";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { SCREEN } from "../../../constants/misc";
import { DeleteMessage } from "../../../components/buttons/delete/DeleteMessage";

export default function Messages() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const size = useWindowSize();

  const getMessages = async function () {
    try {
      const response = await axios.get(CONTACT_URL);
      if (response.status === 200) {
        setContact(response.data);
      } else {
        setError(error);
      }
    } catch (error) {
      console.log(error);
      setError(error.toString());
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return (
      <Alertbox className="mt-2" type="danger">
        Sorry, something went wrong.
      </Alertbox>
    );
  }

  let count = 0;

  if (!contact.length) {
    return <div className="mt-5 text-center">You have no messages in your inbox.</div>;
  }

  return (
    <StyledAccordion>
      <Accordion defaultActiveKey="0" flush>
        {contact.map((item) => {
          count++;
          const { name, title, email, message, date } = item.acf;
          const id = item.id;

          return (
            <Accordion.Item eventKey={count} key={item.id}>
              <Accordion.Header>
                <div className="d-block">
                  <Paragraph className="acc-heading">
                    <span>{name}</span>
                  </Paragraph>
                  <Paragraph className="acc-heading">{title}</Paragraph>
                </div>
                <div className="received-container">
                  {size.width <= SCREEN.tablet ? (
                    <Paragraph>{RemoveWords(date)}</Paragraph>
                  ) : (
                    <Paragraph>{date}</Paragraph>
                  )}
                  <Icon className="ms-3" icon={icons.map((icon) => icon.email)} />
                </div>
              </Accordion.Header>
              <Accordion.Body className="d-flex">
                <div className="text-container">
                  <Paragraph>
                    <span>Message:</span> {message}
                  </Paragraph>
                  <Paragraph>
                    <span>Email:</span> {email}
                  </Paragraph>
                  <DeleteMessage id={id} messageUrl={CONTACT_URL} getMessages={getMessages} />
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </StyledAccordion>
  );
}
