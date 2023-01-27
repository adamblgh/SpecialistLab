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

export const Ad = ({ loggedInUser, setLoggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

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
                <NavLink to="/home" className="nav-link">
                  Főoldal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about" className="nav-link">
                  Rólunk
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/ad"
                  className="nav-link active"
                  aria-current="page"
                >
                  Hirdetések
                </NavLink>
              </NavItem>
              {loggedInUser?.role == "admin" && (
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    Admin Panel
                  </DropdownToggle>
                  <DropdownMenu end>
                    <DropdownItem>Users</DropdownItem>
                    <DropdownItem>Products</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <NavItem>
                        <NavLink to="books">Books</NavLink>
                      </NavItem>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
              )}
            </Nav>

            {loggedInUser?.username ? (
              <Nav navbar>
                <NavItem className="nav-link d-flex align-items-center">
                  <NavLink to="/profile" className="nav-link">
                    {/*<img src={loggedInUser.avatar} alt="Avatar" style={{width:"20px",marginRight:"10px"}} />*/}
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
      <div className="container-ad mt-5">
        <div className="tartalom">
        <h1 className="text-white text-center">Építőipar munkák</h1>
        <br />
        <div className="talalat bg-white rounded-pill p-1 text-black">
          <h5 className="ml-3 mt-1 text-center"><span className="szam">999</span> találat</h5>
        </div>
        
{/*KÁRTYA*/}
        <div className="row ad p-3 mt-5">
              <h4>Festő</h4>
              <p className="mt-4"><i class="fa-solid fa-location-dot"></i><span>  Kecskemét</span></p>
              <div className="col-md-8">
                <p className="hirdetoszoveg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium deleniti dolor officiis, maiores excepturi id vel doloremque fugit aut magni quibusdam est, suscipit maxime? Alias qui quae a adipisci.</p>
              </div>
                <div className="col-md-8 gomb mt-5"></div>
                <div className="col-md-4 datum mt-5">Január 27.</div>
        </div>
{/*KÁRTYA*/}
        </div>
      </div>
      {/*<div className="container">
        <h1 className="text-center">Hirdetések</h1>
        <div className="hirdetesek">
          <div class="card text-center">
            <div class="card-header">Munkakör</div>
            <div class="card-body">
              <h5 class="card-title">Hely</h5>
              <p class="card-text">
                Ide jön a leírás
              </p>
              <a href="#" class="btn btn-primary">
                Érdekel
              </a>
            </div>
            <div class="card-footer text-muted">Dátum</div>
          </div>
        </div>
        </div>*/}
    </>
  );
};
