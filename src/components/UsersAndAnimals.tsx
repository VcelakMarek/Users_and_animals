import { Link } from "react-router-dom";

const UsersAndAnimals = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-light-bg p-6">
      <header className="mb-10">
        <h1>Menu</h1>
      </header>
      <main className="flex w-full max-w-md flex-col items-center justify-center space-y-6">
        <Link
          to="users"
          className="flex h-16 w-full transform items-center justify-center rounded-lg border-2 border-transparent bg-white text-lg font-semibold text-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#7C5DFA] hover:bg-[#F3F4F6] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#7C5DFA] focus:ring-opacity-50"
        >
          Users
        </Link>

        <Link
          to="animals"
          className="flex h-16 w-full transform items-center justify-center rounded-lg border-2 border-transparent bg-white text-lg font-semibold text-gray-800 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:border-[#7C5DFA] hover:bg-[#F3F4F6] hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-[#7C5DFA] focus:ring-opacity-50"
        >
          Animals
        </Link>
      </main>
    </div>
  );
};

export default UsersAndAnimals;
