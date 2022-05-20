import PageHead from "../components/layout/PageHead";
import { useWindowSize } from "../hooks/useWindowSize";
import { SCREEN } from "../constants/misc";
import { getStays } from "../constants/getStays";
import { Intro } from "../components/pages/home/Intro";
import { ExploreBergen } from "../components/pages/home/ExploreBergen";
import { LinkStays } from "../components/pages/home/LinkStays";
import { SearchBox } from "../components/common/search/Search.styled";
import { Container } from "react-bootstrap";
import Image from "next/image";
import Search from "../components/common/search/Search";
import IntroImg from "../assets/index_img.jpg";
import IntroImgDesktop from "../assets/introimagedesktop.jpg";
import Heading from "../components/typography/Heading";
import Layout from "../components/layout/Layout";
import StaysCard from "../components/common/cards/StaysCard";
import { StyledContainer } from "../styles/containers/StyledContainer.styled";

export default function Home({ stays }) {
  let featured = stays.filter((stay) => stay.acf.featured === true);
  const size = useWindowSize();

  return (
    <>
      <PageHead
        title="Holidaze"
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <Intro />
        <SearchBox className="d-flex flex-column justify-content-center mt-4 py-4">
          <Search />
        </SearchBox>

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
              <ExploreBergen />
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
              <ExploreBergen />
            </StyledContainer>
          )}
        </div>

        <LinkStays />

        {/* Inspiration  */}
        <Container className="mt-5" style={{ maxWidth: "960px" }}>
          <Heading size="4" fontSize="18px" className="mt-5 mb-4">
            Inspiration for your next trip
          </Heading>
          <StaysCard stays={featured} />
        </Container>

        <Container style={{ maxWidth: "960px" }}>
          <Heading size="4" fontSize="18px" className="mt-5 mb-4">
            Some of our popular destinations
          </Heading>
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const stays = await getStays();
  return { props: { stays } };
}

{
  /* <Head>
        <title>title</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,600;0,700;1,400&family=Roboto:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head> */
}
