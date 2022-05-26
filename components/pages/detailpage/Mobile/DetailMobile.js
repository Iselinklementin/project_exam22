import PropTypes from "prop-types";
import Carousels from "../../../carousel/Carousel";
import ShowIcons from "../../../common/icons/ShowIcons";
import Heading from "../../../typography/Heading";
import { Description } from "../Description";
import { Location } from "../Location";
import { ShowRoomOption } from "../ShowRoomOption";
import { Container } from "react-bootstrap";
import { StyledContainer } from "../../../../styles/containers/StyledContainer.styled";

export const DetailMobile = ({
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
      <Container className="mt-5">
        <Carousels stays={images} />
        <div className="mt-4">
          <ShowIcons stay={include} />
        </div>
        <Description className="mt-5" hSize="2" heading="Description" body={description} />
      </Container>
      <Container>
        <Description className="mt-3" hSize="2" heading="Nice to know" body={nice_text} />
        <div className="d-flex">
          <Location
            className="ms-3"
            address={address.full_address}
            location={address.short_description}
          />
        </div>
        <div className="mt-4">
          <ShowIcons stay={nice_icons} />
        </div>
      </Container>
      <Container>
        <hr className="my-5" />
        <Heading size="3">Room</Heading>
        <ShowRoomOption
          stay_type={room.stay_type}
          room_type={room.room_type}
          price={price}
          id={id}
          info={room.room_info}
        />
      </Container>
    </StyledContainer>
  );
};

DetailMobile.propTypes = {
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
