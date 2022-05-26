import * as yup from "yup";

export const schema = yup.object().shape({
  title: yup.string().required(),
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter your email address")
    .email("Please enter a valid email address"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(20, "Your message must at be at least 20 characters"),
  from_date: yup.string(),
  to_date: yup.string(),
  phone: yup.string().required("Please enter your number"),
  room: yup.string(),
  stay_type: yup.string(),
  how_many: yup.string().required("Please select number of travelers"),
});
