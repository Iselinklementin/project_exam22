import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import Alertbox from "../common/alert/Alertbox";
import AlertboxSuccess from "../common/alert/AlertboxSuccess";
import DateFunction from "../common/functions/DateFunction";
import styled from "styled-components";
import Icon, { icons } from "../../constants/icons";
import Heading from "../typography/Heading";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ENQUIRES_URL, LIGHT_AUTH } from "../../constants/api";
import { StyledFeedbackContainer, StyledForm } from "./styles/StyledForm.styled";
import { schema } from "../../utils/enquireFormSchema";
import { Form } from "react-bootstrap";
import { StyledFormButton } from "../../styles/buttons/StyledFormButton.styled";
import { StyledParagraphColoured } from "../typography/Paragraph";
import { RemoveLastWord } from "../common/functions/RemoveWords";
import { mediaQ } from "../../styles/global/ThemeConfig";
import { BOOKED, CALENDAR_OPTIONS, SUBJECT } from "../../constants/misc";
import { StyledCloseBtn, StyledCalendar } from "../../styles/StyledCalendar.styled";
import { StyledIconFormContainer } from "./styles/StyledIconFormContainer.styled";
import { StyledFlexIconText } from "../../styles/containers/StyledFlexIconText.styled";
import Link from "next/link";
import { StyledSelect } from "../forms/styles/StyledSelect.styled";
import { ValidationError, ValidationErrorSelect } from "./ValidationError";

const StyledHeading = styled(Heading)`
  font-size: 20px;

  @media ${mediaQ.desktop_large} {
    font-size: 22px;
  }
`;

const StyledFlexContainerLaptop = styled.div`
  @media ${mediaQ.tablet} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const StyledFormContainerLaptop = styled.div`
  @media ${mediaQ.tablet} {
    width: 460px;
    margin-right: 2rem;
  }
`;

const StyledDeleteDate = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-top: 1.5rem;

  button {
    padding-left: 0;
  }

  :hover {
    svg {
      color: ${(props) => props.theme.primaryColour};
    }
    color: ${(props) => props.theme.primaryColour};
  }

  @media ${mediaQ.tablet} {
    margin-top: -10px;
  }
`;

const StyledEnquireButton = styled(StyledFormButton)`
  @media ${mediaQ.tablet} {
    margin-left: 35px;
  }
`;

