import React from "react";
import PropTypes from "prop-types";
import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";
import { Col, Row } from "react-bootstrap";
import Paragraph from "../../typography/Paragraph";
import FilterIcons from "./FilterIcons";

// This stay includes

function ShowIcons({ stay }) {
  let includes = Object.entries(stay);

  return (
    <Row xs={1} className="g-1 gy-2 mt-2">
      {includes.map(include => {
        let thisIncludes = include[0].replace("_", " ");
        let date = [];

        // If the string is check-in or checkout, its needs to
        // show the time too.

        if (typeof include[1] === "string") {
          let checkInOut = include[0].replace("_", " ");
          let checkin_out = checkInOut + " : " + include[1];
          date.push(CapitalizeFirstLetter(checkin_out));
        }

        return include[1] ? (
          <Col className="d-flex align-items-center" key={include[0]}>
            <FilterIcons includes={include[1]} iconIncludes={include[0]} />
            <Paragraph className="m-0">
              {date.length ? date : CapitalizeFirstLetter(thisIncludes)}
            </Paragraph>
          </Col>
        ) : (
          ""
        );
      })}
    </Row>
  );
}

export default ShowIcons;

ShowIcons.propTypes = {
  value: PropTypes.object,
};
