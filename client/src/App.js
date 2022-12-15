import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const queryClient = new QueryClient();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <QueryClientProvider client={queryClient}>
      <div className="holder d-flex justify-content-center">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
