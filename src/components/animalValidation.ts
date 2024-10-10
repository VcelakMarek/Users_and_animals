import * as Yup from "yup";
import { Animal } from "types/AnimalType";

const animalValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  type: Yup.string()
    .oneOf(["cat", "dog", "other"], "Invalid type")
    .required("Type is required"),
  age: Yup.number()
    .positive("Age must be a positive number")
    .integer("Age must be an integer")
    .required("Age is required"),
});

export const validateAnimal = (values: Animal) => {
  try {
    animalValidationSchema.validateSync(values, { abortEarly: false });
  } catch (err) {
    const errors: { [key: string]: string } = {};
    if (err instanceof Yup.ValidationError) {
      err.inner.forEach((error) => {
        if (error.path) errors[error.path] = error.message;
      });
    }
    return errors;
  }
};
