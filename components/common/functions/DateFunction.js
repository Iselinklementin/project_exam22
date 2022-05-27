import { DATEOPTIONS } from "../../../constants/misc";

// Function that shows the date the way i want to
// day, date, month, year, clock

export default function DateFunction() {
  const date = new Date().toLocaleDateString("en-GB", DATEOPTIONS);
  const todaysDate = date.split(",").join("");
  return todaysDate;
}
