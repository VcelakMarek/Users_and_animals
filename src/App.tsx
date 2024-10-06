import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersAndAnimals from "components/UsersAndAnimals";
import UserList from "components/UserList";
import AnimalList from "components/AnimalList";
import NewUser from "components/NewUser";
import NewAnimal from "components/NewAnimal";
import EditUser from "components/EditUser";
import EditAnimal from "components/EditAnimal";

const App = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: Infinity,
        retry: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <div className="h-screen bg-light-bg">
          <Routes>
            <Route path="/Users_and_animals/" element={<UsersAndAnimals />} />
            <Route path="/Users_and_animals/users/" element={<UserList />} />
            <Route path="/Users_and_animals/users/new" element={<NewUser />} />
            <Route
              path="/Users_and_animals/users/edit/:id"
              element={<EditUser />}
            />
            <Route
              path="/Users_and_animals/animals/"
              element={<AnimalList />}
            />
            <Route
              path="/Users_and_animals/animals/new"
              element={<NewAnimal />}
            />
            <Route
              path="/Users_and_animals/animals/edit/:id"
              element={<EditAnimal />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
