import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../components/forms/ContactForm";
// import pageHeader from "components/layout/PageHeader";
import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import styled from "styled-components";
import { StyledContainerSmall } from "../styles/containers/StyledContainerSmall";

function contact() {
  return (
    <Layout>
      {/* <pageHeader title="Contact us" /> */}
      <StyledContainerSmall className="p-4">
        <Heading className="mt-5" size="1">
          Contact us
        </Heading>
        <ContactForm />
      </StyledContainerSmall>
    </Layout>
  );
}

export default contact;
