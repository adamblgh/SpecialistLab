import React,{useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ListGroup  from 'react-bootstrap/ListGroup';
import {FidgetSpinner} from 'react-loader-spinner';
import { getUsers,delUser,addUser,updateUser } from './getData.js';
import bg from "../components/background/bg.mp4";
import logo from "../components/image/slab_logo.png";
import {useQuery,useQueryClient,useMutation, QueryClient} from 'react-query';
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
  NavLink
} from "reactstrap";


export const AdminPanel=({ loggedInUser, setLoggedInUser })=> {
  const [newItem,setNewItem] = useState('')
  const {data,isLoading}=useQuery("users",getUsers)
  !isLoading && console.log(data.data)
  const [selCity, setSelCity] = useState({ id: 0, name: "" });
  const [selSubCateg, setSelSubCateg] = useState(0);
  const [id, setId] = useState(0);
  const [subCategId, setSubCategId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState(false);
  const toggleModal = () => setModal(!modal);
  const toggle = () => setIsOpen(!isOpen);

  const clientQuery = useQueryClient()

  const mutationDel = useMutation(delUser,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("users")
    }
  })

  const mutationAdd = useMutation(addUser,{
    onSuccess:()=>{
      setNewItem('')
      clientQuery.invalidateQueries("users")
    }
  })

  const mutationDone = useMutation(updateUser,{
    onSuccess:()=>{
      clientQuery.invalidateQueries("users")
    }
  })
  

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


    <div className='row justify-content-center '>
    {isLoading?
    <div className='loading'>
      <FidgetSpinner
    visible={true}
    height="80"
    width="80"
    ariaLabel="dna-loading"
    wrapperStyle={{}}
    wrapperClass="dna-wrapper"
    ballColors={['#ff0000', '#00ff00', '#0000ff']}
    backgroundColor="#F4442E"
  />
    </div>
    :
    <div className='container-admin'>
      <h1 className="sitetitle p-3 text-white text-center homekateg">
          Admin Panel
      </h1>
      <div className="d-flex justify-content-center">
      <form className='d-flex justify-content-evenly mb-4 p-3 admin-add'>
        <input type="text"  onChange={(e)=>setNewItem(e.target.value)} value={newItem} />

        <i className="fa-solid fa-plus fa-2x m-1 text-success hozzaadoikon" onClick={()=>mutationAdd.mutate({name:newItem})}></i>
      </form>
      </div>
     
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Név</TableCell>
              <TableCell>Felhasználónév</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Rang</TableCell>
              <TableCell>Módosítás</TableCell>
              <TableCell>Törlés</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data.data.map(item=>
          <TableRow key={item.id}>
            <TableCell>
              {item.name}
            </TableCell>
            <TableCell>
              {item.username}
            </TableCell>
            <TableCell>
              {item.email}
            </TableCell>
            <TableCell>
              {item.role}
            </TableCell>
            <TableCell>
              <i className="fas fa-edit text-warning fa-2x modositoikon"
            onClick={()=>mutationDone.mutate(item.id)}></i>
            </TableCell>
            <TableCell>
              <i className="fa-solid fa-trash text-danger fa-2x torloikon" 
            onClick={()=>mutationDel.mutate(item.id)}></i>
            </TableCell>
            </TableRow>)}
          </TableBody>
      </Table>
      </TableContainer>
    </div>
        }
        </div>
      </>
  )
}