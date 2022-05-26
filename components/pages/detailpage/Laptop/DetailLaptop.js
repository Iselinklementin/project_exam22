import PropTypes from "prop-types";
import Carousels from "../../../carousel/Carousel";
import ShowIcons from "../../../common/icons/ShowIcons";
import styled from "styled-components";
import { StyledContainer } from "../../../../styles/containers/StyledContainer.styled";
import { Description } from "../Description";
import { Location } from "../Location";
import { ShowRoomOption } from "../ShowRoomOption";

const StyledNiceToKnow = styled.div`
  width: 720px;
  padding-right: 2rem;
`;

const StyledSplit = styled.div`
  border-left: solid thin grey;
  height: 105px;
`;

export const DetailLaptop = ({
  price,
  include,
  description,
  nice_text,
  nice_icons,
  address,
  images,
  room,
  id,
}) => {
  return (
    <StyledContainer>
      <div className="d-flex flex-row justify-content-between">
        <Carousels stays={images} />
        <div className="ms-5" style={{ minWidth: "375px" }}>
          <ShowIcons stay={include} />
          <Description className="mt-5" hSize="2" heading="Description" body={description} />
          <ShowRoomOption
            stay_type={room.stay_type}
            room_type={room.room_type}
            price={price}
            id={id}
            info={room.room_info}
          />
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-between align-items-center">
        <StyledNiceToKnow className="border-right">
          <Description className="mt-3" hSize="2" heading="Nice to know" body={nice_text} />
          <div className="d-flex mt-4">
            <Location
              className="ms-5"
              address={address.full_address}
              location={address.short_description}
            />
          </div>
        </StyledNiceToKnow>
        <StyledSplit></StyledSplit>
        <div className="ms-5">
          <ShowIcons stay={nice_icons} />
        </div>
      </div>
    </StyledContainer>
  );
};

DetailLaptop.propTypes = {
  price: PropTypes.string.isRequired,
  include: PropTypes.object.isRequired,
  description: PropTypes.string.isRequired,
  nice_text: PropTypes.string.isRequired,
  nice_icons: PropTypes.object.isRequired,
  address: PropTypes.object.isRequired,
  images: PropTypes.array.isRequired,
  room: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
};
