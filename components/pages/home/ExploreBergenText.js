import Heading from "../../typography/Heading";
import Link from "next/link";
import Paragraph from "../../typography/Paragraph";
import Icon, { icons } from "../../../constants/icons";
import { ExploreContainer } from "../../../styles/pages/home/ExploreContainer.styled";
import { StyledBasicButton } from "../../../styles/buttons/StyledBasicButton.styled";
import { SCREEN } from "../../../constants/misc";
import { useWindowSize } from "../../../hooks/useWindowSize";

export const ExploreBergenText = () => {
  const size = useWindowSize();
  return (
    <ExploreContainer>
      {size.width >= SCREEN.tablet ? (
        <>
          <Heading size="2">
            We in Holidaze have the best places to stay, handpicked for you!
          </Heading>
          <Paragraph>
            We work hard to find the best local places. We connect you directly with them, so you
            get a better holiday and you both get a fairer deal.
          </Paragraph>

          <Link href="/stays">
            <StyledBasicButton className="px-3 btn btn-primary" role="button">
              Explore stays
              <Icon
                icon={icons.map(icon => icon.arrow)}
                color="white"
                fontSize="14px"
                className="ms-2 mt-1"
              />
            </StyledBasicButton>
          </Link>
        </>
      ) : (
        <>
          <Heading size="2">
            We in Holiday have the best places to stay, handpicked for you!
          </Heading>
          <Link href="/stays">
            <StyledBasicButton className="px-3 btn btn-primary" role="button">
              Explore stays
              <Icon
                icon={icons.map(icon => icon.arrow)}
                color="white"
                fontSize="14px"
                className="ms-2 mt-1"
              />
            </StyledBasicButton>
          </Link>
        </>
      )}
    </ExploreContainer>
  );
};
