import { DATEOPTIONS } from "../../../constants/misc";

export default function DateFunction() {
  const date = new Date().toLocaleDateString("en-GB", DATEOPTIONS);
  const todaysDate = date.split(",").join("");
  return todaysDate;
}
