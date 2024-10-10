import { useState, useEffect } from "react";
import debounce from "lodash/debounce";
import orderBy from "lodash/orderBy";
import { getUsers } from "api/UserApi";
import User from "components/User";
import Button from "components/Button";
import Loading from "components/Loading";
import type { UserNoId } from "types/UserType";

const UserList = () => {
  const { userList, isFetching, error } = getUsers();

  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);

  const [sortKey, setSortKey] = useState<keyof UserNoId | null>("name");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const handleFilterChange = debounce((value: string) => {
    setDebouncedQuery(value);
  }, 200);

  const handleClearFilter = () => {
    setQuery("");
  };

  const handleSort = (key: keyof UserNoId) => {
    if (sortKey === key) {
      setSortDirection((prevDirection) =>
        prevDirection === "asc" ? "desc" : "asc",
      );
    } else {
      setSortKey(key);
      setSortDirection("asc");
    }
  };

  useEffect(() => {
    handleFilterChange(query);

    return () => {
      handleFilterChange.cancel();
    };
  }, [query]);

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

  if (!userList || !userList.length) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p>List is empty</p>;
      </div>
    );
  }

  const sortedUsers = orderBy(userList, [sortKey], [sortDirection]) as User[];

  const filteredUsers = sortedUsers.filter((user) =>
    user.name.toLowerCase().includes(debouncedQuery.toLowerCase()),
  );

  const getSortArrow = (key: keyof UserNoId | null) => {
    if (sortKey === key) {
      return sortDirection === "asc" ? "↑" : "↓";
    }
    return "";
  };

  return (
    <>
      <header className="m-auto flex h-14 w-4/6 flex-row items-center justify-between py-16 md:w-5/6">
        <div>
          <h1>Users</h1>
          <h2>There are {userList.length} users</h2>
        </div>
        <Button color="purple" link="new">
          Add User
        </Button>
      </header>

      <div className="m-auto flex w-4/6 flex-row justify-between pb-5 pr-7 sm:flex-col sm:pr-0 md:w-11/12">
        <div className="mt-4 flex items-center space-x-2 md:justify-between md:pb-5">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name"
            className="!m-0 border border-gray-300 px-4 py-2"
          />
          {query && (
            <Button color="grey" onClick={handleClearFilter}>
              Clear
            </Button>
          )}
        </div>

        <div className="flex flex-col items-start gap-2">
          <h2 className="text-xl">Filters</h2>
          <div className="flex gap-3">
            <Button hasNoStyle onClick={() => handleSort("name")}>
              Name {getSortArrow("name")}
            </Button>
            <Button hasNoStyle onClick={() => handleSort("gender")}>
              Gender {getSortArrow("gender")}
            </Button>
            <Button hasNoStyle onClick={() => handleSort("banned")}>
              Banned {getSortArrow("banned")}
            </Button>
            <Button hasNoStyle onClick={() => setSortKey(null)}>
              Reset filter
            </Button>
          </div>
        </div>
      </div>
      <div className="m-auto h-3/5 w-4/6 overflow-y-auto pr-2 md:w-11/12">
        {filteredUsers.length > 0 ? (
          filteredUsers.map((userData) => (
            <User userData={userData} key={userData.id} />
          ))
        ) : (
          <p>No users found matching &quot;{debouncedQuery}&quot;</p>
        )}
      </div>
    </>
  );
};

export default UserList;
