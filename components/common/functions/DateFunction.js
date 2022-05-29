import { DATEOPTIONS } from "../../../constants/misc";

// Function that shows the date:
// day, date, month, year, clock

export default function DateFunction() {
  const date = new Date().toLocaleDateString("en-GB", DATEOPTIONS);
  const todaysDate = date.split(",").join("");
  return todaysDate;
}
