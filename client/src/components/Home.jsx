import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { Register } from "./Register";
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

export const Home = ({ setLoggedInUser }) => {
  const navigate = useNavigate();

  return (
    <div>
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
      <div className="row box justify-content-center align-items-center">
        {/*CÍM*/}
        <div className="col-md-4">
          <h1 className="mt-2 titleh1 lineUp">
            SPECIALIST LAB™
          </h1>
        </div>
        {/*PANELEK*/}
        <div className="col-md-8">
          <div className="row lineUp">
            {/*REGISZTRÁCIÓ*/}
            <div className="col-md-6">
              <motion.div
                whileHover={{ scale: [null, 1.03, 1.06, 1.1] }}
                transition={{ duration: 0.2 }}
                onClick={() => navigate("/register")}
                className="panel register p-3 mt-1 rounded"
              >
                <h3 className="kitoltes text-center">Regisztráció</h3>
              </motion.div>
            </div>

            {/*BEJELENTKEZÉS*/}
            <div className="col-md-6">
              <motion.div
                whileHover={{ scale: [null, 1.03, 1.06, 1.1] }}
                transition={{ duration: 0.2 }}
                className="panel login p-3 mt-1 rounded"
              >
                <h3 className="kitoltes text-center">Bejelentkezés</h3>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
