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
import { Routes, Route, } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import React,{ useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import { useCookies } from 'react-cookie';


const queryClient = new QueryClient();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [selectedCategId, setSelectedCategId] = useState(0);
  const [cookies, setCookie] = useCookies(['user']);
  console.log('loggedInUser:',loggedInUser)
 
  
  return (
    <QueryClientProvider client={queryClient}>
      <div className="container-fluid gx-0 app">
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login loggedInUser={cookies} setLoggedInUser={setLoggedInUser}/>} />
        
        {loggedInUser?.id && <>
        <Route path="/kezdolap" element={<Home loggedInUser={cookies} setLoggedInUser={setLoggedInUser} setSelectedCategId={setSelectedCategId}/>} />
        <Route path="/hirdetesek" element={<Ad loggedInUser={cookies} selectedCategId={selectedCategId}/>} />
        <Route path="/rolunk" element={<About loggedInUser={cookies}/>} />
        <Route path="/profil" element={<Profile loggedInUser={cookies} setLoggedInUser={setLoggedInUser}/>} /> 
        <Route path="/hirdetes-feladas" element={< AdUpload loggedInUser={cookies}/>} />
        <Route path="/ceghirdetes" element={< NewAdComp loggedInUser={cookies} selectedCategId={selectedCategId}/>} />
        <Route path="/maganhirdetes" element={< NewAdPers loggedInUser={cookies} selectedCategId={selectedCategId}/>} />
        <Route path="/adminpanel" element={<AdminPanel loggedInUser={cookies} setLoggedInUser={setLoggedInUser}/>} /></>}
      </Routes>
      </div>
      
    </QueryClientProvider>
  );
}

export default App;