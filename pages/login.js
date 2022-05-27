import Layout from "../components/layout/Layout";
import Heading from "../components/typography/Heading";
import LoginForm from "../components/forms/LoginForm";
import PageHead from "../components/layout/PageHead";
import AuthContext from "../context/AuthContext";
import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { StyledContainerSmall } from "../styles/containers/StyledContainerSmall";

export default function Login() {
  const [auth] = useContext(AuthContext);
  const router = useRouter();

  useEffect(() => {
    if (auth) {
      router.push("/admin");
    }
  }, []);

  return (
    <>
      <PageHead
        title="Login to our site!"
        content="Sign in to our admin-section"
        keywords="travel, europe, bergen, adventure, exotic, culture, explore"
      />
      <Layout>
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
