import { Card, Row, Col, Badge } from "react-bootstrap";
import { StyledCard } from "./StyledCards.styled";
import Icon, { icons } from "../../../constants/icons";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";
import { PLACEHOLDER_IMG } from "../../../constants/misc";

function StaysCard({ stays }) {
  return (
    <Row xs={1} sm={2} lg={3} className="g-4">
      {stays.map((stay) => {
        let stars = JSON.stringify(stay.acf.stars);
        let numbersOfStars = parseInt(stars.charAt(2));
        let includes = Object.entries(stay.acf.stay_includes);
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
                  width={300}
                  height={360}
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
                        fontSize="10px"
                      />
                    ))}
                  </div>
                  <Card.Text>
                    Prices from: <span className="fw-bold">{stay.acf.price},-</span>
                    <br />
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

export default StaysCard;

// let propLength = props.stays.length >= 1 ? true : false;

// let numbersOfStarsTest;
// let includesTest;

// if (props.stays.length === 1) {
//   let starsTest = JSON.stringify(props.stay.acf.stars);
//   numbersOfStarsTest = parseInt(props.stay.charAt(2));
//   includesTest = Object.entries(props.stay.acf.stay_includes);
// }
// console.log("Dette er props:");
// console.log(props.stays);

// {props.stays.length > 1 ? (
//   <>
//     {/* <Row xs={1} sm={2} lg={4} className="g-4"> */}
//     {props.stays.map((stay) => {
//       let stars = JSON.stringify(stay.acf.stars);
//       let numbersOfStars = parseInt(stars.charAt(2));
//       let includes = Object.entries(stay.acf.stay_includes);

//       return (

//       );
//     })}
//     {/* </Row> */}
//   </>
// ) : (
//   // <Row xs={1} sm={2} lg={4} className="g-4">
//   <Col key={props.stays[0].id}>
//     <Link href={`stays/${props.stays[0].id}`}>
//       <StyledCard>
//         <Badge bg="light" text="dark" className="pe-3">
//           <Icon icon={icons.map((icon) => icon.location)} color="#FC5156" className="me-1" />
//           {props.stays[0].acf.address.short_description}
//         </Badge>

//         <Image
//           variant="top"
//           quality={60}
//           src={props.stays[0].acf.image.image_1.url}
//           alt={props.stays[0].acf.image.image_1.alt}
//           objectFit="cover"
//           width={300}
//           height={400}
//           className="card-img"
//           // blurDataURL={Placeholder}
//         />

//         <Card.Body>
//           <Card.Title>{props.stays[0].acf.title}</Card.Title>
//           {props.stays[0].acf.room.stay_type}
//           <div className="rating-container mb-2">
//             {[...Array(numbersOfStarsTest)].map((e, i) => (
//               <Icon
//                 icon={icons.map((icon) => icon.star)}
//                 key={i}
//                 color="white"
//                 className="me-1"
//                 fontSize="10px"
//               />
//             ))}
//           </div>
//           <Card.Text>
//             {/* Prices from: <span className="fw-bold">{stay.acf.price},-</span> */}
//             {includesTest.map((include) => {
//               let thisIncludes = include[0].replace("_", " ");
//               return include[1] ? (
//                 <span className="me-2 keywords" key={thisIncludes}>
//                   {CapitalizeFirstLetter(thisIncludes)}
//                 </span>
//               ) : (
//                 ""
//               );
//             })}
//           </Card.Text>
//         </Card.Body>
//       </StyledCard>
//     </Link>
//   </Col>
//   // </Row>
// )}
