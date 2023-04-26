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

export const About = ({ loggedInUser, setLoggedInUser }) => {
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
                <NavLink to="/kezdolap" className="nav-link">
                  Főoldal
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  to="/rolunk"
                  className="nav-link active"
                  aria-current="page"
                >
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
              <NavLink to="/adminpanel" className="nav-link">
                Admin Panel
              </NavLink>
            </NavItem>
            )}
            </Nav>

            {loggedInUser?.username ? (
              <Nav navbar>
                <NavItem className="nav-link d-flex align-items-center">
                  <NavLink to="/profil" className="nav-link">
                    <img src={loggedInUser.avatar} className="avatar" alt="Avatar" style={{width:"30px",marginRight:"20px"}} />
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
          <h1 className="sitetitle p-3 text-white text-center">A Specialist Lab csapata</h1>

          <div className="row ad p-3 mt-5">
          <h4 className="nev bg-primary">Czeczon Kristóf</h4>
            <p className="mt-4">
              <i class="fa-solid fa-location-dot"></i>
              <span> Kocsér</span>
            </p>
            <div className="col-md-8">
              <p className="hirdetoszoveg">
                Czeczon Kristóf vagyok 20 éves. Kocséron élek. Régen fociztam, manapság szabaidőmet barátaimmal töltöm vagy autókázok.
                Szeretem a szoftverfejlesztést, a weblap készítés tetszik a legjobban!
                Külföldön szeretnék dolgozni ezáltal az idegennyelvet is jobban kell tanulnom!
              </p>
            </div>
            <div className="col-md-4 aboutkepek">
              <img
                className="img-fluid kepek"
                src="czeczike.jpg"
                alt="Czeczon"
              />
            </div>
          </div>
          <div className="row ad p-3 mt-5">
          <h4 className="nev bg-primary">Ölvödi Soma</h4>
            <p className="mt-4">
              <i class="fa-solid fa-location-dot"></i>
              <span> Kecskemét</span>
            </p>
            <div className="col-md-8">
              <p className="hirdetoszoveg">
              Ölvödi Soma vagyok, 20 éves. Körülbelül 10 évig úsztam versenyszerűen, de kiszerettem belőle. 
              Ma már a programozás iránt érdeklődöm, és ezen a területen is szeretnék elhelyezkedni a közeljövőben.
              Szívemhez inkább a backend programozás áll közelebb, de a frontend része is érdekel.
              Szabadidőmben úszómester vagyok, és szeretek a barátaimmal online játszani.
              </p>
            </div>
            <div className="col-md-4 aboutkepek">
              <img className="img-fluid kepek" src="somika.jpg" alt="Soma" />
            </div>
          </div>
          <div className="row ad p-3 mt-5">
            <h4 className="nev bg-primary">Balogh Ádám</h4>
            <p className="mt-4">
              <i class="fa-solid fa-location-dot"></i>
              <span> Kecskemét</span>
            </p>
            <div className="col-md-8">
              <p className="hirdetoszoveg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto consequuntur, beatae eligendi maiores molestiae vel ratione aliquid dolor iste minus qui ut atque consequatur quis blanditiis a sequi velit quam?
              </p>
            </div>
            <div className="col-md-4 aboutkepek">
              <img className="img-fluid kepek" src="adam.jpg" alt="Ádám" />
            </div>
          </div>
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
