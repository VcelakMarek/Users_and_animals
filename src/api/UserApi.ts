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
