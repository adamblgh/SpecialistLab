import React, { useState } from "react";
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
} from "reactstrap";
import { NavLink } from "react-router-dom";

export const MyNavbar = ({ loggedInUser, setLoggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar expand="sm">
        <NavbarBrand href="/"><span className="title">SPECIALIST LAB™</span></NavbarBrand>
        <NavbarToggler onClick={toggle} />
      </Navbar>
    </div>
  );
};