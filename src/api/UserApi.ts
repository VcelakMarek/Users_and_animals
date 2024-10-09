import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { GET, POST, PATCH, DELETE } from "connectors/fetch";
import type { User, UserNoId } from "types/UserType";

const URL = "/users";

export const getUsers = () => {
  const {
    data: response,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: () => GET<User[]>(URL),
  });

  const userList = response ? response.data : null;

  return { userList, isFetching, refetch, error };
};

export const getUser = (id: string) => {
  const {
    data: response,
    isFetching,
    isLoading,
    refetch,
    error,
  } = useQuery({
    queryKey: ["User"],
    queryFn: () => GET<User>(`${URL}/${id}`),
    staleTime: 0, // Disable caching (always considered stale)
    refetchOnWindowFocus: false, // Avoid refetching when window regains focus
  });

  const userData = response ? response.data : null;

  return { userData, isFetching, isLoading, refetch, error };
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
