import "./App.css";
import { Home } from "./components/Home";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
    </QueryClientProvider>
  );
}

export default App;
