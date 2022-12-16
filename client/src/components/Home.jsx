import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMutation } from "react-query";
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

  const asd = () =>{
    
  }

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
            onClick={asd}
            className="panel register p-3 mt-1 rounded"
          >
            <h3 className="kitoltes">Regisztráció</h3>
          </motion.div>
        </div>

        {/*BEJELENTKEZÉS*/}
        <div className="col-md-6">
          <motion.div
            whileHover={{ scale: [null, 1.1] }}
            transition={{ duration: 1 }}
            className="panel login p-3 mt-1 rounded"
          >
            <h3 className="kitoltes">Bejelentkezés</h3>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
