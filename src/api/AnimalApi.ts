import { useQuery } from "@tanstack/react-query";
import { GET } from "connectors/fetch";
import type { Animal } from "types/AnimalType";

const url = "/animals";

export const getAnimals = () => {
  const {
    data: response,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["Animals"],
    queryFn: () => GET<Animal[]>(url),
  });

  const animalList = response ? response.data : null;

  return { animalList, isFetching, refetch, error };
};
