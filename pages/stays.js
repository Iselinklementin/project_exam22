import React, { useState, createRef, useEffect } from "react";
import Heading from "../components/typography/Heading";
import Layout from "../components/layout/Layout";
import PageHead from "../components/layout/PageHead";
import axios from "axios";
import Paragraph from "../components/typography/Paragraph";
import Icon, { icons } from "../constants/icons";
import { API_URL } from "../constants/api";
// import { getStays } from "../constants/getStays";
import StaysCard from "../components/common/cards/StaysCard";
import {
  StayHeading,
  StyledFilter,
  StyledFilterBtn,
  StyledFilterWrap,
} from "../components/common/filter/StyledFilter.styled";
import { Chips } from "../components/common/filter/Chips";
import { Rating } from "../components/common/filter/Rating";
import { useWindowSize } from "../hooks/useWindowSize";
import { SCREEN } from "../constants/misc";
import { Container, Row } from "react-bootstrap";
import { StyledContainer } from "../styles/containers/StyledContainer.styled";
import { StyledLine } from "../styles/pages/stays/StyledLine.styled";
import styled from "styled-components";
import { useRouter } from "next/router";

const StyledParagraph = styled(Paragraph)`
  font-size: 14px;
`;

function stays({ stays }) {
  const [show, setShow] = useState(false);
  const [filterChips, setFilterChips] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [emptyResult, setEmptyResult] = useState("");

  let filteredBtnOn = [];
  const size = useWindowSize();
  const router = useRouter();
  const query = router.query;
  const sortType = query.type;
  const ref = createRef();
  let hotels = stays.filter((stay) => stay.acf.room.stay_type === "Hotel");
  let apartment = stays.filter((stay) => stay.acf.room.stay_type === "Apartment");
  let bedbreakfast = stays.filter((stay) => stay.acf.room.stay_type === "Bed & Breakfast");

  useEffect(() => {
    let btns = ref.current.parentElement.children;
    let btnsArray = [...btns];
    let apartmentBtn = btnsArray.find((btn) => btn.innerText === "Apartment");
    let hotelBtn = btnsArray.find((btn) => btn.innerText === "Hotel");
    let bedBreakftBtn = btnsArray.find((btn) => btn.innerText === "Bed & Breakfast");

    switch (sortType) {
      case "Apartment":
        filterChips.push("apartment");
        setFiltered(apartment);
        apartmentBtn.classList.add("active");
        apartmentBtn.classList.add("active-filter");
        break;
      case "Bedbreakfast":
        filterChips.push("Bed & Breakfast");
        setFiltered(bedbreakfast);
        bedBreakftBtn.classList.add("active");
        bedBreakftBtn.classList.add("active-filter");
        break;
      case "Hotel":
        filterChips.push("hotel");
        setFiltered(hotels);
        hotelBtn.classList.add("active");
        hotelBtn.classList.add("active-filter");
        break;
    }
  }, []);

  const ShowStayType = ({ title, array }) => {
    return (
      <div className="mt-5">
        <Heading size="2">{title}</Heading>
        <StyledLine className="mb-4"></StyledLine>
        <StaysCard stays={array} />
      </div>
    );
  };

  // HUSK å gå gjennom navnene her

  const btnClick = (e) => {
    let btnName = e.name === "bed" ? "Bed & Breakfast" : e.name;
    let keywords = [];
    let ratings = [];
    let stay = [];

    let activeFilter;

    if (e.tagName === "BUTTON") {
      activeFilter = e.attributes[1].value.includes("active-filter");
    } else if (e.tagName === "INPUT") {
      activeFilter = e.attributes[2].value.includes("active-filter");
    }

    stays.map((item) => {
      // sjekk aktiv, fjern hvis aktiv
      if (activeFilter) {
        // fjern denne fra filter
        let newChips = [...new Set(filterChips)];
        let newFilter = newChips;

        newChips.map((name) => {
          if (btnName == name || e.checked) {
            newFilter = newChips.filter((name) => name !== btnName);
            e.classList.remove("active-filter");
          }
        });

        if (!newFilter.length) {
          setFilterChips([]);
          return setFiltered([]);
        } else {
          setFilterChips(() => [...newFilter]);
          filterItems(newFilter, btnName);
        }
      } else {
        filterChips.push(btnName);
        e.classList.add("active-filter");
        filterItems(filterChips, btnName);
      }

      function filterItems(array, btnName) {
        let newChips = [...new Set(array)];
        newChips.map((chip) => {
          // finner riktig navn på include og returnerer den
          let checkName = Object.entries(item.acf.stay_includes).find((name) => (name[0] === chip ? name[1] : ""));
          let checkStay = item.acf.room.stay_type.toLowerCase() === chip.toLowerCase();
          let checkRating = item.acf.stars[0] === chip;

          checkName ? keywords.push(item) : "";
          checkStay ? stay.push(item) : "";
          checkRating ? ratings.push(item) : "";

          // filteredBtnOn.push(item);
          // // denne skal finne duplikater og vise kun èn
          // const itemExists = filteredBtnOn.find((arr) => arr.id === item.id);
          // let newFilter = filteredBtnOn.sort();

          // if (itemExists) {
          //   newFilter = [...new Set(filteredBtnOn)];
          // }
          // return setFiltered(() => [...newFilter]);
        });

        let keywordsLength = keywords.length;
        let ratingsLength = ratings.length;
        let stayLength = stay.length;
        let newFilterItems = [];

        if (stayLength) {
          newFilterItems = stay;
        } else if (ratingsLength) {
          newFilterItems = ratings;
        } else if (keywordsLength) {
          newFilterItems = keywords;
        }

        // sjekker rating og type stay opp mot hverandre, og funker
        if (stayLength && ratingsLength) {
          let checkID;
          let array = [];

          stay.filter((stays) => {
            ratings.find((rate) => {
              if (rate.id === stays.id) {
                if (findWithKeywords(stays)) {
                  array.push(stays);
                  checkID = true;
                } else {
                  newFilterItems = [];
                  checkID = false;
                }
              }
            });
          });

          if (!checkID) {
            array = [];
          }
          newFilterItems = array;
        }

        // sjekker keywords og type stay opp mot hverandre, og funker

        if (keywordsLength && stayLength) {
          let checkID;
          let array = [];

          stay.filter((stays) => {
            keywords.find((key) => {
              if (stays.id === key.id) {
                if (findWithKeywords(key)) {
                  array.push(key);
                  checkID = true;
                } else {
                  checkID = false;
                }
              }
            });
          });
          if (!checkID) {
            array = [];
          }
          newFilterItems = array;
        }

        // sjekker keywords og rating opp mot hverandre, og funker
        if (keywordsLength && ratingsLength) {
          let checkID;
          let array = [];

          ratings.filter((rate) => {
            keywords.find((key) => {
              if (key.id === rate.id) {
                if (findWithKeywords(key)) {
                  array.push(key);
                  checkID = true;
                } else {
                  checkID = false;
                }
              }
            });
          });

          if (!checkID) {
            array = [];
          }
          newFilterItems = array;
        }

        if (keywordsLength && ratingsLength && stayLength) {
          let checkID;
          let array = [];

          ratings.filter((rate) => {
            stay.filter((stay) => {
              keywords.find((key) => {
                // nå sjekker den bare key, burde sjekke btnName!

                if (findWithKeywords(key)) {
                  if (key.id === rate.id && key.id === stay.id && stay.id === rate.id) {
                    array.push(key);
                    checkID = true;
                  } else {
                    checkID = false;
                  }
                }
              });
            });
          });
          if (!checkID) {
            array = [];
          }
          newFilterItems = array;
        }

        // denne sjekker flere keywords mot stay og fungerer sånn passe, ikke hvis jeg fjerner tror jeg
        function findWithKeywords(key) {
          if (btnName) {
            let checkIncludes = Object.entries(key.acf.stay_includes).find((name) =>
              name[0] === btnName ? name[1] : ""
            );
            let checkStays = key.acf.room.stay_type.toLowerCase() === btnName.toLowerCase();
            let checkRatings = key.acf.stars[0] === btnName;
            if (checkIncludes || checkStays || checkRatings) {
              return true;
            } else {
              return false;
            }
          }
        }

        // console.log("dette er newFilterItems");
        // console.log(newFilterItems);
        // return setFiltered(() => [...newFilterItems]);
        // console.log("newFilterItems");
        // console.log(newFilterItems);

        if (!newFilterItems.length) {
          console.log("array is empty, start removing words");
          return setFiltered([]);
        } else {
          return setFiltered(newFilterItems);
        }
      }
    });
  };

  const CreateHtml = () => {
    // console.log("dette er filtered:");
    // console.log(filtered);

    if (filtered.length) {
      return (
        <Row xs={1} sm={2} lg={4} className="g-4">
          <StaysCard stays={filtered} />
        </Row>
      );
    } else {
      return (
        <>
          <div>Empty result</div>
        </>
      );
      // return (
      //   <Row xs={1} sm={2} lg={4} className="g-4">
      //     <StaysCard stays={stays} />
      //   </Row>
      // );
    }

    // console.log(filtered);
    // let length = filtered.length;
    // console.log(emptyResult.length);
    // return (
    //   <>
    //     {emptyResult.length ? (
    //       <div>{emptyResult}</div>
    //     ) : (
    //       <>
    //         <StyledParagraph className="mb-4">Showing {length} stays in Bergen:</StyledParagraph>
    //         <StaysCard stays={filtered} />
    //       </>
    //     )}
    //   </>
    // );
    // <>
    // {
    //       emptyResult.length ? (
    //         <div>{emptyResult}</div>
    //       ) : (
    //         <>
    //           <StyledParagraph className="mb-4">Showing {length} stays in Bergen:</StyledParagraph>
    //           <StaysCard stays={filtered} />
    //         </>
    //       );
    //     }
    // </>
  };

  // return (
  //   <>

  //   </>
  // );

  return (
    <Layout>
      <PageHead
        title="Stays in Bergen"
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <StyledContainer className="py-4">
        <Container>
          <StayHeading className="mt-3" size="1" style={{ maxWidth: "200px" }}>
            Book a stay with free cancellation <span style={{ color: "#FC5156" }}>- apply now!</span>
          </StayHeading>
        </Container>

        {size.width <= SCREEN.tablet ? (
          <Container>
            <StyledFilterBtn role="button" className="d-flex mt-5" onClick={() => setShow(!show)}>
              <Icon icon={icons.map((icon) => icon.filter)} color="#FC5156" className="me-2" fontSize="24px" />
              <Paragraph>Filter search</Paragraph>
            </StyledFilterBtn>
            <StyledFilter>
              <div className={show ? "filter-container p-4" : "filter-container p-4 hidden"}>
                <Rating click={(e) => btnClick(e)} />
                <Chips clicked={(e) => btnClick(e)} ref={ref} />
              </div>
            </StyledFilter>
          </Container>
        ) : (
          <>
            <Container>
              <StyledFilterBtn className="d-flex mb-4 mt-5">
                <Paragraph>Filter search</Paragraph>
                <div className="line"></div>
              </StyledFilterBtn>

              <StyledFilterWrap>
                <Rating click={(e) => btnClick(e)} />
                <Chips clicked={(e) => btnClick(e)} ref={ref} />
              </StyledFilterWrap>
            </Container>
          </>
        )}

        <Container>
          <hr className="mb-5" />
          <CreateHtml />
        </Container>
      </StyledContainer>
    </Layout>
  );
}

export default stays;

export async function getStaticProps() {
  let stays = [];

  try {
    const response = await axios.get(API_URL + "?per_page=20");
    stays = response.data;
  } catch (error) {
    console.log(error);
  }
  return { props: { stays: stays } };
}
