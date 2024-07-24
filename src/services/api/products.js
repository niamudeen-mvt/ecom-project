import axios from "axios";

export const fetchProducts = (url) => {
  try {
    const resp = axios.get(url);
    return resp;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};
