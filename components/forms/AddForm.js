import useAxios from "../../hooks/useAxios";
import Image from "next/image";
import Alertbox from "../../components/common/alert/Alertbox";
import AlertboxSuccess from "../common/alert/AlertboxSuccess";
import styled from "styled-components";
import Link from "next/link";
import DatePicker from "react-datepicker";
import Paragraph from "../../components/typography/Paragraph";
import Heading from "../../components/typography/Heading";
import Icon, { icons } from "../../constants/icons";
import React, { useState, useRef } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_URL, MEDIA_URL } from "../../constants/api";
import { schema } from "../../utils/AddFormSchema";
import { STAYS, REVIEW, ROOMS, CALENDAR_OPTIONS, TIME_OPTIONS } from "../../constants/misc";
import { StyledFeedbackContainer, StyledForm } from "./styles/StyledForm.styled";
import { Form, Row, Col, FormText } from "react-bootstrap";
import { StyledFormButton } from "../../styles/buttons/StyledFormButton.styled";
import { StyledImageContainer, UploadLabel } from "../../styles/pages/admin/StyledImageContainer";
import { mediaQ } from "../../styles/global/ThemeConfig";
import { StyledFlexIconText } from "../../styles/containers/StyledFlexIconText.styled";
import { StyledIconFormContainer } from "./styles/StyledIconFormContainer.styled";
import { StyledSelect } from "../forms/styles/StyledSelect.styled";
import { ValidationError, ValidationErrorImage, ValidationErrorSelect } from "./ValidationError";
import { StyledCheckbox } from "./styles/StyledCheckbox.styled";
import { RemoveFirstWord } from "../common/functions/RemoveWords";
import { StyledTimePicker } from "./styles/StyledTimePicker.styled";

const StyledMutedText = styled(FormText)`
  margin-left: 45px;
  line-height: 3;
`;

const StyledMutedTextCheckboxes = styled(FormText)`
  line-height: 3;
`;

const StyledFormWrap = styled.div`
  @media ${mediaQ.laptop} {
    width: 45%;
  }
`;

const StyledFormWrapDesktop = styled.div`
  @media ${mediaQ.laptop} {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
  }
`;

const StyledHeading = styled(Heading)`
  font-size: 20px;

  @media ${mediaQ.desktop_large} {
    font-size: 22px;
  }
`;

