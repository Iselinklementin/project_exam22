import React from "react";
import axios from "axios";
import Carousels from "../../components/carousel/Carousel";
import styled from "styled-components";
import ShowIcons from "../../components/common/icons/ShowIcons";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/typography/Heading";
import Paragraph from "../../components/typography/Paragraph";
import { API_URL } from "../../constants/api";
import { Container } from "react-bootstrap";
import { StyledContainer } from "../../styles/containers/StyledContainer.styled";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN } from "../../constants/misc";
import { Description } from "../../components/pages/detailpage/Description";
import { Breadcrumbs } from "../../components/pages/detailpage/Breadcrumbs";
import { Location } from "../../components/pages/detailpage/Location";
import { ShowRoomOption } from "../../components/pages/detailpage/ShowRoomOption";
import PageHead from "../../components/layout/PageHead";

const StyledNiceToKnow = styled.div`
  width: 720px;
  padding-right: 2rem;
`;

const StyledSplit = styled.div`
  border-left: solid thin grey;
  height: 105px;
`;

export default function stay({ stay }) {
  const size = useWindowSize();

  // gather image and alt text in an array (for carousel)
  let image = Object.entries(stay.acf.image);
  let imageUrl = image.map((img) => img[1].url);
  let imageAlt = image.map((img) => img[1].alt);
  let imageArray = imageUrl.map((url, i) => [url, imageAlt[i]]);

  //   <div className="books">
  //   <h2>Books</h2>
  //   {books.map(function (book) {
  //     const { id, title, published } = book;
  //     return <BookItem key={id} id={id} title={title} published={published} />;
  //   })}
  // </div>

  return (
    <>
      <PageHead
        title={stay.acf.title}
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <StyledContainer className="mt-5 px-md-0">
          <Container>
            <Breadcrumbs title={stay.acf.title} />
            <div className="d-flex justify-content-between align-items-center mt-4">
              <Heading>{stay.acf.title}</Heading>
            </div>
            <Paragraph>{stay.acf.room.stay_type}</Paragraph>
          </Container>
        </StyledContainer>

        {size.width <= SCREEN.laptop ? (
          <StyledContainer>
            <Container className="mt-5">
              <Carousels stays={imageArray} />
              <div className="mt-4">
                <ShowIcons stay={stay.acf.stay_includes} />
              </div>
              <Description className="mt-5" hSize="2" heading="Description" body={stay.acf.stay_description} />
            </Container>
            <Container>
              <Description className="mt-3" hSize="2" heading="Nice to know" body={stay.acf.nice_to_know_text} />
              <div className="d-flex">
                <Location
                  className="ms-3"
                  address={stay.acf.address.full_address}
                  location={stay.acf.address.short_description}
                />
              </div>
              <div className="mt-4">
                <ShowIcons stay={stay.acf.nice_to_know} />
              </div>
            </Container>
            <Container>
              <hr className="my-5" />
              <Heading size="3">Room</Heading>
              <ShowRoomOption
                stay_type={stay.acf.room.stay_type}
                room_type={stay.acf.room.room_type}
                price={stay.acf.price}
                id={stay.id}
                info={stay.acf.room.room_info}
              />
            </Container>
          </StyledContainer>
        ) : (
          <StyledContainer>
            <div className="d-flex flex-row justify-content-between">
              <Carousels stays={imageArray} />
              <div className="ms-5">
                <ShowIcons stay={stay.acf.stay_includes} />
                <Description className="mt-5" hSize="2" heading="Description" body={stay.acf.stay_description} />
                <ShowRoomOption
                  stay_type={stay.acf.room.stay_type}
                  room_type={stay.acf.room.room_type}
                  price={stay.acf.price}
                  id={stay.id}
                  info={stay.acf.room.room_info}
                />
              </div>
            </div>
            <div className="mt-5 d-flex justify-content-between align-items-center">
              <StyledNiceToKnow className="border-right">
                <Description className="mt-3" hSize="2" heading="Nice to know" body={stay.acf.nice_to_know_text} />
                <div className="d-flex mt-4">
                  <Location
                    className="ms-5"
                    address={stay.acf.address.full_address}
                    location={stay.acf.address.short_description}
                  />
                </div>
              </StyledNiceToKnow>
              <StyledSplit></StyledSplit>
              <div className="ms-5">
                <ShowIcons stay={stay.acf.nice_to_know} />
              </div>
            </div>
          </StyledContainer>
        )}
      </Layout>
    </>
  );
}

export async function getStaticPaths() {
  try {
    const response = await axios.get(API_URL);
    const stay = response.data;
    const paths = stay.map((item) => ({
      params: {
        id: JSON.stringify(item.id),
      },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    console.log(error);
  }
}

// se om jeg kan gjøre id om til navn i stede

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
