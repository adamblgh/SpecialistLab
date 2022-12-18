import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
import { Register } from "./Register";
import { validate } from 'react-email-validator';
import {
  Form,
  FormGroup,
  Input,
  Label,
  FormFeedback,
  Button,
} from "reactstrap";
import { useNavigate } from "react-router-dom";
  

export const Home = ({ setLoggedInUser }) => {
  const navigate = useNavigate()

  return (
    <div>
      <div className="col-12">
      <h1 className="mt-2 title lineUp">
        SPECIALIST LAB™
      </h1>  
      </div>
      <div className="row lineUp">
      
        {/*REGISZTRÁCIÓ*/}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 1 }}
            onClick={()=>navigate('/register')}
            className="panel register p-3 shadow mt-1 rounded"
          >
            <h3 className="kitoltes text-center">Regisztráció</h3>
          </motion.div>
        </div>

        {/*BEJELENTKEZÉS*/}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 1 }}
            className="panel login p-3 mt-1 rounded"
          >
            <h3 className="kitoltes text-center">Bejelentkezés</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
