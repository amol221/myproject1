import React, {} from 'react'
import "./navbar.css";
import { Link, useNavigate} from 'react-router-dom';
import {Container, Nav,Navbar, NavDropdown,} from'react-bootstrap';




const Header =() => {
  const navigate = useNavigate();
 
    return (
      
      <Navbar bg="primary" expand="lg" >
      <Container>
        <Navbar.Brand href="#home">MyLogo</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link><Link to='/home'>Home</Link> </Nav.Link>
            <Nav.Link><Link to='/about'>About</Link></Nav.Link>
            <Nav.Link><Link to='/login'>Log_in</Link></Nav.Link>
            <Nav.Link><Link to='/register'>Register</Link></Nav.Link>
            <Nav.Link><Link to='/contact'>Contact</Link></Nav.Link>
            <Nav.Link><Link to='/admin'>Admin</Link></Nav.Link>
            <NavDropdown title="profile" id="basic-nav-dropdown">
            <NavDropdown.Item><Link to='/profile'>profile</Link></NavDropdown.Item>
            <NavDropdown.Item onClick={()=>{
              localStorage.removeItem("userInfo");
              navigate("/");
            }}>
               log_out
              </NavDropdown.Item>
            
         
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
      
    );
  };
  export default Header;

