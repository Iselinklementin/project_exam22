import axios from "axios";
import PropTypes from "prop-types";
import EnquireForm from "../../components/forms/EnquireForm";
import Layout from "../../components/layout/Layout";
import Heading from "../../components/typography/Heading";
import Paragraph from "../../components/typography/Paragraph";
import { API_URL } from "../../constants/api";
import { useRouter } from "next/router";
import { Container } from "react-bootstrap";
import { StyledContainer } from "../../styles/containers/StyledContainer.styled";
import PageHead from "../../components/layout/PageHead";
import { Breadcrumbs } from "../../components/common/breadcrumbs/Breadcrumbs";

export default function Enquire({ stay }) {
  const router = useRouter();
  const query = router.query;
  const room = query.room;

  const showRoom = () => {
    switch (room) {
      case "Apartment":
        return <Paragraph className="mt-3">{room}</Paragraph>;
        break;
      case "Bed & Breakfast":
        return <Paragraph className="mt-3">{room}</Paragraph>;
        break;
      case "Choose room":
        return <Paragraph className="mt-3">{stay.acf.room.stay_type}</Paragraph>;
        break;
      default:
        return (
          <Paragraph className="mt-3">
            <span className="fw-bold">Room: </span>
            {room}
          </Paragraph>
        );
    }
  };

  return (
    <>
      <PageHead
        title="Holidaze"
        content="Send an enquire to hotels, apartments and Bed & breakfast in Bergen."
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <StyledContainer className="p-4 mt-5">
          <Container className="py-4">
            <Breadcrumbs title="Enquire" link={`/stays/${stay.id}`} linkName={stay.acf.title} />
            <Heading className="mt-5" size="1">
              Start planning your trip to {stay.acf.title}
            </Heading>
            {showRoom()}
            <EnquireForm title={stay.acf.title} room={room} type={stay.acf.room.stay_type} />
          </Container>
        </StyledContainer>
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

Enquire.propTypes = {
  stay: PropTypes.object.isRequired,
};
