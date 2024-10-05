import axios, { AxiosResponse } from "axios";
import type { User } from "types/UserType";
import type { Animal } from "types/AnimalType";

const BASE_URL = "https://inqool-interview-api.vercel.app/api";

export const GET = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "GET", baseURL: BASE_URL, url });
};

export const POST = async <T>(
  url: string,
  data: User | Animal,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "POST", baseURL: BASE_URL, url, data });
};

export const PUT = async <T>(
  url: string,
  data: Partial<User | Animal>,
): Promise<AxiosResponse<T>> => {
  return axios({ method: "PUT", baseURL: BASE_URL, url, data });
};

export const DELETE = async <T>(url: string): Promise<AxiosResponse<T>> => {
  return axios({ method: "DELETE", baseURL: BASE_URL, url });
};
