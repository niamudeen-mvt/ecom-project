import { api } from "../../utils/axios";

export const fetchProducts = async (url) => {
  try {
    const response = await api.get(url);
    return response;
  } catch (error) {
    console.log("error: ", error);
    return error;
  }
};
