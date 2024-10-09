import Animal from "components/Animal";
import Button from "components/Button";
import { getAnimals } from "api/AnimalApi";

const AnimalList = () => {
  const { animalList, isFetching, error } = getAnimals();

  if (isFetching) {
    return <div className="h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="h-screen">Error occured: {error.message}</div>;
  }

  if (!animalList || !animalList.length) {
    return <p>List is empty</p>;
  }

  return (
    <>
      <header className="w-800px flex h-14 flex-row items-start justify-around p-16">
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
      <div className="m-auto mt-16 h-2/3 w-[65%] overflow-y-auto pr-2 sm:w-11/12">
        {animalList.map((animalData) => (
          <Animal animalData={animalData} key={animalData.id} />
        ))}
      </div>
    </>
  );
};

export default AnimalList;
