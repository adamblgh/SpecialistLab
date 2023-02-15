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
import { Epitoipar } from "./components/Epitoipar";
import { Vendeglatas } from "./components/Vendeglatas";
import { Logisztika } from "./components/Logisztika";
import { Egeszsegugy } from "./components/Egeszsegugy";
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
        <Route path="/kezdolap" element={<Home loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/hirdetesek" element={<Ad loggedInUser={loggedInUser}/>} />  
        <Route path="/rolunk" element={<About loggedInUser={loggedInUser}/>} />
        <Route path="/profil" element={<Profile loggedInUser={loggedInUser}/>} /> 
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser}/>} />
        <Route path="/hirdetes-feladas" element={< AdUpload loggedInUser={loggedInUser}/>} />
        <Route path="/ceghirdetes" element={< NewAdComp loggedInUser={loggedInUser}/>} />
        <Route path="/maganhirdetes" element={< NewAdPers loggedInUser={loggedInUser}/>} />
        <Route path="/epitoipar" element={< Epitoipar loggedInUser={loggedInUser}/>} />
        <Route path="/vendeglatas" element={< Vendeglatas loggedInUser={loggedInUser}/>} />
        <Route path="/logisztika" element={< Logisztika loggedInUser={loggedInUser}/>} />
        <Route path="/egeszsegugy" element={< Egeszsegugy loggedInUser={loggedInUser}/>} />
      </Routes>
      </div>
      
    </QueryClientProvider>
  );
}

export default App;