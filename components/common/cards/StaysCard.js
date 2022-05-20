import { Card, Row, Col, Badge } from "react-bootstrap";
import { StyledCard } from "./StyledCards.styled";
import Icon, { icons } from "../../../constants/icons";
import Image from "next/image";
import Placeholder from "../../../assets/placeholder.jpg";
import React from "react";
import Link from "next/link";
import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";

function StaysCard(props) {
  return (
    <Row xs={1} sm={2} lg={4} className="g-4">
      {props.stays.map((stay) => {
        let stars = JSON.stringify(stay.acf.stars);
        let numbersOfStars = parseInt(stars.charAt(2));
        let includes = Object.entries(stay.acf.stay_includes);

        return (
          <Col key={stay.id}>
            <Link href={`stay/${stay.id}`}>
              <StyledCard>
                <Badge bg="light" text="dark" className="pe-3">
                  <Icon icon={icons.map((icon) => icon.location)} color="#FC5156" className="me-1" />
                  {stay.acf.address.short_description}
                </Badge>

                <Image
                  variant="top"
                  quality={60}
                  src={stay.acf.image.image_1.url}
                  alt={stay.acf.image.image_1.alt}
                  objectFit="cover"
                  width={320}
                  height={320}
                  className="card-img"
                  // blurDataURL={Placeholder}
                />

                <Card.Body>
                  <Card.Title>{stay.acf.title}</Card.Title>
                  {stay.acf.room.stay_type}
                  <div className="rating-container mb-3">
                    {[...Array(numbersOfStars)].map((e, i) => (
                      <Icon
                        icon={icons.map((icon) => icon.star)}
                        key={i}
                        color="white"
                        className="me-1"
                        fontSize="10px"
                      />
                    ))}
                  </div>
                  <Card.Text>
                    {includes.map((include) => {
                      let thisIncludes = include[0].replace("_", " ");
                      return include[1] ? (
                        <span className="me-2 keywords" key={thisIncludes}>
                          {CapitalizeFirstLetter(thisIncludes)}
                        </span>
                      ) : (
                        ""
                      );
                    })}
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </Link>
          </Col>
        );
      })}
    </Row>
  );
}
// }

export default StaysCard;
