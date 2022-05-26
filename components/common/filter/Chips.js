import CapitalizeFirstLetter from "../functions/CapitalizeFirstLetter";
import styled from "styled-components";
import Heading from "../../../components/typography/Heading";
import React, { forwardRef } from "react";
import Icon, { icons } from "../../../constants/icons";
import { StyledFilter } from "./StyledFilter.styled";
import { mediaQ } from "../../../styles/global/ThemeConfig";

const StyledHeading = styled(Heading)`
  font-size: 16px;

  @media ${mediaQ.desktop_large} {
    font-size: 18px;
  }
`;

export const Chips = forwardRef((props, ref) => {
  const stays = ["bed", "apartment", "hotel"];

  const clickedButtonHandler = (e) => {
    e.currentTarget.classList.toggle("active");
  };

  return (
    <>
      <StyledFilter className="mt-5 mt-md-0 ms-lg-5">
        <div className="filter-laptop">
          <div className="d-flex mt-5 mb-1">
            <Icon icon={icons.map((icon) => icon.heart)} fontSize="15px" className="me-2" />
            <StyledHeading size="2">Type of stay</StyledHeading>
          </div>

          {stays.map((btnName) => {
            let removeUnderscore = btnName.replace("_", " ");
            let newBtnName = CapitalizeFirstLetter(removeUnderscore);
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
                {newBtnName === "Bed" ? "Bed & Breakfast" : newBtnName}
              </button>
            );
          })}
        </div>
      </StyledFilter>
    </>
  );
});
