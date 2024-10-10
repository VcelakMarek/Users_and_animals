import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center text-center">
      <h1 className="mb-4 text-4xl font-bold">404 - Page Not Found</h1>
      <p className="mb-4 text-lg">
        The page you are looking for doesn&apos;t exist.
      </p>
      <Link to="/" className="text-blue-500 underline">
        Go Back to Menu
      </Link>
    </div>
  );
};

export default NotFound;
