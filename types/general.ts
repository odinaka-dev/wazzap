export type Response<T> = {
  status: string;
  success: boolean;
  message: string;
  data: T;
};
