import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import PageHead from "../components/layout/PageHead";
import DatePicker from "react-datepicker";

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
        <DatePicker
          // selected={startDate}
          // startDate={startDate}
          // endDate={endDate}
          // dateFormat="dd/MM/yyyy"
          // selectsRange
          // fixedHeight={true}
          inline
          // calendarClassName="egen-class-her"
          // isClearable={true}
          // onChange={(update) => {
          //   setDateRange(update);
          // }}
          // minDate={new Date()}
          // excludeDateIntervals={BOOKED}
        />
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
