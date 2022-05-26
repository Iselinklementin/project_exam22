import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import PageHead from "../../components/layout/PageHead";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/typography/Heading";
import Paragraph from "../../components/typography/Paragraph";
import { API_URL } from "../../constants/api";
import { Container } from "react-bootstrap";
import { StyledContainer } from "../../styles/containers/StyledContainer.styled";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN } from "../../constants/misc";
import { Breadcrumbs } from "../../components/common/breadcrumbs/Breadcrumbs";
import { DetailMobile } from "../../components/pages/detailpage/Mobile/DetailMobile";
import { DetailLaptop } from "../../components/pages/detailpage/Laptop/DetailLaptop";

export default function Stay({ stay }) {
  const size = useWindowSize();

  const {
    title,
    room,
    price,
    stay_includes,
    stay_description,
    nice_to_know_text,
    nice_to_know,
    image,
    address,
  } = stay.acf;

  let id = stay.id;

  // gather image and alt text in an array (for carousel)
  let images = Object.entries(image);
  let imageUrl = images.map(img => img[1].url);
  let imageAlt = images.map(img => img[1].alt);
  let imageArray = imageUrl.map((url, i) => [url, imageAlt[i]]);

  return (
    <>
      <PageHead
        title={title}
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <StyledContainer className="mt-5 px-md-0">
          <Container>
            <Breadcrumbs title={title} linkName="Stays" link="/stays" />
            <div className="d-flex justify-content-between align-items-center mt-4">
              <Heading>{title}</Heading>
            </div>
            <Paragraph>{room.stay_type}</Paragraph>
          </Container>
        </StyledContainer>

        {size.width <= SCREEN.laptop ? (
          <DetailMobile
            price={price}
            include={stay_includes}
            description={stay_description}
            nice_text={nice_to_know_text}
            nice_icons={nice_to_know}
            address={address}
            images={imageArray}
            room={room}
            id={id}
          />
        ) : (
          <DetailLaptop
            price={price}
            include={stay_includes}
            description={stay_description}
            nice_text={nice_to_know_text}
            nice_icons={nice_to_know}
            address={address}
            images={imageArray}
            room={room}
            id={id}
          />
        )}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(API_URL);
    const stay = response.data;
    const paths = stay.map(item => ({
      params: {
        id: JSON.stringify(item.id),
      },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${API_URL}/${params.id}`;
  let stay = null;

  try {
    const response = await axios.get(url);
    stay = response.data;
  } catch (error) {
    console.log(error);
  } finally {
    return {
      props: { stay: stay },
    };
  }
}

Stay.propTypes = {
  stay: PropTypes.object.isRequired,
};
