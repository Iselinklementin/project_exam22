import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import { Button } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import PageHead from "../components/layout/PageHead";

const StyledComp = styled.div`
  background-color: #5e5959;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <PageHead
        title="Holidaze"
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <Button>Yaaaaz</Button>
        <StyledComp className={styles.main}>her kommer det ting</StyledComp>
      </Layout>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
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
