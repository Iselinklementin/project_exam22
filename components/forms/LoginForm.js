import axios from "axios";
import React from "react";
import { useContext, useState } from "react";
import { Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import { yupResolver } from "@hookform/resolvers/yup";
import { LOGIN_URL } from "../../constants/api";
import AuthContext from "../../context/AuthContext";
import Alertbox from "../common/alert/Alertbox";
import { schema } from "../../utils/loginFormSchema";
import { StyledFeedbackContainer, StyledForm, WrongInput } from "./styles/StyledForm.styled";
import Icon, { icons } from "../../constants/icons";
import { StyledFormButton } from "../../styles/buttons/StyledFormButton.styled";
import { StyledFlexIconText } from "../../styles/containers/StyledFlexIconText.styled";
import { StyledIconContainer } from "../layout/styles/layout.styled";

function LoginForm() {
  const [submitting, setSumbitting] = useState(false);
  const [loginError, setLoginError] = useState(null);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [auth, setAuth] = useContext(AuthContext);

  async function onSubmit(data) {
    setSumbitting(true);
    setLoginError(null);

    try {
      const response = await axios.post(LOGIN_URL, data);
      setAuth(response.data);
      // console.log(response.data);
      return router.push("/admin");
    } catch (error) {
      console.log("error", error);
      setLoginError(error.toString());
    } finally {
      setSumbitting(false);
    }
  }

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} className="pe-4 p-3">
      <fieldset disabled={submitting} className="mt-4">
        <Form.Group className="mb-3 ">
          <StyledFlexIconText>
            <StyledIconContainer>
              <Icon icon={icons.map((icon) => icon.user)} />
            </StyledIconContainer>
            <Form.Control
              name="username"
              type="text"
              placeholder="Username"
              {...register("username")}
              autoComplete="new-password"
            />
          </StyledFlexIconText>
          {errors.username && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.username.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        <Form.Group className="mb-3 ">
          <StyledFlexIconText>
            <StyledIconContainer>
              <Icon icon={icons.map((icon) => icon.lock)} />
            </StyledIconContainer>
            <Form.Control
              name="password"
              placeholder="Password"
              {...register("password")}
              type="password"
              autoComplete="new-password"
            />
          </StyledFlexIconText>

          {errors.username && (
            <StyledFeedbackContainer>
              <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
              <Alertbox className="mt-2">{errors.password.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>

        {loginError && (
          <WrongInput className="ps-5">
            Wrong username or password. Please ensure you entered your correct details.
          </WrongInput>
        )}

        <StyledFormButton className="mb-4 mt-5" type="submit">
          {submitting ? "Logging in.." : "Login"}
        </StyledFormButton>
      </fieldset>
    </StyledForm>
  );
}

export default LoginForm;
