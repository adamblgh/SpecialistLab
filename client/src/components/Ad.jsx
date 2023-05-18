import React, { useState, useRef, useEffect } from "react";
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
/*import { getSelectedSubcateg } from "./getData.js";*/
import { PopUpModal } from "./PopUpModal";
import { getAds } from "./getData.js";

export const Ad = ({ loggedInUser, setLoggedInUser, selectedCategId }) => {
  console.log("Kiválasztott kategória idje", selectedCategId);
  const [selCity, setSelCity] = useState({ id: 0, name: "" });
  const [selSubCateg, setSelSubCateg] = useState(0);
  /*const [selectedSubcategId,setSelectedSubcategId] = useState(0);*/
  const [id, setId] = useState(0);
  const [subCategId, setSubCategId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const toggle = () => setIsOpen(!isOpen);


      console.log("Kérés a szerverhez")
      const { data: dataAds, status: statusAds } = useQuery(
        ["ads",selCity.id,selSubCateg],
        getAds
      );
      statusAds=='success' && console.log(dataAds)

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
  console.log(selCity, "a kiválasztott város");

  const { data: dataSelectedCateg, status: statusSelectedCateg } = useQuery(
    ["selectedCateg", selectedCategId],
    getOnclickSubCateg
  );
  statusSelectedCateg == "success" && console.log("Ok", dataSelectedCateg.data);

  const handleSelect = (event) => {
    let selectedName = event.target.options[event.target.selectedIndex].text;
    console.log(selectedName);
    setSelCity({ id: event.target.value, name: selectedName });
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

/*console.log("sadasdlmaskasndjasnjab",selectedSubcategId)*/

  {/*const {data: dataSelectedSubcateg, status: statusSelectedSubcateg} = useQuery(
    ["getSelectedSubcateg", selectedSubcategId],
    getSelectedSubcateg
  );
  statusSelectedSubcateg == "success" && console.log("Ok",dataSelectedSubcateg.data); */}

  const handleSelectSubCateg = (event) => {
    setSelSubCateg(event.target.value);
    console.log("handleselectsubcateg",event.target.value);
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
                      onClick={()=>setLoggedInUser({})}
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
          <h1 className="sitetitle p-3 aboutcim text-white text-center">Hirdetések</h1>
          <br />
          <div className="row hirdetesigazit">
            <div className="col-md-3 talalat bg-white rounded-pill p-1 text-black">
              <h5 className="ml-3 mt-1 text-center">
                <span className="szam">
                  {statusCounted == "success" &&
                    selCity.id != 0 &&
                    selSubCateg != 0 &&
                    dataCounted.data[0].nr}
                </span>{" "}
                {selCity.id != 0 && selSubCateg != 0 ? "találat" : "Válasszon"}
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
                    <option
                      key={obj.id}
                      id={obj.id}
                      value={obj.id}
                      name={obj.name}
                    >
                      {obj.name}
                    </option>
                  ))}
              </Input>
            </div>
            <div className="col-md-4 talalat bg-white rounded-pill p-1 text-black">
              <Input
                className="legorduloelemek"
                type="select"
                name="select"
                data-test="test"
                id="test"
                onChange={handleSelectSubCateg}
              >
                <option value="0">Munkakör</option>
                {selectedCategId != 0 && statusSelectedCateg == "success"
                  ? dataSelectedCateg.data.map((obj) => (
                      <option
                        key={obj.id}
                        id={obj.id}
                        data-datum={obj.datum}
                        value={obj.description}
                      >
                        {obj.description}
                      </option>
                    ))
                  : statusSubCateg == "success" &&
                    dataSubCateg.data.map((obj) => (
                      <option key={obj.id} id={obj.id} value={obj.description}>
                        {obj.description}
                      </option>
                    ))}
              </Input>
            </div>
          </div>

          {/*KÁRTYA*/}
          {selCity.id != 0 && selSubCateg != 0 && (
            <div className="row ad mt-5">
              <div className="col-md-10 bal-ad">
                <h4 className="bg-primary p-2 adtitle">
                  <span className="munka">{selSubCateg}&nbsp;</span>
                </h4>
                <p className="mt-4">
                  <i class="fa-solid fa-location-dot"></i>
                  <span> {selCity.id !=0 && selCity.name}</span>
                </p>
                <div className="col-md-8">
                  <p className="hirdetoszoveg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora laudantium deleniti dolor officiis, maiores
                    excepturi id vel doloremque fugit aut magni quibusdam est,
                    suscipit maxime? Alias qui quae a adipisci.
                  </p>
                </div>
              </div>



              <div className="row mt-3">
                <div className="col-md-8 align-items-center">
                  <input
                    type="button"
                    value="Jelentkezés"
                    data-toggle="modal"
                    onClick={toggleModal}
                    className="btn btn-primary"
                  />
                </div>
                <div className="col-md-4">
                  <p className="datum mt-2">&nbsp;</p>
                </div>
              </div>
            </div>
          )}

          {/*KÁRTYA*/}
        </div>
      </div>
      <footer className="">
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
      {modal && <PopUpModal modal={modal} setModal={setModal} />}
    </>
  );
};
