import { useQuery } from "@tanstack/react-query";
import { GET, POST, PUT, DELETE } from "connectors/fetch";
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

export const getAnimal = (id: string) => {
  const {
    data: response,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["Animal"],
    queryFn: () => GET<Animal>(`${url}/${id}`),
    staleTime: 0, // Disable caching (always considered stale)
    refetchOnWindowFocus: false, // Avoid refetching when window regains focus
  });

  const animalData = response ? response.data : null;

  return { animalData, isFetching, refetch, error };
};

export const editAnimal = (animalData: Animal) => {
  PUT(`${url}/${animalData.id}`, animalData);
};

export const addAnimal = (animalData: Animal) => {
  POST(url, animalData);
};

export const deleteAnimal = (id: string) => {
  DELETE(`${url}/${id}`);
};
