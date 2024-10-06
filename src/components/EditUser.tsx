import { useParams } from "react-router-dom";
import UserForm from "components/UserForm";
import { getUser } from "api/UserApi";

const EditUser = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Invalid User ID</div>;
  }

  const { userData, isFetching } = getUser(id);

  if (isFetching) {
    return (
      <>
        <div className="flex h-screen items-center justify-center">
          <div className="h-20 w-20 animate-spin rounded-full border-8 border-gray-300 border-t-purple" />
        </div>
      </>
    );
  }

  if (!userData) {
    return <p>User doesn`t exist</p>;
  }
  //error handling

  return <UserForm formValues={userData} userId={id} />;
};

export default EditUser;
