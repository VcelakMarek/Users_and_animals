import { useQueryClient, useMutation } from "@tanstack/react-query";
import Button from "components/Button";
import { deleteAnimal } from "api/AnimalApi";
import type { Animal } from "types/AnimalType";

type AnimalProps = {
  animalData: Animal;
};

const Animal = ({ animalData }: AnimalProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteAnimalMutate } = useMutation({
    mutationFn: deleteAnimal,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Animals"] });
    },
  });

  const handleDelete = async () => {
    await deleteAnimalMutate(animalData.id);
  };

  return (
    <div className="mb-4 flex h-[72px] w-full items-center justify-around rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px] sm:h-[300px] md:h-[200px] md:flex-wrap">
      <h4 className="basis-5/12 text-start">{animalData.name}</h4>
      <h3 className="basis-1/12">{animalData.type}</h3>
      <h3 className="basis-1/12">{animalData.age}</h3>

      <div className="flex basis-2/12 items-center gap-4">
        <Button color="grey" link={`edit/${animalData.id}`}>
          Edit
        </Button>
        <Button color="red" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default Animal;
