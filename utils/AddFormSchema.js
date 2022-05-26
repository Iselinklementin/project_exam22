import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required("Please enter the title"),
  description: yup.string().required("Please enter your message").min(20, "Minimum 20 characters"),
  price: yup.number().typeError("Price must be a number").required("Please add a price"),
  stay_type: yup
    .string()
    .required("Select a stay type")
    .oneOf(["Hotel", "Apartment", "Bed & Breakfast"]),
  full_address: yup.string().required("Fill in address"),
  short_description: yup.string().required("Enter location"),
  nice_text: yup.string().required("Fill in a short description").min(20, "Minimum 20 characters"),
  stars: yup.string().required("Select a the review").oneOf(["3 stars", "4 stars", "5 stars"]),
  featured: yup.boolean(),
  wifi: yup.boolean(),
  kitchen: yup.boolean(),
  free_parking: yup.boolean(),
  breakfast: yup.boolean(),
  swimming_pool: yup.boolean(),
  pet_friendly: yup.boolean(),
  no_smoking: yup.boolean(),
  handicap_friendly: yup.boolean(),
  check_in: yup.string().required("Enter a check-in time"),
  checkout: yup.string().required("Enter a checkout time"),
  room_info: yup
    .string()
    .ensure()
    .when("stay_type", {
      is: "Apartment",
      then: yup.string().required("Please fill in room information"),
    })
    .ensure()
    .when("stay_type", {
      is: "Bed & Breakfast",
      then: yup.string().required("Please fill in room information"),
    }),
  room_type: yup
    .string()
    .ensure()
    .when("stay_type", {
      is: "Hotel",
      then: yup.string().required("Please fill in room"),
    }),
  image_one: yup
    .mixed()
    .test("required", "Please upload image", value => value.length > 0)
    .test("fileSize", "The file size is too large", value => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Unsupported File Format", value => {
      return value.length && ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
    }),
  image_two: yup
    .mixed()
    .test("required", "Please upload image", value => value.length > 0)
    .test("fileSize", "The file size is too large", value => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Unsupported File Format", value => {
      return value.length && ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
    }),
  image_three: yup
    .mixed()
    .test("required", "Please upload image", value => value.length > 0)
    .test("fileSize", "The file size is too large", value => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Unsupported File Format", value => {
      return value.length && ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
    }),
  image_four: yup
    .mixed()
    .test("required", "Please upload image", value => value.length > 0)
    .test("fileSize", "The file size is too large", value => {
      return value.length && value[0].size <= 5242880;
    })
    .test("fileType", "Unsupported File Format", value => {
      return value.length && ["image/jpeg", "image/png", "image/jpg"].includes(value[0].type);
    }),
});
