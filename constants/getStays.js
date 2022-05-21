import axios from "axios";
import { API_URL } from "./api";

export async function getStays() {
  let holidaze = [];

  try {
    const response = await axios.get(API_URL + "?per_page=50");
    holidaze = response.data;
  } catch (error) {
    console.log(error);
  }
  return holidaze;
}
