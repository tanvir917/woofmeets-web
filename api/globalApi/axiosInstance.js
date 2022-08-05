import axios from "axios";

export const baseURl = process.env.NEXT_PUBLIC_BASE_URL;

const axiosInstance = axios.create({ baseURL });

export default axiosInstance;