function AddForm() {
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [count, setCount] = useState(0);
  const [counter, setCounter] = useState(0);
  const [type, setType] = useState("");
  const [review, setReview] = useState("");
  const [roomType, setRoomType] = useState("");

  // time
  const [checkinTime, setCheckinTime] = useState(new Date());
  const [checkoutTime, setCheckoutTime] = useState(new Date());
  // set image url so I can show was been uploaded
  const [img1url, setImg1url] = useState();
  const [img2url, setImg2url] = useState();
  const [img3url, setImg3url] = useState();
  const [img4url, setImg4url] = useState();
  // set image upload so i can store the file
  const [imgUpload1, setImgUpload1] = useState();
  const [imgUpload2, setImgUpload2] = useState();
  const [imgUpload3, setImgUpload3] = useState();
  const [imgUpload4, setImgUpload4] = useState();

  let http = useAxios();

  let checkinTimeFormatted = checkinTime ? checkinTime.toLocaleDateString("en-GB", TIME_OPTIONS).replace(",", "") : "";
  let checkoutTimeFormatted = checkoutTime
    ? checkoutTime.toLocaleDateString("en-GB", TIME_OPTIONS).replace(",", "")
    : "";

  const stayCheckin = RemoveFirstWord(checkinTimeFormatted);
  const stayCheckout = RemoveFirstWord(checkoutTimeFormatted);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onBlur",
  });

  // the numbers changes after submitting the images
  // keeping it to store the id.

  let imgArray = {
    image_1: 1234,
    image_2: 1234,
    image_3: 1234,
    image_4: 1234,
  };

  async function onSubmit(data) {
    const AddImages = (file, title, caption) => {
      const formData = new FormData();
      formData.append("title", title);
      formData.append("caption", caption);
      formData.append("file", file);
      return formData;
    };

    // Add formData to every file thats uploaded
    let imageOne = AddImages(imgUpload1, "Title", "Caption");
    let imageTwo = AddImages(imgUpload2, "Title", "Caption");
    let imageThree = AddImages(imgUpload3, "Title", "Caption");
    let imageFour = AddImages(imgUpload4, "Title", "Caption");

    // I need to post them one by one
    // and store the ID so I can use it in the post
    // Wordpress doesnt allow multiple uploads at once
    setSubmitting(true);

    await http.post(MEDIA_URL, imageOne).then((response) => {
      const thisID = response.data.id;
      imgArray.image_1 = thisID;
    });

    await http.post(MEDIA_URL, imageTwo).then((response) => {
      const thisID = response.data.id;
      imgArray.image_2 = thisID;
    });

    await http.post(MEDIA_URL, imageThree).then((response) => {
      const thisID = response.data.id;
      imgArray.image_3 = thisID;
    });

    await http.post(MEDIA_URL, imageFour).then((response) => {
      const thisID = response.data.id;
      imgArray.image_4 = thisID;
    });

    data = {
      status: "publish",
      title: data.title,

      fields: {
        title: data.title,
        stay_description: data.description,
        price: data.price,
        featured: data.featured,
        address: {
          full_address: data.full_address,
          short_description: data.short_description,
        },
        nice_to_know: {
          check_in: stayCheckin,
          checkout: stayCheckout,
          handicap_friendly: data.handicap_friendly,
          no_smoking: data.no_smoking,
        },
        nice_to_know_text: data.nice_text,
        room: {
          room_info: data.room_info,
          room_type: roomType,
          stay_type: type,
        },
        stars: review,
        stay_includes: {
          wifi: data.wifi,
          kitchen: data.kitchen,
          free_parking: data.free_parking,
          breakfast: data.breakfast,
          swimming_pool: data.swimming_pool,
          pet_friendly: data.pet_friendly,
        },
        image: {
          image_1: imgArray.image_1,
          image_2: imgArray.image_2,
          image_3: imgArray.image_3,
          image_4: imgArray.image_4,
        },
      },
    };

    try {
      await http.post(API_URL, data);
      setSubmitted(true);
      console.log(data);
    } catch (error) {
      setError(error.toString());
    } finally {
      setSubmitting(false);
      setTimeout(() => {
        document.getElementById("add_form").reset();
      }, 2000);
    }
  }

  const changeHandler = (value) => {
    setRoomType(value.label);
  };

  // if its a hotel you are adding,
  // show selectbox on roomtype
  // should be able to choose more than one
  // I forgot that

  const createHtml = (type) => {
    if (type === "Hotel") {
      return (
        <Form.Group className="mt-3">
          <StyledMutedText className="text-muted">Please select what kind of room they have</StyledMutedText>
          <StyledFlexIconText>
            <StyledIconFormContainer>
              <Icon icon={icons.map((icon) => icon.hotel)} fontSize="24px" className="me-4" />
            </StyledIconFormContainer>

            <Controller
              name="room_type"
              control={control}
              render={({ field: { onChange } }) => (
                <StyledSelect
                  name="room_type"
                  classNamePrefix="react-select"
                  className="select"
                  instanceId="select_one"
                  placeholder="Select room"
                  options={ROOMS}
                  onChange={(e) => {
                    changeHandler(e);
                    onChange(e.value);
                  }}
                />
              )}
            />
          </StyledFlexIconText>
          {errors.room_type && (
            <StyledFeedbackContainer>
              <Alertbox className="mt-2">{errors.room_type.message}</Alertbox>
            </StyledFeedbackContainer>
          )}
        </Form.Group>
      );
    } else if (type === "Apartment" || type === "Bed & Breakfast") {
      // if its NOT a hotel, display a text input for extra room description
      return (
        <Form.Group className="mt-3">
          <StyledMutedText className="text-muted">Please describe room standards</StyledMutedText>
          <StyledFlexIconText>
            <StyledIconFormContainer>
              <Icon icon={icons.map((icon) => icon.apartment)} fontSize="24px" className="me-4" />
            </StyledIconFormContainer>
            <Form.Control label="room_info" type="text" placeholder="Room info" {...register("room_info")} />
          </StyledFlexIconText>
          {errors.room_info && <ValidationError errorName={errors.room_info.message} />}
        </Form.Group>
      );
    }
    return "";
  };

  return (
    <>
      {submitted && (
        <AlertboxSuccess className="mt-5 mb-0">
          <StyledHeading size="3">Success! </StyledHeading>
          The stay was added.
          <span className="d-block mb-4">It will be display on the Holidaze website in a moment.</span>
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
      <StyledForm id="add_form" className="add-form mt-5" onSubmit={handleSubmit(onSubmit)}>
        <fieldset disabled={error}>
          <StyledFormWrapDesktop>
            <StyledFormWrap>
              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.title)} fontSize="22px" className="me-3" />
                  </StyledIconFormContainer>
                  <Form.Control label="stay_title" type="text" placeholder="Title" {...register("title")} />
                </StyledFlexIconText>
                {errors.title && <ValidationError errorName={errors.title.message} />}
              </Form.Group>

              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.price)} fontSize="20px" className="me-3" />
                  </StyledIconFormContainer>
                  <Form.Control label="price" type="text" placeholder="Price" {...register("price")} />
                </StyledFlexIconText>
                {errors.price && <ValidationError errorName={errors.price.message} />}
              </Form.Group>

              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.hotel)} fontSize="24px" className="me-3" />
                  </StyledIconFormContainer>

                  <Controller
                    name="stay_type"
                    control={control}
                    render={({ field: { onChange } }) => (
                      <StyledSelect
                        className="select"
                        instanceId="select_two"
                        classNamePrefix="react-select"
                        placeholder="Stay type"
                        options={STAYS}
                        onChange={(e) => {
                          setType(e.value);
                          onChange(e.value);
                        }}
                      />
                    )}
                  />
                </StyledFlexIconText>
                {errors.stay_type && (
                  <StyledFeedbackContainer>
                    <Alertbox className="mt-2">{errors.stay_type.message}</Alertbox>
                  </StyledFeedbackContainer>
                )}
              </Form.Group>

              {createHtml(type)}

              <Form.Group className="mt-3">
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.location)} fontSize="24px" className="me-3" />
                  </StyledIconFormContainer>
                  <Form.Control
                    label="full_address"
                    type="text"
                    placeholder="Full address"
                    {...register("full_address")}
                  />
                </StyledFlexIconText>
                {errors.full_address && <ValidationError errorName={errors.full_address.message} />}
              </Form.Group>

              <Form.Group className="mt-3">
                <StyledMutedText className="text-muted">Please write what district its in:</StyledMutedText>
                <StyledFlexIconText>
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.location)} fontSize="24px" className="me-3" />
                  </StyledIconFormContainer>
                  <Form.Control
                    label="short_description"
                    type="text"
                    placeholder="Location"
                    {...register("short_description")}
                  />
                </StyledFlexIconText>
                {errors.short_description && <ValidationError errorName={errors.short_description.message} />}
              </Form.Group>

              <Form.Group className="mt-3">
                <StyledMutedText className="text-muted">Describe the hotel / apartment / B&B </StyledMutedText>
                <div className="text-area-container">
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.text)} fontSize="22px" className="me-3" />
                  </StyledIconFormContainer>
                  <Form.Control
                    as="textarea"
                    rows={6}
                    label="description"
                    onKeyUp={(e) => setCount(e.target.value.length)}
                    placeholder="Description"
                    {...register("description")}
                  />
                  <span className="counter">{count}/20</span>
                </div>
                {errors.description && <ValidationError errorName={errors.description.message} />}
              </Form.Group>

              <Form.Group className="mt-5">
                <StyledMutedText className="text-muted">Points of interest nearby, cleaning etc.</StyledMutedText>
                <div className="text-area-container">
                  <StyledIconFormContainer>
                    <Icon icon={icons.map((icon) => icon.text)} fontSize="22px" className="me-3" />
                  </StyledIconFormContainer>
                  <Form.Control
                    as="textarea"
                    name="nice_text"
                    label="text"
                    rows={3}
                    onKeyUp={(e) => setCounter(e.target.value.length)}
                    type="text"
                    placeholder="Nice to know"
                    {...register("nice_text")}
                  />
                  <span className="counter">{counter}/20</span>
                </div>
                {errors.nice_text && <ValidationError errorName={errors.nice_text.message} />}
              </Form.Group>

              <Form.Group className="mt-5 text-area-container">
                <StyledIconFormContainer>
                  <Icon icon={icons.map((icon) => icon.star)} fontSize="22px" className="me-3 mt-3" />
                </StyledIconFormContainer>
                <Controller
                  name="stars"
                  control={control}
                  render={({ field: { onChange } }) => (
                    <StyledSelect
                      className="select"
                      classNamePrefix="react-select"
                      name="stars"
                      instanceId="select_three"
                      options={REVIEW}
                      placeholder="Review"
                      onChange={(e) => {
                        setReview(e.value);
                        onChange(e.value);
                      }}
                    />
                  )}
                />
              </Form.Group>
              {errors.stars && (
                <StyledFeedbackContainer>
                  <Alertbox className="mt-2">{errors.stars.message}</Alertbox>
                </StyledFeedbackContainer>
              )}
            </StyledFormWrap>

            <hr className="mb-5 mt-5 d-lg-none" />

            <StyledFormWrap>
              <div className="d-flex">
                <Icon icon={icons.map((icon) => icon.heart)} fontSize="18px" className="me-3" />
                <Heading size="3">Keywords</Heading>
              </div>

              <StyledCheckbox>
                <Form.Check name="featured" label="Featured" {...register("featured")} />
                <StyledMutedTextCheckboxes className="text-muted">What´s included?</StyledMutedTextCheckboxes>
                <Form.Check name="wifi" label="Wifi" {...register("wifi")} />
                <Form.Check name="kitchen" label="Kitchen" {...register("kitchen")} />
                <Form.Check name="free_parking" label="Free parking" {...register("free_parking")} />
                <Form.Check name="breakfast" label="Breakfast" {...register("breakfast")} />
                <Form.Check name="swimming_pool" label="Swimming pool" {...register("swimming_pool")} />
                <Form.Check name="pet_friendly" label="Pet friendly" {...register("pet_friendly")} />
              </StyledCheckbox>
              <hr className="mb-5 mt-5" />

              <div className="d-flex">
                <Icon icon={icons.map((icon) => icon.heart)} fontSize="18px" className="me-3" />
                <Heading size="3">Nice to know</Heading>
              </div>

              <StyledCheckbox className="mb-5">
                <Form.Check name="no_smoking" label="No smoking" {...register("no_smoking")} />
                <Form.Check name="handicap_friendly" label="Handicap friendly" {...register("handicap_friendly")} />
              </StyledCheckbox>

              <div className="d-flex align-items-center">
                <Form.Group className="mt-3 me-5">
                  <Paragraph>Check-in after:</Paragraph>
                  <StyledTimePicker>
                    <Controller
                      name="check_in"
                      control={control}
                      render={({ field: { onChange } }) => (
                        <DatePicker
                          selected={checkinTime}
                          showTimeSelect
                          showTimeSelectOnly
                          timeFormat="HH:mm"
                          timeIntervals={30}
                          timeCaption="Time"
                          dateFormat="HH:mm"
                          classNamePrefix="react-time"
                          onChange={(date) => {
                            setCheckinTime(date);
                            onChange(date);
                          }}
                        />
                      )}
                    />
                  </StyledTimePicker>
                  {errors.check_in ? (
                    <>{errors.check_in && <ValidationError errorName={errors.check_in.message} />}</>
                  ) : (
                    <StyledMutedTextCheckboxes className="text-muted">Time for checking in</StyledMutedTextCheckboxes>
                  )}
                </Form.Group>
              </div>
              <div className="d-flex align-items-center">
                <Form.Group className="mt-3 mt-md-4">
                  <Paragraph>Checkout:</Paragraph>
                  <StyledTimePicker>
                    <Controller
                      name="checkout"
                      control={control}
                      render={({ field: { onChange } }) => (
                        <DatePicker
                          showTimeSelect
                          showTimeSelectOnly
                          timeFormat="HH:mm"
                          timeIntervals={30}
                          timeCaption="Time"
                          classNamePrefix="react-time"
                          selected={checkoutTime}
                          placeholderText="Select time"
                          dateFormat="HH:mm"
                          onChange={(date) => {
                            setCheckoutTime(date);
                            onChange(date);
                          }}
                        />
                      )}
                    />
                  </StyledTimePicker>
                  {errors.checkout ? (
                    <>{errors.checkout && <ValidationError errorName={errors.checkout.message} />}</>
                  ) : (
                    <StyledMutedTextCheckboxes className="text-muted">Time for checking out</StyledMutedTextCheckboxes>
                  )}
                </Form.Group>
              </div>
            </StyledFormWrap>
          </StyledFormWrapDesktop>
          <hr className="mb-5" />
          <div className="d-flex justify-content-between mb-5">
            <div className="d-flex">
              <Icon icon={icons.map((icon) => icon.images)} fontSize="26px" className="me-3" />
              <Heading size="3">Images</Heading>
            </div>
          </div>

          {/* Images - first image */}

          <Row xs={1} sm={2} md={3} lg={4} className="g-4">
            <Col className="position-relative">
              <StyledImageContainer>
                {img1url ? (
                  <Image src={img1url} alt="image" layout="fill" objectFit="cover" />
                ) : (
                  <div className="img-placeholder">
                    <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="#FC5156" />
                  </div>
                )}
              </StyledImageContainer>

              {/* Using a hidden button for uploads */}
              <UploadLabel htmlFor="imgUpload1">Upload image</UploadLabel>
              <Form.Control
                id="imgUpload1"
                type="file"
                name="image_1"
                {...register("image_one")}
                onChange={(e) => {
                  setImg1url(URL.createObjectURL(e.target.files[0]));
                  setImgUpload1(e.target.files[0]);
                }}
                style={{ opacity: "0" }}
              />
              {errors.image_one && (
                <ValidationErrorImage errorName={errors.image_one.message} style={{ opacity: "1" }} />
              )}
            </Col>

            {/* Images - second image */}
            <Col className="position-relative">
              <StyledImageContainer>
                {img2url ? (
                  <Image src={img2url} alt="image" layout="fill" objectFit="cover" />
                ) : (
                  <div className="img-placeholder">
                    <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="#FC5156" />
                  </div>
                )}
              </StyledImageContainer>
              <UploadLabel htmlFor="imgUpload2">Upload image</UploadLabel>
              <Form.Control
                id="imgUpload2"
                type="file"
                name="image_2"
                {...register("image_two")}
                onChange={(e) => {
                  setImg2url(URL.createObjectURL(e.target.files[0]));
                  setImgUpload2(e.target.files[0]);
                }}
                style={{ opacity: "0" }}
              />
              {errors.image_two && (
                <ValidationErrorImage errorName={errors.image_two.message} style={{ opacity: "1" }} />
              )}
            </Col>

            {/* Images - third image */}
            <Col className="position-relative">
              <StyledImageContainer>
                {img3url ? (
                  <Image src={img3url} alt="image" layout="fill" objectFit="cover" />
                ) : (
                  <div className="img-placeholder">
                    <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="#FC5156" />
                  </div>
                )}
              </StyledImageContainer>
              <UploadLabel htmlFor="imgUpload3">Upload image</UploadLabel>
              <Form.Control
                id="imgUpload3"
                type="file"
                name="image_3"
                {...register("image_three")}
                onChange={(e) => {
                  setImg3url(URL.createObjectURL(e.target.files[0]));
                  setImgUpload3(e.target.files[0]);
                }}
                style={{ opacity: "0" }}
              />
              {errors.image_three && (
                <ValidationErrorImage errorName={errors.image_three.message} style={{ opacity: "1" }} />
              )}
            </Col>

            {/* Images - fourth image */}
            <Col className="position-relative">
              <StyledImageContainer>
                {img4url ? (
                  <Image src={img4url} alt="image" layout="fill" objectFit="cover" />
                ) : (
                  <div className="img-placeholder">
                    <Icon icon={icons.map((icon) => icon.image)} fontSize="58px" color="#FC5156" />
                  </div>
                )}
              </StyledImageContainer>
              <UploadLabel htmlFor="imgUpload4">Upload image</UploadLabel>
              <Form.Control
                id="imgUpload4"
                type="file"
                name="image_4"
                {...register("image_four")}
                onChange={(e) => {
                  setImg4url(URL.createObjectURL(e.target.files[0]));
                  setImgUpload4(e.target.files[0]);
                }}
                style={{ opacity: "0" }}
              />
              {errors.image_four && (
                <ValidationErrorImage errorName={errors.image_four.message} style={{ opacity: "1" }} />
              )}
            </Col>
          </Row>

          <StyledFormButton className="mb-4 mt-5" type="submit">
            {submitting ? "Adding stay.." : "Add stay"}
            <Icon icon={icons.map((icon) => icon.plus)} color="white" fontSize="20px" className="ms-12" />
          </StyledFormButton>
          {error && (
            <Alertbox className="mt-3" type="danger">
              Sorry, something went wrong. Please try again later.
            </Alertbox>
          )}

          {submitted && (
            <AlertboxSuccess className="mt-5 mb-0">
              <StyledHeading size="3">Success! </StyledHeading>
              The stay was added.
              <span className="d-block mb-4">It will be display on the Holidaze website in a moment.</span>
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

export default AddForm;
