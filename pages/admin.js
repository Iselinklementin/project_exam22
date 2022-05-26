import PageHead from "../components/layout/PageHead";
import styled from "styled-components";
import AuthContext from "../context/AuthContext";
import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import Enquires from "../components/pages/admin/Enquires";
import Paragraph from "../components/typography/Paragraph";
import React, { useContext, useEffect, useState } from "react";
import { AddEnquireBtn } from "../components/buttons/AddEnquireBtn";
import { mediaQ } from "../styles/global/ThemeConfig";
import { StyledContainer } from "../styles/containers/StyledContainer.styled";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";
import { AdminTabs } from "../components/pages/admin/AdminTabs";

const StyledTextContainer = styled.div`
  text-align: center;
  padding: 1.5rem;
  max-width: 960px;
  margin: auto auto 3rem auto;

  p {
    max-width: 300px;
    margin: auto auto 2rem auto;
  }

  .add {
    text-transform: uppercase;
    font-size: 14px;

    @media ${mediaQ.desktop_large} {
      font-size: 16px;
    }
  }

  @media ${mediaQ.tablet} {
    text-align: left;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 6rem;
    margin-top: 6rem;
    padding: 0;

    p {
      margin: initial;
    }
  }
`;

export default function Admin() {
  const [value, setValue] = useState([]);
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, []);

  const handleClick = (e) => {
    setValue(<Enquires />);
  };

  return (
    <>
      <PageHead
        title="Admin site"
        content="Messages, Enquire and Adding new stays."
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <StyledContainer className="mt-5 py-4">
          <Container>
            <StyledTextContainer>
              <div>
                <Heading size="1">Welcome Admin</Heading>
                <Paragraph>Here you can read messages & enquires, or you can add a new accomondation.</Paragraph>
              </div>
              <div className="text-center">
                <AddEnquireBtn />
                <Paragraph className="add">Add stay</Paragraph>
              </div>
            </StyledTextContainer>
            <AdminTabs handleClick={handleClick} value={value} />
          </Container>
        </StyledContainer>
      </Layout>
    </>
  );
}