export default function EnquireForm({ title, room, type }) {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [count, setCount] = useState(0);
  const [travelers, setTravelers] = useState("");

  let today = DateFunction();

  const clicked = () => {
    setDateRange([null, null]);
  };

  let startDateFormatted = startDate ? startDate.toLocaleDateString("en-GB", CALENDAR_OPTIONS).replace(",", "") : "";
  let endDateFormatted = endDate ? endDate.toLocaleDateString("en-GB", CALENDAR_OPTIONS).replace(",", "") : "";

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  async function onSubmit(data) {
    setSubmitting(true);

    data = {
      status: "publish",
      title: data.title,
      fields: {
        comments: data.message,
        stay_title: data.title,
        name: data.name,
        email: data.email,
        from_date: startDateFormatted,
        to_date: endDateFormatted,
        how_many: travelers,
        phone: data.phone,
        room: data.room,
        date_received: DateFunction(),
        type_of_stay: data.stay_type,
      },
    };

    try {
      await axios.post(ENQUIRES_URL, data, {
        auth: LIGHT_AUTH,
      });
      setSubmitted(true);
    } catch (error) {
      setError(error.toString());
      console.log(error);
    } finally {
      setSubmitting(false);

      setTimeout(() => {
        document.getElementById("enquire_form").reset();
      }, 2000);
    }
  }

  return (
    <>
      <StyledForm id="enquire_form" className="enquire-form" onSubmit={handleSubmit(onSubmit)} noValidate>
        <fieldset disabled={error}>
          {submitted && (
            <AlertboxSuccess className="mt-5 mb-0">
              <StyledHeading size="3">Success! </StyledHeading>
              Your message was sent!
              <span className="d-block mb-4">We will get in touch shortly.</span>
              <Link href="/">
                <a>Home</a>
              </Link>
            </AlertboxSuccess>
          )}
          {error && (
            <Alertbox className="mt-3" type="danger">
              Sorry, something went wrong. Please try again later.
            </Alertbox>
          )}
          <StyledFlexContainerLaptop className="mt-3">
            <StyledFormContainerLaptop>
              <StyledParagraphColoured>Information</StyledParagraphColoured>
              <Heading size="2">Who is traveling?</Heading>
              <Form.Control type="hidden" placeholder="Title" value={title} className="mt-2" {...register("title")} />
              <Form.Control type="hidden" placeholder="Type" value={type} className="mt-2" {...register("stay_type")} />
              <Form.Control type="hidden" placeholder="Room" value={room} className="mt-2" {...register("room")} />

              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.user)} />
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

              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.phone)} />
                  </StyledIconFormContainer>
                  <Form.Control type="text" placeholder="Phone" className="mt-2" {...register("phone")} />
                </StyledFlexIconText>
                {errors.phone && <ValidationError errorName={errors.phone.message} />}
              </Form.Group>

              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.email)} fontSize="20px" />
                  </StyledIconFormContainer>
                  <Form.Control type="email" placeholder="Email" className="mt-2" {...register("email")} />
                </StyledFlexIconText>
                {errors.email && <ValidationError errorName={errors.email.message} />}
              </Form.Group>

              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.userplus)} fontSize="20px" />
                  </StyledIconFormContainer>
                  <Controller
                    name="how_many"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <StyledSelect
                        instanceId="select_one"
                        className="select"
                        classNamePrefix="react-select"
                        placeholder="How many is traveling"
                        options={SUBJECT}
                        onChange={(e) => {
                          setTravelers(e.value);
                          onChange(e.value);
                        }}
                      />
                    )}
                  />
                </StyledFlexIconText>
                {errors.how_many && <ValidationErrorSelect box_class="mt-2" errorName={errors.how_many.message} />}
              </Form.Group>

              <Form.Group className="mt-3">
                <div className="text-area-container">
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.chat)} fontSize="20px" />
                  </StyledIconFormContainer>
                  <Form.Control
                    as="textarea"
                    rows={8}
                    placeholder="Comments"
                    onKeyUp={(e) => setCount(e.target.value.length)}
                    className="mt-2"
                    {...register("message")}
                  />
                  <span className="counter">{count}/20</span>
                </div>
                {errors.message && <ValidationError errorName={errors.message.message} />}
              </Form.Group>
            </StyledFormContainerLaptop>
            <div>
              <StyledParagraphColoured className="mt-5">Date</StyledParagraphColoured>
              <Heading size="2">{RemoveLastWord(today)}</Heading>

              <div>
                <StyledCalendar className="mt-4">
                  <DatePicker
                    selected={startDate}
                    startDate={startDate}
                    endDate={endDate}
                    dateFormat="dd/MM/yyyy"
                    selectsRange
                    fixedHeight={true}
                    inline
                    calendarClassName="calendar_enquire"
                    isClearable={true}
                    onChange={(update) => {
                      setDateRange(update);
                    }}
                    minDate={new Date()}
                    excludeDateIntervals={BOOKED}
                  />
                </StyledCalendar>

                <Form.Group className="d-flex mb-4 mt-md-1 align-items-center">
                  <StyledIconFormContainer className="d-none">
                    <Icon icon={icons.map((icon) => icon.calendar)} fontSize="20px" className="me-3" />
                  </StyledIconFormContainer>
                  <div>
                    <Form.Label className="mb-2 d-md-none" style={{ fontSize: "14px" }}>
                      From:
                    </Form.Label>
                    <Form.Control
                      placeholder="From date"
                      type="text"
                      value={startDateFormatted}
                      className="me-4"
                      disabled
                    />
                  </div>
                  <span className="mx-3">-</span>
                  <div>
                    <Form.Label className="mb-2 d-md-none" style={{ fontSize: "14px" }}>
                      To:
                    </Form.Label>
                    <Form.Control placeholder="To date" type="text" value={endDateFormatted} disabled />
                  </div>
                </Form.Group>
                <StyledDeleteDate onClick={clicked} style={{ fontSize: "14px" }}>
                  <StyledCloseBtn type="button" id="close-btn" aria-label="Close">
                    <Icon icon={icons.map((icon) => icon.close)} fontSize="18px" />
                  </StyledCloseBtn>
                  <span className="">Delete date</span>
                </StyledDeleteDate>
              </div>
            </div>
          </StyledFlexContainerLaptop>

          <StyledEnquireButton className="mt-5" type="submit">
            <Icon icon={icons.map((icon) => icon.bag)} color="white" fontSize="16px" className="me-3" />
            {submitting ? "sending enquire.." : "Enquire"}
          </StyledEnquireButton>

          {error && (
            <Alertbox className="mt-3" type="danger">
              Sorry, something went wrong. Please try again later.
            </Alertbox>
          )}

          {submitted && (
            <AlertboxSuccess className="mt-5">
              <StyledHeading size="3">Success! </StyledHeading>
              Your message was sent!
              <span className="d-block mb-4">We will get in touch shortly.</span>
              <Link href="/">
                <a>Home</a>
              </Link>
            </AlertboxSuccess>
          )}
        </fieldset>
      </StyledForm>
    </>
  );
}
