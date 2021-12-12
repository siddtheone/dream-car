import axios from "axios";
import { API_BASE_URL } from "config";

export const apiClinet = axios.create({
  baseURL: API_BASE_URL,
});

export default apiClinet;
