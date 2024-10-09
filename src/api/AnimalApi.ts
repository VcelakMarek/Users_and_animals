import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { GET, POST, PATCH, DELETE } from "connectors/fetch";
import type { Animal, AnimalNoId } from "types/AnimalType";

const URL = "/animals";

export const getAnimals = () => {
  const {
    data: response,
    isFetching,
    refetch,
    error,
  } = useQuery({
    queryKey: ["Animals"],
    queryFn: () => GET<Animal[]>(URL),
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
    queryFn: () => GET<Animal>(`${URL}/${id}`),
    staleTime: 0, // Disable caching (always considered stale)
    refetchOnWindowFocus: false, // Avoid refetching when window regains focus
  });

  const animalData = response ? response.data : null;

  return { animalData, isFetching, refetch, error };
};

export const editAnimal = (
  animalData: Animal,
): Promise<AxiosResponse<Animal>> => {
  return PATCH<Animal>(`${URL}/${animalData.id}`, animalData);
};

export const addAnimal = (
  animalData: AnimalNoId,
): Promise<AxiosResponse<AnimalNoId>> => {
  return POST<AnimalNoId>(URL, animalData);
};

export const deleteAnimal = (id: string): Promise<AxiosResponse<void>> => {
  return DELETE(`${URL}/${id}`);
};
