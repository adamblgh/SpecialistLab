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

export const About=({loggedInUser,setLoggedInUser})=> {
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
              <NavLink to="/profile" className="nav-link">
              {/*<img src={loggedInUser.avatar} alt="Avatar" style={{width:"20px",marginRight:"10px"}} />*/}
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
        <div className="container-ad mt-5 aboutfooter">
        <div className="tartalom">
        <h1 className="text-white text-center">Bemutatkozó</h1>
  
        <div className="row ad p-3 mt-5">
              <h4>Czeczon Kristóf</h4>
              <p className="mt-4"><i class="fa-solid fa-location-dot"></i><span>  Kocsér</span></p>
              <div className="col-md-8">
                <p className="hirdetoszoveg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium deleniti dolor officiis, maiores excepturi id vel doloremque fugit aut magni quibusdam est, suscipit maxime? Alias qui quae a adipisci.</p>
                
                    </div>
                    <div className="col-md-4"><img className='img-fluid' src="czeczike.jpg" alt="Czeczon" /></div>
                  </div>
                  <div className="row ad p-3 mt-5">
              <h4>Ölvödi Soma</h4>
              <p className="mt-4"><i class="fa-solid fa-location-dot"></i><span>  Kecskemét</span></p>
              <div className="col-md-8">
                <p className="hirdetoszoveg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium deleniti dolor officiis, maiores excepturi id vel doloremque fugit aut magni quibusdam est, suscipit maxime? Alias qui quae a adipisci.</p>
                
                    </div>
                    <div className="col-md-4"><img className='img-fluid' src="somika.jpg" alt="Soma" /></div>
                  </div>
                  <div className="row ad p-3 mt-5">
              <h4>Balogh Ádám</h4>
              <p className="mt-4"><i class="fa-solid fa-location-dot"></i><span>  Kecskemét</span></p>
              <div className="col-md-8">
                <p className="hirdetoszoveg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laudantium deleniti dolor officiis, maiores excepturi id vel doloremque fugit aut magni quibusdam est, suscipit maxime? Alias qui quae a adipisci.</p>
                
                    </div>
                    <div className="col-md-4"><img className='img-fluid' src="adika.jpg" alt="Ádám" /></div>
                  </div>
                </div>
            </div>
            <footer>
        <div className="row">
          <div className="col-md-4">
              <a target="_blank" href="https://github.com/adamblgh/Specialistlab"><i class="fa-brands fa-2xl fa-github"></i></a>
              <a target="_blank" href="https://hu-hu.facebook.com/"><i class="fa-brands fa-2xl fa-facebook"></i></a>
              <a target="_blank" href="https://www.instagram.com/"><i class="fa-brands fa-2xl fa-instagram"></i></a>

          </div>
          <div className="col-md-4 d-flex mid justify-content-center align-items-center ">
            <img className="img-fluid footerlogo mr-3" src="slab_logo.png" alt="Logo" />
            <span>SPECIALIST LAB™</span>
          </div>
          <div className="col-md-4 d-flex align-items-center end">
          <div>Hungary @2023</div>
          </div>
        </div>
      </footer>
      
    </>
  );
}
