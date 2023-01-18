import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
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

export const About=({loggedInUser,setLoggedInUser})=> {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
    <div>
      <Navbar expand="sm" light color='light'  fixed='top'>
        <NavbarBrand>
            <img className='img-fluid' style={{width:"35px",height:"35px"}} alt='SpecialistLab_Logo' src='slab_logo.png'></img>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink to='/home' className="nav-link">Főoldal</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/about' className="nav-link active" aria-current="page">Rólunk</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to='/ad' className="nav-link">Hirdetések</NavLink>
            </NavItem>
            {loggedInUser?.role=='admin' && 
            (
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
                  <NavLink to='books'>Books</NavLink>
                </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            )
            }

            </Nav>

            {loggedInUser?.username?
            (
            <Nav navbar>
            <NavItem className="nav-link d-flex align-items-center">
              <NavLink to="userProfile" className="nav-link">
              <img src={loggedInUser.avatar} alt="Avatar" style={{width:"20px",marginRight:"10px"}} />
              <span style={{cursor:"pointer"}}>{loggedInUser.username}</span>
              </NavLink>
          </NavItem>
          <NavItem className='d-flex align-items-center'>
            <NavLink to="/">
            <span className='btn text-info' onClick={()=>setLoggedInUser({})}>Logout</span>
            </NavLink>
          </NavItem>
            </Nav>
            )
            :
            (
            <Nav navbar>
          <NavItem>
            <NavLink to="/" className="nav-link">Kijelentkezés</NavLink>
          </NavItem>
            </Nav>)
          }
        </Collapse>
      </Navbar>
    </div>
      <div className="container">
        <h1 className='text-center'>Projekttagok</h1>
        <div className="row mt-3">
          <div className="col-md-4">
            <img className='img-fluid kep' src="czeczike.jpg" alt="Czeczon" />
          </div>
          <div className="col-md-4">
            <img className='img-fluid kep' src="somika.jpg" alt="Soma" />
          </div>
          <div className="col-md-4">
            <img className='img-fluid kep' src="adika.jpg" alt="Ádám" />
          </div>
        </div>
        <div className="row text-center">
          <div className="col-md-4">
            <h5>Czeczon Kristóf</h5>
          </div>
          <div className="col-md-4">
            <h5>Ölvödi Soma</h5>
          </div>
          <div className="col-md-4">
            <h5>Balogh Ádám</h5>
          </div>
        </div>
      </div>
    </>
  );
}
