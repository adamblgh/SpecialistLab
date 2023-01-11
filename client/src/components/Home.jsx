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

export const Home = ({ setLoggedInUser }) => {
  const navigate = useNavigate();

  return (
    <>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
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
    
          <div className="lineUp">
            {/*REGISZTRÁCIÓ*/}
            <div style={{marginRight:5,minWidth:250}}>
              <motion.div
                whileHover={{ scale: [null, 1.08] }}
                transition={{ duration: 1 }}
                onClick={() => navigate("/register")}
                className="panel register p-3 mt-1 rounded"
              >
                <h3 className="kitoltes text-left">Regisztráció</h3>
              </motion.div>
            </div>

            {/*BEJELENTKEZÉS*/}
            <div style={{marginLeft:5,minWidth:250}}>
              <motion.div
                whileHover={{ scale: [null, 1.08] }}
                transition={{ duration: 1 }}
                onClick={() => navigate("/login")}
                className="panel login p-3 mt-1 rounded"
              >
                <h3 className="kitoltes text-left">Bejelentkezés</h3>
              </motion.div>
            </div>
          </div>
    
      </div>
      <footer>
        <div className="d-flex text-center align-items-center justify-content-center">
          {/*SOCIAL MEDIA*/}
          <div className="col">
            <ul>
              <li>
                <a target="_blank" href="#">
                  {" "}
                  <i class="fa fa-facebook" aria-hidden="true"></i>{" "}
                </a>{" "}
              </li>
              <li>
                <a target="_blank" href="#">
                  {" "}
                  <i class="fa fa-twitter" aria-hidden="true"></i>{" "}
                </a>{" "}
              </li>
              <li>
                <a target="_blank" href="https://github.com/adamblgh">
                  {" "}
                  <i class="fa fa-github" aria-hidden="true"></i>{" "}
                </a>{" "}
              </li>
            </ul>
          </div>
          {/*NAME*/}
          <div className="col">
            <img
              className="img-fluid logo"
              src={logo}
              type="image/png"
              alt="Logo"
            />
            <span className="m-2">SPECIALIST LAB™</span>
          </div>
          {/*Date*/}
          <div className="col-md-4">
            @2023 | Minden jog fenntartva!
          </div>
        </div>
      </footer>
    </>
  );
};
