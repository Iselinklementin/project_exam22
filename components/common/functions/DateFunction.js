import { DATEOPTIONS } from "../../../constants/misc";

export default function DateFunction() {
  const date = new Date().toLocaleDateString("en-GB", DATEOPTIONS);
  const todaysDate = date.split(",").join("");
  return todaysDate;
}

// const options = {
//   weekday: "long",
//   day: "numeric",
//   month: "long",
//   year: "numeric",
//   hour: "2-digit",
//   minute: "2-digit",
// };
