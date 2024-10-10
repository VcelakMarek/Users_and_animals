import { useParams } from "react-router-dom";
import { getUser } from "api/UserApi";
import UserForm from "components/UserForm";
import Loading from "components/Loading";

const EditUser = () => {
  const { id } = useParams();

  if (!id) {
    return <div>Invalid User ID</div>;
  }

  const { userData, isFetching, error } = getUser(id);

  if (isFetching) {
    return <Loading />;
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        Error occured: {error.message}
      </div>
    );
  }

  if (!userData) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>Users doesn&apos;t exist</p>;
      </div>
    );
  }

  return <UserForm formValues={userData} userId={id} />;
};

export default EditUser;
