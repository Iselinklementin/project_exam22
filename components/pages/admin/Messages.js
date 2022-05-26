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

export default function Messages() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const size = useWindowSize();

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await axios.get(CONTACT_URL);
        if (response.status === 200) {
          setContact(response.data);
        } else {
          setError(error.toString());
        }
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
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

  return (
    <StyledAccordion>
      <Accordion defaultActiveKey="0" flush>
        {contact.map(item => {
          count++;
          const { name, title, email, message, date } = item.acf;

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
                  <Icon className="ms-3" icon={icons.map(icon => icon.email)} />
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
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </StyledAccordion>
  );
}
