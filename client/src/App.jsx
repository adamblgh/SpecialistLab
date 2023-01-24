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
      <div className="container-fluid app">
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </div>
      <div className="bg">
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setLoggedInUser={setLoggedInUser}/>}/>
        <Route path="/home" element={loggedInUser?.id ? <Home loggedInUser={loggedInUser}/> : <Login setLoggedInUser={setLoggedInUser}/>}/>
        <Route path="/ad" element={loggedInUser?.id ? <Ad loggedInUser={loggedInUser}/> : <Login setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/about" element={loggedInUser?.id ? <About loggedInUser={loggedInUser}/> : <Login setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/profile" element={loggedInUser?.id ? <Profile loggedInUser={loggedInUser}/> : <Login setLoggedInUser={setLoggedInUser}/>} />
      </Routes>  
      </div>
      
    </QueryClientProvider>
  );
}

export default App;