import PageHead from "../components/layout/PageHead";
import AuthContext from "../context/AuthContext";
import Layout from "../components/layout/Layout";
import AddForm from "../components/forms/AddForm";
import Heading from "../components/typography/Heading";
import React, { useContext, useEffect } from "react";
import { StyledContainer } from "../styles/containers/StyledContainer.styled";
import { Container } from "react-bootstrap";
import { useRouter } from "next/router";

export default function Add() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (!auth) {
      router.push("/login");
    }
  }, []);

  return (
    <>
      <PageHead
        title="Add new stay"
        content="Add new places to stay in Bergen"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        <StyledContainer className="p-4 mb-4">
          <Container className="py-4">
            <Heading className="mt-5" size="1">
              Create stay
            </Heading>
            <AddForm className="mt-5" />
          </Container>
        </StyledContainer>
      </Layout>
    </>
  );
}
