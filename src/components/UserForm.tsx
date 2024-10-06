import { FC } from "react";
import { FormApi } from "final-form";
import { Form } from "react-final-form";
import { useNavigate } from "react-router-dom";
import FormInput from "components/FormInput";
import Button from "components/Button";
// import { updateUser, addUser } from "api/UserApi";
import type { User } from "types/UserType";

type UserFormProps = {
  form: FormApi<FormData>;
  formValues?: User;
  userId?: string;
};

const UserForm: FC<UserFormProps> = ({ formValues, userId }) => {
  const navigate = useNavigate();
  console.log(formValues, "VALUES");

  const onSubmit = async (values: User) => {
    const newUser: User = {
      ...values,
      id: userId ?? values.id,
    };
    // formValues
    //   ? await updateUser(formValues.id, values)
    //   : await addUser(newUser);

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
                    selectValues={["male", "female", "other"]}
                  />

                  <FormInput
                    id="banned"
                    inputName="Banned"
                    size="small"
                    inputType="select"
                    selectValues={["true", "false"]}
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
