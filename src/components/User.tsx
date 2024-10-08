import { useQueryClient, useMutation } from "@tanstack/react-query";
import Button from "components/Button";
import AccessStatus from "components/AccessStatus";
import { deleteUser, editUser } from "api/UserApi";
import type { Gender, User } from "types/UserType";

type UserProps = {
  userData: User;
};

const getGenderColor = (gender: Gender) => {
  switch (gender) {
    case "male":
      return "text-blue-500";
    case "female":
      return "text-pink-500";
    default:
    case "other":
      return "text-gray-500";
  }
};

const User = ({ userData }: UserProps) => {
  const queryClient = useQueryClient();

  const { mutateAsync: deleteUserMutate } = useMutation({
    mutationFn: deleteUser,
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

  const handleDelete = async () => {
    await deleteUserMutate(userData.id);
  };

  const banUser = async () => {
    await editUserMutate({ ...userData, banned: true });
  };

  return (
    <div className="mb-4 flex h-[72px] w-full items-center justify-around rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px] sm:h-[300px] md:h-[200px] md:flex-wrap">
      <h4 className="basis-3/12 text-start">{userData.name}</h4>
      <h3
        className={`basis-1/12 first-letter:uppercase ${getGenderColor(userData.gender)}`}
      >
        {userData.gender}
      </h3>

      <AccessStatus isBanned={userData.banned} onClick={banUser} />

      <div className="flex basis-2/12 items-center gap-4 md:basis-1/2 md:justify-center">
        <Button color="grey" link={`edit/${userData.id}`}>
          Edit
        </Button>
        <Button color="red" onClick={handleDelete}>
          Delete
        </Button>
      </div>
    </div>
  );
};

export default User;
