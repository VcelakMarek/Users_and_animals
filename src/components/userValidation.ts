import * as Yup from "yup";
import { User } from "types/UserType";

const userValidationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  gender: Yup.string()
    .oneOf(["female", "male", "other"], "Invalid gender")
    .required("Gender is required"),
  banned: Yup.boolean().required("Banned status is required"),
});

export const validateUser = (values: User) => {
  try {
    userValidationSchema.validateSync(values, { abortEarly: false });
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
