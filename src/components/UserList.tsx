import User from "components/User";
import Button from "components/Button";
import { getUsers } from "api/UserApi";

const UserList = () => {
  const { userList, isFetching, error } = getUsers();

  if (isFetching) {
    return <div className="h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="h-screen">Error occured: {error.message}</div>;
  }

  if (!userList || !userList.length) {
    return <p>List is empty</p>;
  }

  return (
    <>
      <header className="w-800px mt-16 flex h-14 flex-row items-start justify-around">
        <div>
          <h1>Users</h1>
          <h2>There are {userList.length} users</h2>
        </div>
        <div className="flex gap-10">
          <Button color="purple" link="new">
            Add User
          </Button>
        </div>
      </header>
      <div className="mt-16 grid place-items-center">
        {userList.map((userData) => (
          <User userData={userData} key={userData.id} />
        ))}
      </div>
    </>
  );
};

export default UserList;
