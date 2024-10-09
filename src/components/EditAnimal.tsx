import { useParams } from "react-router-dom";
import { getAnimal } from "api/AnimalApi";
import AnimalForm from "components/AnimalForm";

const EditAnimal = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Invalid Animal ID</div>;
  }

  const { animalData, isFetching } = getAnimal(id);

  if (isFetching) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-purple" />
      </div>
    );
  }

  if (!animalData) {
    return <p>Animal doesn&apos;t exist</p>;
  }
  //error handling

  return <AnimalForm formValues={animalData} animalId={id} />;
};

export default EditAnimal;
