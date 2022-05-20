import axios from "axios";
import Alertbox from "../../common/alert/AlertBox";
import Loader from "../../common/loader/Loader";
import { CONTACT_URL } from "../../../constants/api";
import React, { useEffect, useState } from "react";
import { Accordion } from "react-bootstrap";
import { StyledAccordion } from "../../../styles/pages/admin/StyledAccordion.styled";
import Icon, { icons } from "../../../constants/icons";
import Paragraph from "../../typography/Paragraph";
import { RemoveWords } from "../../common/functions/RemoveWords";

export default function Messages() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getMessages() {
      try {
        const response = await axios.get(CONTACT_URL);
        if (response.status === 200) {
          setContact(response.data);
        } else {
          setError("This wasnt good");
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
        {error}
      </Alertbox>
    );
  }

  let count = 0;

  return (
    <StyledAccordion>
      <Accordion defaultActiveKey="0" flush>
        {contact.map((item) => {
          count++;
          let received = item.acf.date;

          return (
            <Accordion.Item eventKey={count}>
              <Accordion.Header>
                <div className="d-block">
                  <Paragraph className="acc-heading">
                    <span>{item.acf.name}</span>
                  </Paragraph>
                  <Paragraph className="acc-heading">{item.acf.title}</Paragraph>
                </div>

                <div className="received-container">
                  <Paragraph>{RemoveWords(received)}</Paragraph>
                  <Icon className="ms-3" icon={icons.map((icon) => icon.email)} />
                </div>
              </Accordion.Header>

              <Accordion.Body className="d-flex">
                <div className="text-container">
                  <Paragraph>
                    <span>Message:</span> {item.acf.message}
                  </Paragraph>
                  {/* <Paragraph className="paragraph-margin"></Paragraph> */}
                  <Paragraph>
                    <span>Email:</span> {item.acf.email}
                  </Paragraph>
                  {/* <div className="d-flex align-items-center mt-4">
                    <Icon icon={icons.map((icon) => icon.trash)} fontSize="18px" />
                    <Paragraph>Delete message</Paragraph>
                  </div> */}
                </div>
              </Accordion.Body>
            </Accordion.Item>
          );
        })}
      </Accordion>
    </StyledAccordion>
  );
}

// export async function getStaticProps() {
//   const messages = await getMessages();
//   return { props: { messages } };
// }

//                 <Icon icon={icons.map((icon) => icon.chat)} className="me-3" fontSize="18px" />
