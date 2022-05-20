import Image from "next/image";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import PageHead from "../components/layout/PageHead";
import DatePicker from "react-datepicker";
import { StyledCalendar } from "../styles/StyledCalendar.styled";

const StyledComp = styled.div`
  background-color: #5e5959;
`;

export default function Home() {
  return (
    <>
      <PageHead
        title="Holidaze"
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <Button>Yaaaaz</Button>
        <StyledComp>her kommer det ting</StyledComp>
      </Layout>
    </>
  );
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
