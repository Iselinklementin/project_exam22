import Paragraph from "../../typography/Paragraph";
import ReturnIcon from "../../common/icons/ReturnIcon";
import axios from "axios";
import Loader from "../../common/loader/Loader";
import Alertbox from "../../common/alert/Alertbox";
import React, { useEffect, useState } from "react";
import Icon, { icons } from "../../../constants/icons";
import { ENQUIRES_URL } from "../../../constants/api";
import { Accordion } from "react-bootstrap";
import { StyledAccordion } from "../../../styles/pages/admin/StyledAccordion.styled";
import { RemoveWords } from "../../common/functions/RemoveWords";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { SCREEN } from "../../../constants/misc";

export default function Enquires() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const size = useWindowSize();

  useEffect(() => {
    async function getEnquires() {
      try {
        const response = await axios.get(ENQUIRES_URL);
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
    }
    getEnquires();
  }, []);

  if (loading) {
    return <Loader className="enquire_loader" />;
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
          const {
            date_received,
            stay_title,
            name,
            type_of_stay,
            phone,
            how_many,
            room,
            from_date,
            to_date,
            comments,
            email,
          } = item.acf;

          count++;

          return (
            <Accordion.Item eventKey={count} key={item.id}>
              <Accordion.Header>
                <div className="d-block">
                  <Paragraph className="acc-heading">
                    <span>{stay_title}</span>
                  </Paragraph>
                  <Paragraph className="acc-heading">{name}</Paragraph>
                </div>

                <div className="received-container">
                  {size.width <= SCREEN.tablet ? (
                    <Paragraph>{RemoveWords(date_received)}</Paragraph>
                  ) : (
                    <Paragraph>{date_received}</Paragraph>
                  )}
                  <Icon className="ms-3" icon={icons.map(icon => icon.email)} />
                </div>
              </Accordion.Header>

              <Accordion.Body className="d-flex">
                {ReturnIcon(type_of_stay)}
                <div className="text-container">
                  <Paragraph>
                    <span>Stay:</span> {stay_title}
                  </Paragraph>
                  <Paragraph>
                    <span>Name:</span> {name}
                  </Paragraph>
                  <Paragraph>
                    <span>Phone:</span> {phone}
                  </Paragraph>
                  <Paragraph>
                    <span>Persons:</span> {how_many}
                  </Paragraph>
                  {room === "Choose room" || room === "" ? (
                    " "
                  ) : (
                    <Paragraph>
                      <span>Room:</span> {room}
                    </Paragraph>
                  )}
                  <Paragraph>
                    <span>Date:</span> {from_date} - {to_date}
                  </Paragraph>
                  <Paragraph className="paragraph-margin">
                    <span>Comments:</span> {comments}
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
