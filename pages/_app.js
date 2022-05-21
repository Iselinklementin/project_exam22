import "bootstrap/dist/css/bootstrap.min.css";
import "react-datepicker/dist/react-datepicker.css";
import Theme from "../styles/global/ThemeConfig";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import SSRProvider from "react-bootstrap/SSRProvider";
import Footer from "../components/layout/footer/Footer";
import GlobalStyle from "../styles/global/GlobalStyle";
import { AuthProvider } from "../context/AuthContext";

const Wrapper = styled.div`
  min-height: 50vh;
`;

function MyApp({ Component, pageProps }) {
  return (
    <SSRProvider>
      <ThemeProvider theme={Theme}>
        <AuthProvider>
          <GlobalStyle />
          <Wrapper>
            <Component {...pageProps} />
          </Wrapper>
          <Footer />
        </AuthProvider>
      </ThemeProvider>
    </SSRProvider>
  );
}

export default MyApp;
