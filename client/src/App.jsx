import "./App.css";
import { Welcome } from "./components/Welcome";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Ad } from "./components/Ad";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

const queryClient = new QueryClient();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  console.log('loggedInUser:',loggedInUser)
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container-fluid gx-0 app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/home" element={<Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/ad" element={<Ad loggedInUser={loggedInUser}/>} />  
        <Route path="/about" element={<About loggedInUser={loggedInUser}/>} />
        <Route path="/profile" element={<Profile loggedInUser={loggedInUser}/>} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>}/> 
      </Routes>
      </div>
      
    </QueryClientProvider>
  );
}

export default App;