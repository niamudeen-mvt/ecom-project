import axios from "axios";

export const fetchProducts = async (url) => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};
