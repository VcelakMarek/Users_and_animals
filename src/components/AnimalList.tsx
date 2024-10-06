import Animal from "components/Animal";
import Button from "components/Button";
import { getAnimals } from "api/AnimalApi";

const AnimalList = () => {
  const { animalList } = getAnimals();

  if (!animalList || !animalList.length) {
    return <p>List is empty</p>;
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
          <Button color="purple" link="new">
            Add Animal
          </Button>
        </div>
      </header>
      <div className="mt-16 grid place-items-center">
        {animalList.map((animalData) => (
          <Animal animalData={animalData} key={animalData.id} />
        ))}
      </div>
    </>
  );
};

export default AnimalList;
