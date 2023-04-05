import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { FidgetSpinner } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { getUsers, delUser, addUser, updateUser } from "./getData.js";
import bg from "../components/background/bg.mp4";
import {
  useQuery,
  useQueryClient,
  useMutation,
  QueryClient,
} from "react-query";
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

export const AdminPanel = ({ loggedInUser, setLoggedInUser }) => {
  const [newItem, setNewItem] = useState("");
  const { data, isLoading } = useQuery("users", getUsers);
  !isLoading && console.log(data.data);
  const [selCity, setSelCity] = useState({ id: 0, name: "" });
  const [selSubCateg, setSelSubCateg] = useState(0);
  const [id, setId] = useState(0);
  const [subCategId, setSubCategId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const toggle = () => setIsOpen(!isOpen);

  const clientQuery = useQueryClient();

  const mutationDel = useMutation(delUser, {
    onSuccess: () => {
      clientQuery.invalidateQueries("users");
    },
  });

  const mutationAdd = useMutation(addUser, {
    onSuccess: () => {
      setNewItem("");
      clientQuery.invalidateQueries("users");
    },
  });

  const mutationUpdate = useMutation(updateUser, {
    onSuccess: () => {
      clientQuery.invalidateQueries("users");
    },
  });

  const navigate = useNavigate();

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
                className="nav-link"
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
                <NavLink to="/adminpanel" className="nav-link active">
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

      <div className="row justify-content-center container-admin">
        {isLoading ? (
          <div className="loading">
            <FidgetSpinner
              visible={true}
              height="80"
              width="80"
              ariaLabel="dna-loading"
              wrapperStyle={{}}
              wrapperClass="dna-wrapper"
              ballColors={["#ff0000", "#00ff00", "#0000ff"]}
              backgroundColor="#F4442E"
            />
          </div>
        ) : (
          <div className="container-admin">
            <h1 className="sitetitle p-3 text-white text-center homekateg">
              Admin Panel
            </h1>
            <div className="d-flex justify-content-center">
              <form className="mb-4 p-3 admin-add">
                <p align="center">Kategórai hozzáadása</p>
                <input
                  type="text"
                  className="mb-1"
                  onChange={(e) => setNewItem(e.target.value)}
                  value={newItem}
                />

                <i
                  className="fa-solid mt-1 fa-plus fa-xl m-1 text-success hozzaadoikon"
                  onClick={() => mutationAdd.mutate({ username: newItem })}
                ></i>
              </form>
            </div>
            <div className="row">
              <div className="col-md-6 users">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Név</TableCell>
                        <TableCell align="center">Felhasználónév</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Rang</TableCell>
                        <TableCell align="center">Módosítás</TableCell>
                        <TableCell align="center">Törlés</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.data.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell align="center">{item.name}</TableCell>
                          <TableCell align="center">{item.username}</TableCell>
                          <TableCell align="center">{item.email}</TableCell>
                          <TableCell align="center">{item.role}</TableCell>
                          <TableCell align="center">
                            <i
                              className="fas fa-edit text-warning fa-2x modositoikon"
                              onClick={() => mutationUpdate.mutate(item.id)}
                            ></i>
                          </TableCell>
                          <TableCell align="center">
                            <i
                              className="fa-solid fa-trash text-danger fa-2x torloikon"
                              onClick={() => mutationDel.mutate(item.id)}
                            ></i>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
              <div className="col-md-6 category">
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell align="center">Név</TableCell>
                        <TableCell align="center">Felhasználónév</TableCell>
                        <TableCell align="center">Email</TableCell>
                        <TableCell align="center">Rang</TableCell>
                        <TableCell align="center">Módosítás</TableCell>
                        <TableCell align="center">Törlés</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data.data.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell align="center">{item.name}</TableCell>
                          <TableCell align="center">{item.username}</TableCell>
                          <TableCell align="center">{item.email}</TableCell>
                          <TableCell align="center">{item.role}</TableCell>
                          <TableCell align="center">
                            <i
                              className="fas fa-edit text-warning fa-2x modositoikon"
                              onClick={() => mutationUpdate.mutate(item.id)}
                            ></i>
                          </TableCell>
                          <TableCell align="center">
                            <i
                              className="fa-solid fa-trash text-danger fa-2x torloikon"
                              onClick={() => mutationDel.mutate(item.id)}
                            ></i>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
