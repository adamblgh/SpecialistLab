import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import bg from "../components/background/bg.mp4";
import { Title } from "./Title";

export const Welcome = ({ setLoggedInUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          zIndex: "-1",
        }}
      >
        <source src={bg} type="video/mp4" />
      </video>
      <div className="panelek" >
        {/*CÍM*/}
        <Title/>
        {/*PANELEK*/}
        <div className="loginregister">
            {/*BEJELENTKEZÉS*/}
            <motion.div
                style={{marginRight:5,minWidth:250}}
                whileHover={{ scale: [null, 1.08] }}
                transition={{ duration: 1 }}
                onClick={() => navigate("/login")}
                className="welcomepanel kitoltes panel lineUp login mt-1 rounded"
              >
                <h3 className="text-left welcomecimke">Bejelentkezés</h3>
              </motion.div>

            {/*REGISZTRÁCIÓ*/}
            <motion.div
                style={{marginRight:5,minWidth:250}}
                whileHover={{ scale: [null, 1.08] }}
                transition={{ duration: 1 }}
                onClick={() => navigate("/register")}
                className="welcomepanel kitoltes panel lineUp register p-3 mt-1 rounded"
              >
                <h3 className="text-left welcomecimke">Regisztráció</h3>
              </motion.div>  
        </div>
    
      </div>
      <footer>
        <div className="row footer">
          <div className="col-md-4 social">
              <a target="_blank" href="https://github.com/adamblgh/Specialistlab"><i class="fa-brands fa-2xl fa-github"></i></a>
              <a target="_blank" href="https://hu-hu.facebook.com/"><i class="fa-brands fa-2xl fa-facebook"></i></a>
              <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-2xl fa-instagram"></i></a>

          </div>
          <div className="col-md-4 d-flex mid justify-content-center align-items-center ">
            <img className="img-fluid footerlogo mr-3" src="slab_logo.png" alt="Logo" />
            <span>SPECIALIST LAB™</span>
          </div>
          <div className="col-md-4 d-flex align-items-center end">
          <div>Hungary @2023</div>
          </div>
        </div>
      </footer>
    </>
  );
};
