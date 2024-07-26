import axios from "axios";

const BASE_URL = "https://dummyjson.com";

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  // timeout: 5000,
});
