import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import styled from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";
import Footer from "../components/layout/footer/Footer";
// import '../styles/globals.css'

const Wrapper = styled.div`
  min-height: 71vh;
`;

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <Wrapper>
        <Component {...pageProps} />
      </Wrapper>
      <Footer />
    </SSRProvider>
  );
}

export default MyApp;
