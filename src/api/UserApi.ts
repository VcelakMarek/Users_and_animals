import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { GET, POST, PATCH, DELETE } from "connectors/fetch";
import type { User, UserNoId } from "types/UserType";

const URL = "/users";

export const getUsers = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["Users"],
    queryFn: () => GET<User[]>(URL),
  });

  return { userList: data?.data, isFetching, error };
};

export const getUser = (id: string) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["User"],
    queryFn: () => GET<User>(`${URL}/${id}`),
  });

  return { userData: data?.data, isFetching, error };
};

export const editUser = (userData: User): Promise<AxiosResponse<User>> => {
  return PATCH<User>(`${URL}/${userData.id}`, userData);
};

export const addUser = (
  userData: UserNoId,
): Promise<AxiosResponse<UserNoId>> => {
  return POST<UserNoId>(URL, userData);
};

export const deleteUser = (id: string): Promise<AxiosResponse<void>> => {
  return DELETE(`${URL}/${id}`);
};
