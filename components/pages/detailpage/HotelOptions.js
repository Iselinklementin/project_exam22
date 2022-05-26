import PropTypes from "prop-types";
import Link from "next/link";
import Paragraph from "../../../components/typography/Paragraph";
import Icon, { icons } from "../../../constants/icons";
import { StyledMobileButton } from "../../../styles/buttons/StyledMobileButton.styled";
import { StyledSelect } from "../../forms/styles/StyledSelect.styled";
import { useState } from "react";

export const HotelOptions = ({ options, id }) => {
  const [roomOption, setRoomOption] = useState("Choose room");

  const handleInput = (newValue) => {
    setRoomOption(newValue.value);
    return newValue;
  };

  return (
    <div>
      <Paragraph>{roomOption}</Paragraph>
      <StyledSelect
        options={options}
        instanceId="select_one"
        className="select"
        classNamePrefix="react-select"
        onChange={handleInput}
      />

      <Link href={{ pathname: `/enquire/${id}`, query: { room: roomOption } }} className="mt-4">
        <StyledMobileButton className="btn primary-btn mt-4" role="button">
          <Icon icon={icons.map((icon) => icon.bag)} color="white" fontSize="16px" className="me-2" />
          Enquire
        </StyledMobileButton>
      </Link>
    </div>
  );
};

HotelOptions.propTypes = {
  options: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
};
