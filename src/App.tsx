import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersAndAnimals from "components/UsersAndAnimals";
import UserList from "components/UserList";
import AnimalList from "components/AnimalList";
import EditUser from "components/EditUser";
import EditAnimal from "components/EditAnimal";
import UserForm from "components/UserForm";
import AnimalForm from "components/AnimalForm";

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
            <Route path="/" element={<UsersAndAnimals />} />
            <Route path="/users/" element={<UserList />} />
            <Route path="/users/new" element={<UserForm />} />
            <Route path="/users/edit/:id" element={<EditUser />} />
            <Route path="/animals/" element={<AnimalList />} />
            <Route path="/animals/new" element={<AnimalForm />} />
            <Route path="/animals/edit/:id" element={<EditAnimal />} />
          </Routes>
        </div>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
