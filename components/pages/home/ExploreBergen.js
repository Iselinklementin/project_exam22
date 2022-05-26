import IntroImg from "../../../assets/index_img.jpg";
import IntroImgDesktop from "../../../assets/introimagedesktop.jpg";
import Image from "next/image";
import { SCREEN } from "../../../constants/misc";
import { ExploreBergenText } from "./ExploreBergenText";
import { StyledContainer } from "../../../styles/containers/StyledContainer.styled";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const ExploreBergen = () => {
  const size = useWindowSize();
  return (
    <div className="position-relative">
      {size.width <= SCREEN.small_tablet ? (
        <>
          <Image
            src={IntroImg}
            placeholder="blur"
            alt="Girl standing on a mountain near Bergen"
            layout="responsive"
            objectFit="cover"
          />
          <ExploreBergenText />
        </>
      ) : (
        <StyledContainer className="position-relative" style={{ height: "400px" }}>
          <Image
            src={IntroImgDesktop}
            placeholder="blur"
            alt="Girl standing on a mountain near Bergen"
            layout="fill"
            objectFit="cover"
          />
          <ExploreBergenText />
        </StyledContainer>
      )}
    </div>
  );
};
