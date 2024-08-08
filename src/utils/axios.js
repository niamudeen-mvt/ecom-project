import axios from "axios";
import { _config } from "../constants";
import {
  generateToken,
  getItemsFromLocalStorage,
  setItemsIntoLocalStorage,
} from "./helper";

const BASE_URL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 2000,
});

axios.interceptors.request.use(
  (config) => {
    const token = getItemsFromLocalStorage(_config.TOKEN);
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },

  (error) => {
    console.log("error: ", error);
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => response, // Pass through successful responses
  async (error) => {
    const originalRequest = error.config;
    if (error?.response?.status === 401) {
      const newToken = await generateToken();

      if (newToken) {
        setItemsIntoLocalStorage(_config.TOKEN, newToken, false);
        axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

        return axios(originalRequest);
      }
    }

    return Promise.reject(error);
  }
);
