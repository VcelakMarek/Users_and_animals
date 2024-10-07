import { FC } from "react";
import { Form } from "react-final-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import FormInput from "components/FormInput";
import Button from "components/Button";
import { addAnimal, editAnimal } from "api/AnimalApi";
import type { Animal } from "types/AnimalType";

type AnimalFormProps = {
  formValues?: Animal;
  animalId?: string;
};

const AnimalForm: FC<AnimalFormProps> = ({ formValues, animalId }) => {
  const navigate = useNavigate();
  console.log(formValues, "VALUES");

  const { mutate: addAnimalMutate } = useMutation({
    mutationFn: addAnimal,
  });

  const { mutate: editAnimalMutate } = useMutation({
    mutationFn: editAnimal,
  });

  const onSubmit = async (values: Animal) => {
    const newAnimal: Animal = {
      ...values,
      id: animalId ?? "",
      type: values.type ?? "cat",
    };
    console.log("values:", values);

    if (formValues) editAnimalMutate(values);
    else addAnimalMutate(newAnimal);

    navigate(-1);

    //confirm add/edit
  };

  return (
    <div className="bg-white-background grid h-screen w-screen place-items-center pt-10">
      <h1>{formValues ? "Edit Animal" : "New Animal"}</h1>
      <Form
        id={formValues ? "editAnimal" : "newAnimal"}
        className="w-screen"
        onSubmit={onSubmit}
        initialValues={formValues ?? null}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <main className="bg-white-background flex h-screen w-screen flex-wrap pt-10">
              <section className="mx-auto flex flex-col gap-1">
                <FormInput inputName="Name" id="name" />
                <div className="mb-16 flex flex-row justify-between">
                  <FormInput
                    id="type"
                    inputName="Type"
                    size="small"
                    inputType="select"
                    selectValues={["Cat", "Dog", "Others"]}
                  />

                  <FormInput
                    id="age"
                    inputName="Age"
                    size="small"
                    inputType="number"
                  />
                </div>
                <div>
                  <Button type="submit" color="purple">
                    {formValues ? "Save changes" : "Add Animal"}
                  </Button>
                </div>
              </section>
            </main>
          </form>
        )}
      />
    </div>
  );
};

export default AnimalForm;
