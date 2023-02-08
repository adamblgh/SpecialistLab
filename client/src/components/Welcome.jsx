import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { Register } from "./Register";
import {Login} from "./Login"
import { validate } from "react-email-validator";
import {
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
import bg from "../components/background/bg.mp4";
import logo from "../components/image/slab_logo.png";

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
        <div className="title">
          <h1 className="mt-2 titleh1 lineUp">SPECIALIST LAB™</h1>
          <h6 className="mt-2 lineUp">Minden szakember egy helyen!</h6>
        </div>
        {/*PANELEK*/}
        <div className="loginregister">
            {/*REGISZTRÁCIÓ*/}
              <motion.div
                style={{marginRight:5,minWidth:250}}
                whileHover={{ scale: [null, 1.08] }}
                transition={{ duration: 1 }}
                onClick={() => navigate("/register")}
                className="panel lineUp register p-3 mt-1 rounded"
              >
                <h3 className="kitoltes text-left loginregister">Regisztráció</h3>
              </motion.div>

            {/*BEJELENTKEZÉS*/}
            <motion.div
                style={{marginRight:5,minWidth:250}}
                whileHover={{ scale: [null, 1.08] }}
                transition={{ duration: 1 }}
                onClick={() => navigate("/login")}
                className="panel lineUp login p-3 mt-1 rounded"
              >
                <h3 className="kitoltes text-left loginregister">Bejelentkezés</h3>
              </motion.div>
        </div>
    
      </div>
      <footer>
        <div className="row">
          <div className="col-md-4">
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
