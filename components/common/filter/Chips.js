import { Container, Form } from "react-bootstrap";
import React, { forwardRef, useRef, useState } from "react";
import Icon, { icons } from "../../../constants/icons";
import { StyledFilter } from "./StyledFilter.styled";
import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";
import styled from "styled-components";
import Heading from "../../../components/typography/Heading";

const StyledHeading = styled(Heading)`
  font-size: 16px;
`;

export const Chips = forwardRef((props, ref) => {
  const clickedButtonHandler = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  let stayIcons = "";
  // ✕
  const ShowIcon = (btnName) => {
    icons.map((icon) => {
      let keys = Object.keys(icon);
      if (keys.includes(btnName)) {
        stayIcons = icon;
      }
    });

    return (
      <Icon
        icon={Object.entries(stayIcons)[0][1]}
        name={Object.entries(stayIcons)[0]}
        fontSize="16px"
        className="me-2"
      />
    );
  };

  const buttons = [
    "swimming_pool",
    "bed",
    "hotel",
    "kitchen",
    "free_parking",
    "breakfast",
    "apartment",
    "pet_friendly",
    "wifi",
  ];

  return (
    <>
      <StyledFilter className="mt-5 mt-md-0 ms-md-5">
        <div className="filter-tablet">
          <div className="d-flex mb-3">
            <Icon icon={icons.map((icon) => icon.heart)} fontSize="15px" className="me-2" />
            <StyledHeading size="3">Keywords</StyledHeading>
          </div>
          {buttons.map((btnName) => {
            let removeLine = btnName.replace("_", " ");
            let newBtnName = CapitalizeFirstLetter(removeLine);
            return (
              <button
                key={btnName}
                name={btnName}
                ref={ref}
                onClick={(e) => {
                  clickedButtonHandler(e, btnName);
                  props.clicked(e.target);
                }}
                className="me-2 mt-2"
              >
                {/* Nå er ikke ikonene koblet opp, kan fjernes hvis jeg ikke fikser (med funksjonen) */}
                {/* {ShowIcon(btnName)} */}
                {newBtnName === "Bed" ? "Bed & Breakfast" : newBtnName}
              </button>
            );
          })}
        </div>
      </StyledFilter>
    </>
  );
});
