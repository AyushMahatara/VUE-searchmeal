import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASED_URL,
});

export default axiosClient;
