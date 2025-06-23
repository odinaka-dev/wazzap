// import { AxiosRequestConfig } from "axios";
import axiosInstance from "@/lib/axios";
import { Response } from "@/types/general";

import type {
  RegisterUsers,
  UserLoginData,
  UserDashboardData,
} from "@/types/auth";

export const register = async (data: RegisterUsers): Promise<Response<any>> => {
  let url = "/register";
  const response = await axiosInstance.post(url, data);
  return response.data as Response<any>;
};

export const login = async (
  data: UserLoginData
): Promise<Response<{ token: string }>> => {
  let url = "/login";
  const response = await axiosInstance.post(url, data);
  return response.data as Response<{ token: string }>;
};
