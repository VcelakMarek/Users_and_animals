import { FC } from "react";
import { Form } from "react-final-form";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import FormInput from "components/FormInput";
import Button from "components/Button";
import { addUser, editUser } from "api/UserApi";
import type { User } from "types/UserType";

type UserFormProps = {
  formValues?: User;
  userId?: string;
};

const UserForm: FC<UserFormProps> = ({ formValues }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { mutateAsync: addUserMutate } = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
  });

  const { mutateAsync: editUserMutate } = useMutation({
    mutationFn: editUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["Users"] });
    },
  });

  const onSubmit = async (values: User) => {
    const newUser: User = {
      ...values,
      banned: String(values.banned) === "true" ? true : false,
    };

    try {
      if (formValues) {
        await editUserMutate({
          ...values,
          banned: String(values.banned) === "true" ? true : false,
        });
      } else {
        await addUserMutate(newUser);
      }
      navigate(-1);
    } catch (error) {
      console.error("Error during mutation:", error);
    }
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
                    initialValue={formValues?.gender ?? "female"}
                    selectValues={[
                      { value: "female", label: "Female" },
                      { value: "male", label: "Male" },
                      { value: "other", label: "Other" },
                    ]}
                  />

                  <FormInput
                    id="banned"
                    inputName="Banned"
                    size="small"
                    inputType="select"
                    initialValue={String(formValues?.banned ?? "false")}
                    selectValues={[
                      { value: "false", label: "Allowed" },
                      { value: "true", label: "Banned" },
                    ]}
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
