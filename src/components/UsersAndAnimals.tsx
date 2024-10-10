import { Link } from "react-router-dom";

const UsersAndAnimals = () => {
  return (
    <div className="h-screen bg-light-bg">
      <div className="flex w-screen bg-light-bg">
        <main className="flex w-screen flex-col">
          <header className="w-800px mt-16 flex h-14 flex-row items-start justify-around">
            <div>
              <h1>Menu</h1>
            </div>
          </header>
          <div className="mt-16 flex flex-col items-center justify-center gap-4">
            <Link
              to="users"
              className="flex h-20 w-2/3 items-center justify-center rounded-lg border-[1.5px] border-transparent bg-white px-[2%] text-center drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA] sm:w-11/12"
            >
              Users
            </Link>

            <Link
              to="animals"
              className="flex h-20 w-2/3 items-center justify-center rounded-lg border-[1.5px] border-transparent bg-white px-[2%] text-center drop-shadow hover:border-[1.5px] hover:border-[#7C5DFA] sm:w-11/12"
            >
              Animals
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UsersAndAnimals;
