import Axios from "axios";

export const Http = Axios.create({
  baseURL: process.env["NEXT_PUBLIC_API_URL"],
  withCredentials: true,
  timeout: 120000,
});