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
  const [selFile, setSelFile] = useState({});
  const [msg, setMsg] = useState("");
  const [ isUploading, setIsUploading ] = useState(false);
  const [modal, setModal] = useState(false);
  const [newPw,setNewpw] = useState('');
  const [isOpen, setIsOpen] = useState(false);
   const toggle = () => setIsOpen(!isOpen);

  const handleChangePw= () => {
    console.log('új jelszó:',newPw)
    mutationChangePw.mutate({username:loggedInUser.username,password:newPw})
  }
  const mutationAvatar = useMutation(updateAvatar, {
    onSuccess: (data) => {
      console.log(data.data.msg);
      setMsg(data.data.msg);
      setLoggedInUser({
        ...loggedInUser,
        avatar: data.data.avatar,
        avatar_id: data.data.avatar_id,
      });
      setIsUploading(false);
    },
  });

  const handleUpdateAvatar = () => {
    const formdata = new FormData()
    formdata.append("selFile", selFile)
    formdata.append("username", loggedInUser.username)
    formdata.append("avatar_id", loggedInUser.avatar_id)
    setIsUploading(true)
    mutationAvatar.mutate(formdata)
  };

const handleDelete = ()=>{
  setModal(true)
}
const mutationChangePw = useMutation(changePassword, {
  onSuccess: (data) => {
    console.log(data.data.msg);
    setMsg(data.data.msg);
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
      <Navbar expand="sm" light color='light' fixed='top'>
        <NavbarBrand>
            <img className='img-fluid' style={{width:"35px",height:"35px"}} alt='SpecialistLab_Logo' src='slab_logo.png'></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to='/kezdolap' className="nav-link">Főoldal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/rolunk' className="nav-link">Rólunk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/hirdetesek' className="nav-link">Hirdetések</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/hirdetes-feladas' className="nav-link">Hirdetésfeladás</NavLink>
            </NavItem>
            {loggedInUser?.role == "admin" && (
              <NavItem>
              <NavLink to="/adminpanel" className="nav-link">
                Admin Panel
              </NavLink>
            </NavItem>
            )}

            </Nav>

            {loggedInUser?.username?
            (
            <Nav navbar>
            <NavItem className="nav-link d-flex align-items-center">
              <NavLink to="/profil" className="nav-link">
              <img src={loggedInUser.avatar} className="avatar" alt="Avatar" style={{width:"30px",marginRight:"20px"}} />
              <span style={{cursor:"pointer"}}>{loggedInUser.username}</span>
              </NavLink>
          </NavItem>
          <NavItem className='d-flex align-items-center'>
            <NavLink to="/">
            <span className='btn text-info' onClick={()=>setLoggedInUser({})}>Kijelentkezés</span>
            </NavLink>
          </NavItem>
            </Nav>
            )
            :
            (
            <Nav navbar>
          <NavItem>
            <NavLink to="/login" className="nav-link">Bejelentkezés</NavLink>
          </NavItem>
            </Nav>)
          }
        </Collapse>
      </Navbar>
    </div>
    <h1 className="sitetitle p-3 text-white text-center">Profil</h1>
    <div className='container justify-content-center d-flex'>
      <div className="profilpanel">
        <Form className="border p-2 m-2 shadow">
        <FormGroup row>
          <Label>
          <p>Email:</p>
          <p className='profilemail'>{loggedInUser.email}</p>
          </Label>
          <Label for="pw" sm={12}>
            Új jelszó beállítása:
          </Label>
          <Col sm={8}>
            <Input id="pw" name="password" type="password" value={newPw} onChange={(e)=>setNewpw(e.target.value)} />
          </Col>
          <Col sm={4}>
            <Input
              type="button"
              disabled={!newPw || newPw.length<6}
              value="Alkalmaz"
              onClick={handleChangePw}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <FileDrop setSelFile={setSelFile} />
        </FormGroup>
        <FormGroup row className="justify-content-center">
          {!isUploading ? (
            <Input
              type="button"
              className="btn w-50 m-1 btn-primary"
              value="Feltöltés"
              disabled={!selFile.name}
              onClick={handleUpdateAvatar}
            />
          ) : (
            <Button color="primary" className="w-50" disabled>
              <span> Feltöltés...</span>
            </Button>
          )}

          <Input
            type="button"
            className="btn w-50 m-1 btn-danger"
            onClick={handleDelete}
            value="Fiók törlése"
          />
        </FormGroup>
        <div className="msg text-center ">{msg}</div>
      </Form>
      </div>
      
      {modal && <MyModal modal={modal} setModal={setModal} setLoggedInUser={setLoggedInUser} username={loggedInUser.username} avatar_id={loggedInUser.avatar_id}/>}
    </div>
    </>
  );
}