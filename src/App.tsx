import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UsersAndAnimals from "components/UsersAndAnimals";
import Users from "components/Users";
import Animals from "components/Animals";

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
            <Route path="/Users_and_animals/users/" element={<Users />} />
            <Route path="/users/new" element={<NewUser />} />
            <Route path="/Users_and_animals/animals/" element={<Animals />} />
          </Routes>
        </div>
      </BrowserRouter>
    </QueryClientProvider>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
