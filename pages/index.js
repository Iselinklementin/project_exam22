import PageHead from "../components/layout/PageHead";
import axios from "axios";
import PropTypes from "prop-types";
import Search from "../components/common/search/Search";
import Heading from "../components/typography/Heading";
import Layout from "../components/layout/Layout";
import StaysCard from "../components/cards/StaysCard";
import { Intro } from "../components/pages/home/Intro";
import { LinkStays } from "../components/pages/home/LinkStays";
import { SearchBox } from "../components/common/search/Search.styled";
import { Container } from "react-bootstrap";
import { API_URL } from "../constants/api";
import { ExploreBergen } from "../components/pages/home/ExploreBergen";

export default function Home({ stays }) {
  let featured = stays.filter(stay => stay.acf.featured === true);

  return (
    <>
      <PageHead
        title="Welcome to Holidaze"
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore, accomodations"
      />
      <Layout>
        <Intro />
        <SearchBox className="d-flex flex-column justify-content-center mt-4 py-4">
          <Search />
        </SearchBox>
        <ExploreBergen />
        <LinkStays />

        <Container className="mt-5" style={{ maxWidth: "960px" }}>
          <Heading size="4" fontSize="18px" className="mt-5 mb-4">
            Inspiration for your next trip
          </Heading>
          <StaysCard stays={featured} />
        </Container>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  let stays = [];

  try {
    const response = await axios.get(API_URL + "?per_page=20");
    stays = response.data;
  } catch (error) {
    console.log(error);
  }
  return { props: { stays: stays } };
}

Home.propTypes = {
  stays: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};
