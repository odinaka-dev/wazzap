import { baseURL } from "@/config";

const axiosInstance = require("axios").create({
  baseURL: `${baseURL}/api/auth`,
});

axiosInstance.interceptors.request.use(
  (config: any) => {
    const token =
      localStorage.getItem("token") || sessionStorage.getItem("token");

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  }
  //   (error) => Promise.reject(error)
);

export default axiosInstance;
