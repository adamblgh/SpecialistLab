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
    </>
  );
};
