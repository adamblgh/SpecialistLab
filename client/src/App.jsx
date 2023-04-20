import "./App.css";
import { Welcome } from "./components/Welcome";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { Home } from "./components/Home";
import { Ad } from "./components/Ad";
import { About } from "./components/About";
import { Profile } from "./components/Profile";
import { AdUpload } from "./components/AdUpload";
import { NewAdComp } from "./components/NewAdComp";
import { NewAdPers } from "./components/NewAdPers";
import { AdminPanel } from "./components/AdminPanel";
import { Routes, Route, useNavigate } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React,{ useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



const queryClient = new QueryClient();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedCategId, setSelectedCategId] = useState(0);
  const navigate=useNavigate()
  console.log('loggedInUser:',loggedInUser)
  useEffect(()=>{
    console.log("változás")
    if(!loggedInUser.id)
      navigate('/')
  },[loggedInUser])
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container-fluid gx-0 app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/kezdolap" element={<Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} setSelectedCategId={setSelectedCategId}/>} />
        <Route path="/hirdetesek" element={<Ad loggedInUser={loggedInUser} selectedCategId={selectedCategId}/>} />
        <Route path="/rolunk" element={<About loggedInUser={loggedInUser}/>} />
        <Route path="/profil" element={<Profile loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} /> 
        <Route path="/hirdetes-feladas" element={< AdUpload loggedInUser={loggedInUser}/>} />
        <Route path="/ceghirdetes" element={< NewAdComp loggedInUser={loggedInUser} selectedCategId={selectedCategId}/>} />
        <Route path="/maganhirdetes" element={< NewAdPers loggedInUser={loggedInUser} selectedCategId={selectedCategId}/>} />
        <Route path="/adminpanel" element={<AdminPanel loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
      </Routes>
      </div>
      
    </QueryClientProvider>
  );
}

export default App;