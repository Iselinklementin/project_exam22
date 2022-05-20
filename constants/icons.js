import { FaUser, FaShoppingBag, FaUserPlus, FaLock, FaCoins, FaBed, FaHeart } from "react-icons/fa";
import {
  MdEmail,
  MdShortText,
  MdError,
  MdCheckCircle,
  MdPool,
  MdPets,
  MdKitchen,
  MdWifi,
  MdTextFields,
  MdLogout,
  MdOutlineClose,
} from "react-icons/md";
import { GoSignOut } from "react-icons/go";
import { HiPlusSm } from "react-icons/hi";
import { ImSpoonKnife } from "react-icons/im";
import { IoMdImages, IoLogoNoSmoking, IoIosMore, IoIosMenu, IoMdMore } from "react-icons/io";
import { IoChatbubblesSharp, IoBedSharp, IoLocationSharp, IoCloseCircle } from "react-icons/io5";
import { RiHotelFill, RiImageFill, RiParkingBoxFill } from "react-icons/ri";
import { GrWheelchair } from "react-icons/gr";
import {
  BsFillTelephoneFill,
  BsStarFill,
  BsFillCalendarCheckFill,
  BsSearch,
  BsFilter,
  BsFillClockFill,
  BsFillArrowRightCircleFill,
  BsJustifyLeft,
  BsTrash,
} from "react-icons/bs";
import PropTypes from "prop-types";
import { IconContext } from "react-icons";

export const icons = [
  {
    trash: <BsTrash key="trash" />,
  },
  {
    close: <MdOutlineClose key="close" />,
  },
  {
    moreHorizontal: <IoMdMore key="moreHorizontal" />,
  },
  {
    arrow: <BsFillArrowRightCircleFill key="arrow" />,
  },
  {
    burger: <IoIosMenu key="burger" />,
  },
  {
    breakfast: <ImSpoonKnife key="breakfast" />,
  },
  {
    filter: <BsFilter key="filter" />,
  },
  {
    star: <BsStarFill key="star" />,
  },
  {
    title: <MdTextFields key="title" />,
  },
  {
    free_parking: <RiParkingBoxFill key="free_parking" />,
  },
  {
    wifi: <MdWifi key="wifi" />,
  },
  {
    kitchen: <MdKitchen key="kitchen" />,
  },
  {
    location: <IoLocationSharp key="location" />,
  },
  {
    pet_friendly: <MdPets key="pet_friendly" />,
  },
  {
    swimming_pool: <MdPool key="swimming_pool" />,
  },
  {
    check: <MdCheckCircle key="check" />,
  },
  {
    error: <MdError key="error" />,
  },
  {
    more: <IoIosMore key="more" />,
  },
  {
    plus: <HiPlusSm key="plus" />,
  },
  {
    images: <IoMdImages key="images" />,
  },
  {
    image: <RiImageFill key="image" />,
  },
  {
    heart: <FaHeart key="heart" />,
  },
  {
    text: <BsJustifyLeft key="text" />,
  },
  {
    shortText: <MdShortText key="shortText" />,
  },
  {
    email: <MdEmail key="email" />,
  },
  {
    user: <FaUser key="user" />,
  },
  {
    phone: <BsFillTelephoneFill key="phone" />,
  },
  {
    userplus: <FaUserPlus key="userplus" />,
  },
  {
    logout: <GoSignOut key="logout" />,
  },
  {
    calendar: <BsFillCalendarCheckFill key="calendar" />,
  },
  {
    bag: <FaShoppingBag key="bag" />,
  },
  {
    search: <BsSearch key="search" />,
  },
  {
    check_in: <BsFillClockFill key="check_in" />,
  },
  {
    checkout: <BsFillClockFill key="checkout" />,
  },
  {
    lock: <FaLock key="lock" />,
  },
  {
    chat: <IoChatbubblesSharp key="chat" />,
  },
  {
    price: <FaCoins key="price" />,
  },
  {
    bed: <FaBed key="bed" />,
  },
  {
    hotel: <RiHotelFill key="hotel" />,
  },
  {
    handicap_friendly: <GrWheelchair key="handicap_friendly" />,
  },
  {
    apartment: <IoBedSharp key="apartment" />,
  },
  {
    no_smoking: <IoLogoNoSmoking key="no_smoking" />,
  },
];

const Icon = ({ icon, fontSize, color, className }) => {
  return (
    <>
      <IconContext.Provider value={{ style: { fontSize, color }, className }}>{icon}</IconContext.Provider>
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.node.isRequired,
  fontSize: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
};

// Icon.defaultProps = {
//   fontSize: "20px",
//   // color: "#1E1B21",
// };

export default Icon;

// <div style={{ paddingTop: "3px", display: "flex" }}>
