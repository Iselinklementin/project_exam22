import Heading from "../components/typography/Heading";
import StaysCard from "../components/cards/StaysCard";
import Layout from "../components/layout/Layout";
import PageHead from "../components/layout/PageHead";
import axios from "axios";
import Paragraph from "../components/typography/Paragraph";
import PropTypes from "prop-types";
import React, { useState, createRef, useEffect } from "react";
import Icon, { icons } from "../constants/icons";
import { API_URL } from "../constants/api";
import { Chips } from "../components/common/filter/Chips";
import { Rating } from "../components/common/filter/Rating";
import { useWindowSize } from "../hooks/useWindowSize";
import { SCREEN } from "../constants/misc";
import { Container } from "react-bootstrap";
import { StyledContainer } from "../styles/containers/StyledContainer.styled";
import { StyledLine } from "../styles/pages/stays/StyledLine.styled";
import { useRouter } from "next/router";
import { ShowStayType } from "../components/pages/stays/ShowStayType";
import {
  StayHeading,
  StyledFilter,
  StyledFilterBtn,
  StyledFilterWrap,
} from "../components/common/filter/StyledFilter.styled";

export default function Stays({ stays }) {
  const [show, setShow] = useState(false);
  const [filterChips, setFilterChips] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [emptyResult, setEmptyResult] = useState(false);
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

  const btnClick = (e) => {
    let btnName = e.name === "bed" ? "Bed & Breakfast" : e.name;
    let [ratings, stay, newFilterItems, filterRateStay] = [[], [], [], []];
    let activeFilter;

    if (e.tagName === "BUTTON") {
      activeFilter = e.attributes[1].value.includes("active-filter");
    } else if (e.tagName === "INPUT") {
      activeFilter = e.attributes[2].value.includes("active-filter");
    }

    stays.map((item) => {
      if (activeFilter) {
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
          let checkStay = item.acf.room.stay_type.toLowerCase() === chip.toLowerCase();
          let checkRating = item.acf.stars[0] === chip;

          // If the item returns true, push them to each array
          checkStay ? stay.push(item) : "";
          checkRating ? ratings.push(item) : "";

          // if the array stores an item, show them in cards (using filter usestate)
          if (stay.length) {
            newFilterItems = stay;
          } else if (ratings.length) {
            newFilterItems = ratings;
          }
          // if both arrays stores an item, filter and remove duplicates
          if (stay.length && ratings.length) {
            stay.filter((place) => {
              ratings.filter((rate) => {
                if (rate.id === place.id) {
                  if (checkRating || checkStay) {
                    filterRateStay.push(rate);
                  }
                } else if (!filterRateStay.length) {
                  return setEmptyResult(true);
                }
              });
              newFilterItems = [...new Set(filterRateStay)];
            });
          }
        });

        if (!newFilterItems.length) {
          setEmptyResult(true);
        } else {
          setFiltered(newFilterItems);
          setEmptyResult(false);
        }
      }
    });
  };

  const CreateHtml = () => {
    if (emptyResult) {
      return <div className="text-center">Sorry, no results found.</div>;
    } else if (filtered.length) {
      return (
        <>
          <Paragraph>{filtered.length} results found:</Paragraph>
          <StaysCard stays={filtered} />
        </>
      );
    }

    return (
      <>
        <ShowStayType title="Hotels" array={hotels} />
        <ShowStayType title="Apartment" array={apartment} />
        <ShowStayType title="Bed & Breakfast" array={bedbreakfast} />
      </>
    );
  };

  return (
    <Layout>
      <PageHead
        title="Stays in Bergen"
        content="Look through all of our places to stay. Book hotels, apartments og Bed & breakfast in Bergen."
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <StyledContainer className="py-4">
        <Container>
          <StayHeading className="mt-3" size="1">
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
                <StyledLine className="line"></StyledLine>
              </StyledFilterBtn>

              <StyledFilterWrap className="mt-0">
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

Stays.propTypes = {
  stays: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
