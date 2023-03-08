import React, { useState, useRef } from "react";
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
  Label,
} from "reactstrap";
import { useQuery } from "react-query";
import { getCities } from "./getData.js";
import { getCountId } from "./getData.js";
/*import { getCateg } from "./getData.js";*/
import { getSubCateg } from "./getData.js";
import { getOnclickSubCateg } from "./getData.js";

export const Ad = ({ loggedInUser, setLoggedInUser,selectedCategId }) => {
  console.log("adasdsadsadsad",selectedCategId);
  const [selCity, setSelCity] = useState({id:0,name:""});
  const [selSubCateg, setSelSubCateg] = useState(0);
  const [id, setId] = useState(0);
  const [subCategId, setSubCategId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const { data: dataCities, status: statusCities } = useQuery(
    "cities",
    getCities
  );
  //statusCities == "success" && console.log(dataCities.data);

  const { data: dataCounted, status: statusCounted } = useQuery(
    ["countedCities", selCity.id],
    getCountId
  );
  //statusCounted == "success" && console.log(dataCounted.data[0].nr);
  console.log(selCity,'a kiválasztott város')

  const {data:dataSelectedCateg,status:statusSelectedCateg} = useQuery(
    ["selectedCateg",selectedCategId],
    getOnclickSubCateg
  );
  statusSelectedCateg == "success" && console.log("Ok",dataSelectedCateg.data) 


  const handleSelect = (event) => {
    //console.log(event.target.id,event.target.name)
    let selectedName=event.target.options[event.target.selectedIndex].text
    console.log(selectedName)
    setSelCity({id:event.target.value,name:selectedName});
    //console.log("Klikk volt", event.target);
    //console.log(event.target.value);
  };

  /*const { data: dataCateg, status: statusCateg } = useQuery(
    ["categs", id],
    getCateg
  );
  statusCateg == "success" && console.log(dataCateg.data);*/

  const { data: dataSubCateg, status: statusSubCateg } = useQuery(
    ["subCategs", id],
    getSubCateg
  );
  statusSubCateg == "success" && console.log(dataSubCateg.data);

  const handleSelectSubCateg = (event) => {
    setSelSubCateg(event.target.value);
    console.log(event.target.value);
  };


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
                <NavLink
                  to="/hirdetesek"
                  className="nav-link active"
                  aria-current="page"
                >
                  Hirdetések
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/hirdetes-feladas" className="nav-link">
                  Hirdetésfeladás
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
                  <NavLink to="/profil" className="nav-link">
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
      <div className="container-ad mt-5 hirdetes">
        <div className="tartalom">
          <h1 className="sitetitle p-3 text-white text-center">Hirdetések</h1>
          <br />
          <div className="row">
            <div className="col-md-3 talalat bg-white rounded-pill p-1 text-black">
              <h5 className="ml-3 mt-1 text-center">
                <span className="szam">
                  {statusCounted == "success" && dataCounted.data[0].nr}
                </span>{" "}
                találat
              </h5>
            </div>
            <div className="col-md-4 talalat bg-white rounded-pill p-1 text-black">
              <Input
                className="legorduloelemek"
                type="select"
                name="select"
                id="selectedCity"
                onChange={handleSelect}
              >
                <option value="0">Város</option>
                {statusCities == "success" &&
                  dataCities.data.map((obj) => (
                    <option key={obj.id} id={obj.id} value={obj.id} name={obj.name}>
                      {obj.name}
                    </option>
                  ))} 
              </Input>
            </div>
            {/*<div className="col-md-3 talalat bg-white rounded-pill p-1 text-black">
              <Input className="legorduloelemek" type="select" name="select">
                <option value="0">Összes</option>
                {statusCateg == "success" &&
                  dataCateg.data.map((obj) => (
                    <option key={obj.id} id={obj.id} value={obj.id}>
                      {obj.description}
                    </option>
                  ))}
              </Input>
            </div>*/}
            <div className="col-md-4 talalat bg-white rounded-pill p-1 text-black">
              <Input
                className="legorduloelemek"
                type="select"
                name="select"
                onChange={handleSelectSubCateg}
              >
                <option value="0">Munkakör</option>
                {selectedCategId!=0 && statusSelectedCateg == "success" ?
                  dataSelectedCateg.data.map((obj) => (
                    <option key={obj.id} id={obj.id} value={obj.id}>
                      {obj.description}
                    </option>
                  )): statusSubCateg == "success" && dataSubCateg.data.map((obj) => (
                    <option key={obj.id} id={obj.id} value={obj.id}>
                      {obj.description}
                    </option>
                  ))}
              </Input>
            </div>
          </div>

          {/*KÁRTYA*/}
          <div className="row ad mt-5">
            <div className="col-md-10 bal-ad">
              <h4 className="bg-primary p-2 adtitle">
                <span className="munka">{selSubCateg}</span>
              </h4>
              <p className="mt-4">
                <i class="fa-solid fa-location-dot"></i>
                <span> {selCity.id>0 && selCity.name}</span>
              </p>
              <div className="col-md-8">
                <p className="hirdetoszoveg">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Tempora laudantium deleniti dolor officiis, maiores excepturi
                  id vel doloremque fugit aut magni quibusdam est, suscipit
                  maxime? Alias qui quae a adipisci.
                </p>
              </div>
            </div>

            <div className="col-md-2 mt-2 jobb">
              <img
                className="img-fluid cegkep cegavatarlogo"
                src={logo}
                alt=""
              />
            </div>

            <div className="row mt-3">
              <div className="col-md-8 align-items-center">
                <input
                  type="button"
                  value="Állás megtekintése"
                  className="btn btn-primary"
                />
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
        <div className="row gx-0 helyez mt-2">
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
              className="img-fluid footerlogo"
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
