import React, { useState } from "react";
import Layout from "../components/layout/Layout";
import { Container } from "react-bootstrap";
// import pageHeader from "components/layout/PageHeader";
import Heading from "../components/typography/Heading";
import LoginForm from "../components/forms/LoginForm";
import { StyledContainerSmall } from "../styles/containers/StyledContainerSmall";

function login() {
  return (
    <Layout>
      {/* Head */}
      <StyledContainerSmall className="p-4">
        <Heading className="mt-5" size="1">
          Login
        </Heading>
        <LoginForm />
      </StyledContainerSmall>
    </Layout>
  );
}

export default login;
