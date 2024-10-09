import axios, { AxiosResponse } from "axios";

const BASE_URL = "https://inqool-interview-api.vercel.app/api";

export const GET = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "GET", baseURL: BASE_URL, url });
};

export const POST = async <T>(
  url: string,
  data: T,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "POST", baseURL: BASE_URL, url, data });
};

export const PATCH = async <T>(
  url: string,
  data: Partial<T>,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "PATCH", baseURL: BASE_URL, url, data });
};

export const DELETE = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "DELETE", baseURL: BASE_URL, url });
};
