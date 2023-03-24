import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import bg from "../components/background/bg.mp4";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import { FileDrop } from "./FileDrop";
import { useMutation } from "react-query";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import { updateAvatar,changePassword } from "./getData";
import { Button,Spinner } from "reactstrap"
import { MyModal } from "./MyModal";

export const Profile = ({ loggedInUser, setLoggedInUser }) => {
        <>      
      
      {modal && <MyModal modal={modal} setModal={setModal} setLoggedInUser={setLoggedInUser} username={loggedInUser.username} avatar_id={loggedInUser.avatar_id}/>}
    </>
}