import React, { createRef, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import DateFunction from "../../components/common/functions/DateFunction";
import { CONTACT_URL, LIGHT_AUTH } from "../../constants/api";
import { schema } from "../../utils/contactFormSchema";
import { Form } from "react-bootstrap";
import Alertbox, { AlertboxSuccess } from "../../components/common/alert/AlertBox";
import { StyledFeedbackContainer, StyledForm } from "./styles/StyledForm.styled";
import Icon, { icons } from "../../constants/icons";
import { StyledFormButton } from "../../styles/buttons/StyledFormButton.styled";
import { useWindowSize } from "../../hooks/useWindowSize";
import { SCREEN } from "../../constants/misc";
import { StyledIconFormContainer } from "./styles/StyledIconFormContainer.styled";
import { StyledFlexIconText } from "../../styles/containers/StyledFlexIconText.styled";
import Link from "next/link";
import Heading from "../../components/typography/Heading";
import styled from "styled-components";

const StyledHeading = styled(Heading)`
  font-size: 20px;
`;

function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState(false);
  const [count, setCount] = useState(0);
  const size = useWindowSize();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);

    data = {
      status: "publish",
      title: data.subject,
      fields: {
        message: data.message,
        title: data.subject,
        name: data.name,
        email: data.email,
        date: DateFunction(),
      },
    };

    try {
      await axios.post(CONTACT_URL, data, {
        auth: LIGHT_AUTH,
      });
    } catch (error) {
      setServerError(error.toString());
    } finally {
      setSubmitting(false);
      setSubmitted(true);
    }
  }

  return (
    <>
      {submitted ? (
        <>
          <AlertboxSuccess className="mt-4 p-5">
            <StyledHeading size="3">Success! </StyledHeading>
            Your message was sent!
            <span className="d-block mb-4">We will get in touch shortly.</span>
            <Link href="/">
              <a>Home</a>
            </Link>
          </AlertboxSuccess>
        </>
      ) : (
        <StyledForm onSubmit={handleSubmit(onSubmit)} noValidate>
          {serverError && <Alertbox>Something went wrong.</Alertbox>}

          <fieldset disabled={submitted}>
            {/* Name  */}
            <Form.Group className="mt-3">
              <StyledFlexIconText>
                <StyledIconFormContainer>
                  <Icon icon={icons.map((icon) => icon.user)} className="me-4" />
                </StyledIconFormContainer>
                <Form.Control type="text" placeholder="Name" className="mt-2" {...register("name")} />
              </StyledFlexIconText>
              {errors.name && (
                <StyledFeedbackContainer>
                  <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
                  <Alertbox className="mt-2">{errors.name.message}</Alertbox>
                </StyledFeedbackContainer>
              )}
            </Form.Group>

            {/* Email  */}
            <Form.Group className="mt-3">
              <StyledFlexIconText>
                <StyledIconFormContainer>
                  <Icon icon={icons.map((icon) => icon.email)} fontSize="20px" className="me-4" />
                </StyledIconFormContainer>
                <Form.Control type="email" placeholder="Email" className="mt-2" {...register("email")} />
              </StyledFlexIconText>
              {errors.email && (
                <StyledFeedbackContainer>
                  <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
                  <Alertbox className="mt-2">{errors.email.message}</Alertbox>
                </StyledFeedbackContainer>
              )}
            </Form.Group>

            <Form.Group className="mt-3">
              <StyledFlexIconText>
                <StyledIconFormContainer>
                  <Icon icon={icons.map((icon) => icon.text)} className="me-4" fontSize="20px" />
                </StyledIconFormContainer>
                <Form.Control type="text" placeholder="Subject" className="mt-2" {...register("subject")} />
              </StyledFlexIconText>
              {errors.subject && (
                <StyledFeedbackContainer>
                  <Icon icon={icons.map((icon) => icon.error)} color="#D11117" className="warning-icon" />
                  <Alertbox className="mt-2">{errors.subject.message}</Alertbox>
                </StyledFeedbackContainer>
              )}
            </Form.Group>

            <Form.Group className="mt-3">
              <div className="text-area-container">
                <StyledIconFormContainer>
                  <Icon icon={icons.map((icon) => icon.chat)} fontSize="20px" className="me-4 mt-2" />
                </StyledIconFormContainer>
                <Form.Control
                  as="textarea"
                  rows={6}
                  onKeyUp={(e) => setCount(e.target.value.length)}
                  placeholder="Message"
                  className="mt-2"
                  {...register("message")}
                />
                <span className="counter">{count}/20</span>
              </div>

              {errors.message && (
                <StyledFeedbackContainer>
                  <Icon
                    icon={icons.map((icon) => icon.error)}
                    color="#D11117"
                    className="warning-icon text-area-icon"
                  />
                  <Alertbox className="mt-2">{errors.message.message}</Alertbox>
                </StyledFeedbackContainer>
              )}
            </Form.Group>

            {size.width <= SCREEN.tablet ? (
              <StyledFormButton className="mb-4 mt-5" type="submit">
                {submitting ? "sending.." : "Send"}
              </StyledFormButton>
            ) : (
              <StyledFormButton className="mb-4 mt-5 ms-5" type="submit">
                {submitting ? "sending.." : "Send"}
              </StyledFormButton>
            )}
            {submitted && (
              <Alertbox type="success" className="mt-4 mb-4">
                Your message was sent
              </Alertbox>
            )}
          </fieldset>
        </StyledForm>
      )}
    </>
  );
}

export default ContactForm;

// {submitted && (
//   <Alertbox type="success" className="mt-4 mb-4">
//     Your message was sent
//   </Alertbox>
// )}
