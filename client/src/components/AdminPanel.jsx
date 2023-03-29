import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
} from "reactstrap";
import { useQuery } from "react-query";
import { getUsers } from "./getData.js";

export const AdminPanel = ({ loggedInUser, setLoggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {data:dataUsers, status:statusUsers} =useQuery(
    "users",
    getUsers
  );
  statusUsers == "success" && console.log(dataUsers.data);

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
      <div>
        <Navbar expand="sm" light color="light" fixed="top">
          <NavbarBrand>
            <img
              className="img-fluid"
              style={{ width: "35px", height: "35px" }}
              alt="SpecialistLab_Logo"
              src="slab_logo.png"
            ></img>
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink to="/kezdolap" className="nav-link">
                  Főoldal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/rolunk" className="nav-link">
                  Rólunk
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hirdetesek" className="nav-link">
                  Hirdetések
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hirdetes-feladas" className="nav-link">
                  Hirdetésfeladás
                </NavLink>
              </NavItem>
              {loggedInUser?.role == "admin" && (
                <NavItem>
                  <NavLink
                    to="/adminpanel"
                    className="nav-link active"
                    aria-current="page"
                  >
                    Admin Panel
                  </NavLink>
                </NavItem>
              )}
            </Nav>

            {loggedInUser?.username ? (
              <Nav navbar>
                <NavItem className="nav-link d-flex align-items-center">
                  <NavLink to="/profil" className="nav-link">
                    <img
                      src={loggedInUser.avatar}
                      className="avatar"
                      alt="Avatar"
                      style={{ width: "30px", marginRight: "20px" }}
                    />
                    <span style={{ cursor: "pointer" }}>
                      {loggedInUser.username}
                    </span>
                  </NavLink>
                </NavItem>
                <NavItem className="d-flex align-items-center">
                  <NavLink to="/">
                    <span
                      className="btn text-info"
                      onClick={() => setLoggedInUser({})}
                    >
                      Kijelentkezés
                    </span>
                  </NavLink>
                </NavItem>
              </Nav>
            ) : (
              <Nav navbar>
                <NavItem>
                  <NavLink to="/login" className="nav-link">
                    Bejelentkezés
                  </NavLink>
                </NavItem>
              </Nav>
            )}
          </Collapse>
        </Navbar>
      </div>
      <div className="container-ad mt-5 aboutfooter">
        <div className="tartalom">
          <h1 className="sitetitle p-3 text-white text-center">Admin Panel</h1>
          <h1 className="text-white p-3 text-center">Felhasználók</h1>
          {statusUsers == "success" && dataUsers.data.map(obj=><div className="row text-white border p-2 mt-2 justify-content-center userkerekites">
            {`Username: ${obj.username}  Email: ${obj.email}  Role: ${obj.role}`}
            </div>)}
        </div>
      </div>
      <footer className="nofixed">
        <div className="row w-100 helyez gx-0">
          <div className="col-md-4">
            <a target="_blank" href="https://github.com/adamblgh/Specialistlab">
              <i class="fa-brands fa-2xl fa-github"></i>
            </a>
            <a target="_blank" href="https://hu-hu.facebook.com/">
              <i class="fa-brands fa-2xl fa-facebook"></i>
            </a>
            <a target="_blank" href="https://www.instagram.com/">
              <i class="fa-brands fa-2xl fa-instagram"></i>
            </a>
          </div>
          <div className="col-md-4 d-flex mid justify-content-center align-items-center ">
            <img
              className="img-fluid footerlogo mr-3"
              src="slab_logo.png"
              alt="Logo"
            />
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
