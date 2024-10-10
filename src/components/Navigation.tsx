import { useNavigate } from "react-router-dom";
import Button from "components/Button";

const Navigation = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-grey text-white">
      <div className="m-auto flex h-14 w-4/6 items-center justify-between md:w-5/6">
        <Button color="transparent" onClick={() => navigate(-1)}>
          ← Go Back
        </Button>
        <Button link="/" color="grey">
          Home
        </Button>
      </div>
    </nav>
  );
};

export default Navigation;
