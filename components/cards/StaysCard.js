import PropTypes from "prop-types";
import { Card, Row, Col, Badge } from "react-bootstrap";
import { StyledCard } from "./StyledCards.styled";
import Icon, { icons } from "../../constants/icons";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { PLACEHOLDER_IMG } from "../../constants/misc";

// Reusable Cards-function

function StaysCard({ stays }) {
  return (
    <Row xs={1} sm={2} md={3} className="g-4">
      {stays.map((stay) => {
        let stars = JSON.stringify(stay.acf.stars);
        let numbersOfStars = parseInt(stars.charAt(2));
        return (
          <Col key={stay.id}>
            <Link href={`stays/${stay.id}`}>
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
                  width="200"
                  height="280"
                  className="card-img"
                  blurDataURL={PLACEHOLDER_IMG}
                  placeholder="blur"
                />

                <Card.Body>
                  <Card.Title>{stay.acf.title}</Card.Title>
                  {stay.acf.room.stay_type}
                  <div className="rating-container mb-2">
                    {[...Array(numbersOfStars)].map((e, i) => (
                      <Icon
                        icon={icons.map((icon) => icon.star)}
                        key={i}
                        color="white"
                        className="me-1"
                        fontSize="12px"
                      />
                    ))}
                  </div>
                  <Card.Text className="mt-3">
                    Prices from: <span className="fw-bold">{stay.acf.price},-</span>
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

export default StaysCard;

StaysCard.propTypes = {
  stays: PropTypes.array.isRequired,
};
