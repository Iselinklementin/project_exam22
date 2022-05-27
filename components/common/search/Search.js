import axios from "axios";
import Link from "next/link";
import Icon, { icons } from "../../../constants/icons";
import React, { useState, useEffect, useRef } from "react";
import { Container, Form, ListGroup, ListGroupItem, Spinner } from "react-bootstrap";
import { StyledButtonContainer, StyledIconWrap, StyledWideContainer } from "./Search.styled";
import { useWindowSize } from "../../../hooks/useWindowSize";
import { SCREEN } from "../../../constants/misc";
import { API_URL } from "../../../constants/api";
import { StyledBasicButton } from "../../../styles/buttons/StyledBasicButton.styled";

function Search() {
  const [stays, setStays] = useState([]);
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [noResult, setNoResult] = useState("");
  const showLoading = useRef(null);

  useEffect(() => {
    const loadStays = async () => {
      const response = await axios.get(API_URL);
      setStays(response.data);
    };
    loadStays();
  }, []);

  const size = useWindowSize();

  const handleDropdown = (value) => {
    showLoading.current.classList.add("show");
    setValue(value);
    setSuggestions([]);
  };

  const onChangeHandler = (value) => {
    if (!value.length) {
      setNoResult("");
    }

    let matches = [];

    if (value.length > 0) {
      matches = stays.filter((stay) => {
        const regex = new RegExp(`${value}`, "gi");
        setNoResult("");
        return stay.acf.title.match(regex);
      });
    }

    if (value.length && matches.length < 1) {
      setNoResult("Sorry, no results found..");
    }
    setSuggestions(matches);
    setValue(value);
  };

  return (
    <StyledWideContainer>
      <Container className="pb-4 pt-3">
        <StyledIconWrap>
          <Form.Label>Find your favourite place to stay</Form.Label>
          <Icon icon={icons.map((icon) => icon.search)} fontSize="16px" className="search-icon" color="#FC5156" />
          <Spinner
            ref={showLoading}
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
            className="loader"
          />
        </StyledIconWrap>

        <Form.Control
          type="text"
          placeholder="Search stays"
          aria-describedby="search"
          onChange={(e) => {
            onChangeHandler(e.target.value);
          }}
          value={value}
          onBlur={() => {
            setTimeout(() => {
              setSuggestions([]);
              setNoResult("");
            }, 100);
            setValue("");
          }}
        />
        <div className="split"></div>
        {noResult.length ? (
          <ListGroup>
            <ListGroupItem>{noResult}</ListGroupItem>
          </ListGroup>
        ) : (
          <ListGroup>
            {suggestions &&
              suggestions.map((suggestion, i) => (
                <Link href={`stays/${suggestion.id}`} key={suggestion.id}>
                  <a
                    onClick={() => {
                      handleDropdown(suggestion.acf.title);
                      setValue("Loading page..");
                    }}
                  >
                    <ListGroupItem key={i} action>
                      {suggestion.acf.title}
                    </ListGroupItem>
                  </a>
                </Link>
              ))}
          </ListGroup>
        )}
      </Container>
      {size.width >= SCREEN.tablet ? (
        <>
          <div style={{ width: "300px" }}>
            <StyledButtonContainer>
              <Link href="/stays">
                <StyledBasicButton className="px-3 btn btn-primary" role="button">
                  Explore all
                  <Icon icon={icons.map((icon) => icon.arrow)} color="white" fontSize="16px" className="ms-2" />
                </StyledBasicButton>
              </Link>
            </StyledButtonContainer>
          </div>
        </>
      ) : (
        ""
      )}
    </StyledWideContainer>
  );
}

export default Search;
