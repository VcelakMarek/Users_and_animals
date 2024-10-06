import { useQuery } from "@tanstack/react-query";
import { GET } from "connectors/fetch";
import type { User } from "types/UserType";

const url = "/users";

export const getUsers = () => {
  const {
    data: response,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["Users"],
    queryFn: () => GET<User[]>(url),
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
    queryFn: () => GET<User>(`${url}/${id}`),
    staleTime: 0, // Disable caching (always considered stale)
    refetchOnWindowFocus: false, // Avoid refetching when window regains focus
  });

  const userData = response ? response.data : null;

  return { userData, isFetching, isLoading, refetch, error };
};

export const updateUser = () => {};

export const addUser = () => {};
