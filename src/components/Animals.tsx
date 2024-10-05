import Animal from "components/Animal";
import Button from "components/Button";
import { getAnimals } from "api/AnimalApi";
import type { Animal as AnimalType } from "types/AnimalType";

const Animals = () => {
  const { animalList } = getAnimals();
  if (!animalList) {
    return null;
  }
  console.log(animalList);

  return (
    <>
      <header className="w-800px mt-16 flex h-14 flex-row items-start justify-around">
        <div>
          <h1>Animals</h1>
          <h2>There are {animalList.length} animals</h2>
        </div>
        <div className="flex gap-10">
          <Button color="purple" link={`/list/newAnimal`}>
            Add Animal
          </Button>
        </div>
      </header>
      <div className="mt-16 grid place-items-center">
        {Array.isArray(animalList) && animalList.length > 0 ? (
          animalList.map((animalData: AnimalType) => (
            <Animal animalData={animalData} key={animalData.id} />
          ))
        ) : (
          <p>List is empty</p>
        )}
      </div>
    </>
  );
};

export default Animals;
