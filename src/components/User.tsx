import { useMutation } from "@tanstack/react-query";
import Button from "components/Button";
import AccessStatus from "components/AccessStatus";
import { deleteUser } from "api/UserApi";
import type { User } from "types/UserType";

type Props = {
  userData: User;
};

const User = ({ userData }: Props) => {
  const { mutate: deleteUserMutate } = useMutation({
    mutationFn: deleteUser,
  });

  const handleDelete = () => {
    deleteUserMutate(userData.id);
  };

  return (
    <div className="mb-4 flex h-[72px] w-[65%] items-center justify-around rounded-lg border-[1.5px] border-transparent bg-white px-[2%] drop-shadow hover:border-[1.5px] sm:h-[300px] sm:w-11/12 md:h-[200px] md:flex-wrap">
      <h4 className="basis-3/12 text-start">{userData.name}</h4>
      <h3 className="basis-1/12">{userData.gender}</h3>

      <AccessStatus isBanned={userData.banned} />

      <div className="flex basis-2/12 items-center gap-4">
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
