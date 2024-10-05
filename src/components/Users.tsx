import User from "components/User";
import Button from "components/Button";
import { getUsers } from "api/UserApi";
import type { User as UserType } from "types/UserType";

const Users = () => {
  const { userList } = getUsers();
  if (!userList) {
    return null;
  }

  console.log(userList);

  return (
    <>
      <header className="w-800px mt-16 flex h-14 flex-row items-start justify-around">
        <div>
          <h1>Users</h1>
          <h2>There are {userList.length} users</h2>
        </div>
        <div className="flex gap-10">
          <Button color="purple" link={`/list/newUser`}>
            Add User
          </Button>
        </div>
      </header>
      <div className="mt-16 grid place-items-center">
        {Array.isArray(userList) && userList.length > 0 ? (
          userList.map((userData: UserType) => (
            <User userData={userData} key={userData.id} />
          ))
        ) : (
          <p>List is empty</p>
        )}
      </div>
    </>
  );
};

export default Users;
