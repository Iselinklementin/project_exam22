import React from "react";
import ContactForm from "../components/forms/ContactForm";
import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import PageHead from "../components/layout/PageHead";
import { StyledContainerSmall } from "../styles/containers/StyledContainerSmall";

export default function Contact() {
  return (
    <>
      <PageHead
        title="Contact us"
        content="Contact us for more information about stays in Bergen."
        keywords="contact, travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
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
