import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Container } from "react-bootstrap";
// import pageHeader from "components/layout/PageHeader";
import Heading from "../components/typography/Heading";
import LoginForm from "../components/forms/LoginForm";
import { StyledContainerSmall } from "../styles/containers/StyledContainerSmall";
import PageHead from "../components/layout/PageHead";

function login() {
  return (
    <>
      <PageHead
        title="Login to our site!"
        content="Book hotels, apartments og Bed & breakfast in Bergen. We in Holidaze have the best places to stay, handpicked for you!"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
        {/* Head */}
        <StyledContainerSmall className="p-4">
          <Heading className="mt-5" size="1">
            Login
          </Heading>
          <LoginForm />
        </StyledContainerSmall>
      </Layout>
    </>
  );
}

export default login;
