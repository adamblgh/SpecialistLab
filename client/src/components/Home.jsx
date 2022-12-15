import React, { useState } from "react";
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
  return (
    <div>
      <h1 className="mt-2 title lineUp text-center">
        SPECIALIST <span className="kek">LAB™</span>
      </h1>
      <h6 className="mt-2 lineUp2  text-center">
        Válasszon az alábbiak közül...
      </h6>
      <div className="row lineUp">
        {/*REGISZTRÁCIÓ*/}
        <div className="col-md-6">
          <Form className="login border p-3 shadow mt-1 rounded">
            <h3>Regisztráció</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />

          </Form>
        </div>

        {/*BEJELENTKEZÉS*/}
        <div className="col-md-6">
        <Form className="login border p-3 shadow mt-1 rounded">
            <h3>Bejelentkezés</h3>
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
              
          </Form>
        </div>
      </div>
    </div>
  );
};
