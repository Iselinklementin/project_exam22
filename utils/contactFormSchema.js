import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup.string().required("Please enter your name"),
  email: yup
    .string()
    .required("Please enter a valid email address")
    .email("Please enter a valid email address"),
  subject: yup.string().required("Please enter a subject"),
  message: yup
    .string()
    .required("Please enter your message")
    .min(20, "Your message must at be at least 20 characters"),
});
