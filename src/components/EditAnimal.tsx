import { useParams } from "react-router-dom";
import { getAnimal } from "api/AnimalApi";
import AnimalForm from "components/AnimalForm";
import Loading from "components/Loading";

const EditAnimal = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Invalid Animal ID</div>;
  }

  const { animalData, isFetching, error } = getAnimal(id);

  if (isFetching) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        Error occured: {error.message}
      </div>
    );
  }

  if (!animalData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Animal doesn&apos;t exist</p>;
      </div>
    );
  }

  return <AnimalForm formValues={animalData} animalId={id} />;
};

export default EditAnimal;
