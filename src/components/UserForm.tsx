import { FC } from "react";
import { Form } from "react-final-form";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import FormInput from "components/FormInput";
import Button from "components/Button";
import { addUser, editUser } from "api/UserApi";
import type { User } from "types/UserType";

type UserFormProps = {
  formValues?: User;
  userId?: string;
};

const UserForm: FC<UserFormProps> = ({ formValues, userId }) => {
  const navigate = useNavigate();
  console.log(formValues, "VALUES");

  const { mutate: addUserMutate } = useMutation({
    mutationFn: addUser,
  });

  const { mutate: editUserMutate } = useMutation({
    mutationFn: editUser,
  });

  const onSubmit = async (values: User) => {
    const newUser: User = {
      ...values,
      id: userId ?? "",
      gender: values.gender ?? "female",
      banned: values.banned ?? false,
    };
    console.log("values:", values);

    if (formValues) editUserMutate(values);
    else addUserMutate(newUser);

    navigate(-1);

    //confirm add/edit
  };

  return (
    <div className="bg-white-background grid h-screen w-screen place-items-center pt-10">
      <h1>{formValues ? "Edit User" : "New User"}</h1>
      <Form
        id={formValues ? "editUser" : "newUser"}
        className="w-screen"
        onSubmit={onSubmit}
        initialValues={formValues ?? null}
        render={({ handleSubmit }) => (
          <form onSubmit={handleSubmit}>
            <main className="bg-white-background flex h-screen w-screen flex-wrap pt-10">
              <section className="mx-auto flex flex-col gap-1">
                <FormInput inputName="Name" id="name" />
                <div className="mb-9 flex flex-row justify-between">
                  <FormInput
                    id="gender"
                    inputName="Gender"
                    size="small"
                    inputType="select"
                    selectValues={["female", "male", "other"]}
                  />

                  <FormInput
                    id="banned"
                    inputName="Banned"
                    size="small"
                    inputType="select"
                    selectValues={["false", "true"]}
                  />
                </div>
                <div>
                  <Button type="submit" color="purple">
                    {formValues ? "Save changes" : "Add User"}
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

export default UserForm;
