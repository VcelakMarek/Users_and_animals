import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { GET, POST, PATCH, DELETE } from "connectors/fetch";
import type { Animal, AnimalNoId } from "types/AnimalType";

const URL = "/animals";

export const getAnimals = () => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["Animals"],
    queryFn: () => GET<Animal[]>(URL),
  });

  return { animalList: data?.data, isFetching, error };
};

export const getAnimal = (id: string) => {
  const { data, isFetching, error } = useQuery({
    queryKey: ["Animal", id],
    queryFn: () => GET<Animal>(`${URL}/${id}`),
  });

  return { animalData: data?.data, isFetching, error };
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
