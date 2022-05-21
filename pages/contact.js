import React from "react";
import { Container } from "react-bootstrap";
import ContactForm from "../components/forms/ContactForm";
// import pageHeader from "components/layout/PageHeader";
import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import styled from "styled-components";
import { StyledContainerSmall } from "../styles/containers/StyledContainerSmall";
import PageHead from "../components/layout/PageHead";

function contact() {
  return (
    <>
      <PageHead
        title="Contact us"
        content="Book hotels, apartments og Bed & breakfast in Bergen. Contact us for more information!"
        keywords="contact, travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        {/* <pageHeader title="Contact us" /> */}
        <StyledContainerSmall className="p-4">
          <Heading className="mt-5" size="1">
            Contact us
          </Heading>
          <ContactForm />
        </StyledContainerSmall>
      </Layout>
    </>
  );
}

export default contact;
