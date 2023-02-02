import React, { useState,useRef } from "react";
import { NavLink } from "react-router-dom";
import bg from "../components/background/bg.mp4";
import logo from "../components/image/slab_logo.png";
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
  Form,
  FormGroup,
  Input,
  Label
} from "reactstrap";
import { useQuery } from "react-query";
import { getCities } from "./getData.js";

export const Ad = ({ loggedInUser, setLoggedInUser }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {data,status} = useQuery("cities",getCities)
  status == "success" && console.log(data.data)


  const handleSelect = (event) =>{
    console.log("Klikk volt",event.target)
    console.log(event.target.value)
    if(event.target.value!=0){
      console.log("remove")
      document.getElementById("deletedSelect").remove()
    }
  }

  

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
        <div className="row">
        <div className="col-md-3 talalat bg-white rounded-pill p-1 text-black">
          <h5 className="ml-3 mt-1 text-center"><span className="szam">0</span> találat</h5>  
        </div>
        <div className="col-md-3 talalat bg-white rounded-pill p-1 text-black">
          <Input className="varosok" type="select" name="select" id="exampleSelect" onChange={handleSelect}>
            <option value="0" id="deletedSelect">Összes</option>
            {status == "success" && data.data.map(obj =><option key={obj.id} id={obj.id} >{obj.name}</option>)}
          </Input>
        </div> 
        

        </div>
        
{/*KÁRTYA*/}
<div className="row ad p-3 mt-5">
          <div className="col-md-10 bal-ad">
            <h4>Festő</h4>
                <p className="mt-4"><i class="fa-solid fa-location-dot"></i><span>  Kecskemét</span></p>
                <div className="col-md-8">
                  <p className="hirdetoszoveg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium deleniti dolor officiis, maiores excepturi id vel doloremque fugit aut magni quibusdam est, suscipit maxime? Alias qui quae a adipisci.</p>
                </div>
          </div>

          <div className="col-md-2 mt-2 jobb">
            <img className="img-fluid cegavatarlogo" src={logo} alt="" />
          </div>




          <div className="row mt-3">
            <div className="col-md-8">
            <input type="button" value="Állás megtekintése" className="btn btn-primary" />
            </div>
            <div className="col-md-4">
            <p className="datum mt-2">Febr. 1.</p>
            </div>
          </div>
                
        </div>
{/*KÁRTYA*/}
        </div>
      </div>
      <footer className="nofixed">
        <div className="row helyez">
          <div className="col-md-4">
              <a target="_blank" href="https://github.com/adamblgh/Specialistlab"><i class="fa-brands fa-2xl fa-github"></i></a>
              <a target="_blank" href="https://hu-hu.facebook.com/"><i class="fa-brands fa-2xl fa-facebook"></i></a>
              <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-2xl fa-instagram"></i></a>

          </div>
          <div className="col-md-4 d-flex mid justify-content-center align-items-center ">
            <img className="img-fluid footerlogo" src="slab_logo.png" alt="Logo" />
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
