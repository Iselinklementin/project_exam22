import React, { useEffect, useState } from "react";
import axios from "axios";
import { ENQUIRES_URL } from "../../../constants/api";
import { Accordion } from "react-bootstrap";
import Loader from "../../common/loader/Loader";
import Alertbox from "../../common/alert/Alertbox";
import { StyledAccordion } from "../../../styles/pages/admin/StyledAccordion.styled";
import Icon, { icons } from "../../../constants/icons";
import { RemoveWords } from "../../common/functions/RemoveWords";
import Paragraph from "../../typography/Paragraph";
import ReturnIcon from "../../common/icons/ReturnIcon";

// Alt utenom fetch er likt som Messages.
// Prøv å samle det og bare skift url og return

export default function Enquires() {
  const [contact, setContact] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getEnquires() {
      try {
        const response = await axios.get(ENQUIRES_URL);
        if (response.status === 200) {
          // console.log(response.data);
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
    return <Loader />;
  }

  if (error) {
    return (
      <Alertbox className="mt-5" type="danger">
        Sorry, something went wrong.
      </Alertbox>
    );
  }

  let count = 0;

  return (
    <StyledAccordion>
      <Accordion defaultActiveKey="0" flush>
        {contact.map((item) => {
          count++;
          let received = item.acf.date_received;

          return (
            <Accordion.Item eventKey={count}>
              <Accordion.Header>
                <div className="d-block">
                  <Paragraph className="acc-heading">
                    <span>{item.acf.stay_title}</span>
                  </Paragraph>
                  <Paragraph className="acc-heading">{item.acf.name}</Paragraph>
                </div>

                <div className="received-container">
                  <p className="date">{RemoveWords(received)}</p>
                  <Icon className="ms-3" icon={icons.map((icon) => icon.email)} />
                </div>
              </Accordion.Header>

              <Accordion.Body className="d-flex">
                {ReturnIcon(item.acf.type_of_stay)}

                <div className="text-container">
                  <Paragraph>
                    <span>Stay:</span> {item.acf.stay_title}
                  </Paragraph>
                  <Paragraph>
                    <span>Name:</span> {item.acf.name}
                  </Paragraph>
                  <Paragraph>
                    <span>Phone:</span> {item.acf.phone}
                  </Paragraph>
                  <Paragraph>
                    <span>Persons:</span> {item.acf.how_many}
                  </Paragraph>

                  {item.acf.room === "Choose room" || item.acf.room === "" ? (
                    " "
                  ) : (
                    <Paragraph>
                      <span>Room:</span> {item.acf.room}
                    </Paragraph>
                  )}
                  <Paragraph>
                    <span>Date:</span> {item.acf.from_date} - {item.acf.to_date}
                  </Paragraph>
                  <Paragraph className="paragraph-margin">
                    <span>Comments:</span> {item.acf.comments}
                  </Paragraph>
                  <Paragraph>
                    <span>Email:</span> {item.acf.email}
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
