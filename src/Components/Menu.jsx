import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React from 'react';
import './Styles/Menu.css';
import logo from '../img/logo1.jpg';
import { Link } from 'react-router-dom';
{/*import React from 'react';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

function Menu() {
  return (
    <div className="custom-navbar me-auto">
      <Link to="/">
      
      </Link>
      <nav className="navbar-links">
        <ul>
        <li><Link to="miPerfil">Mi Perfil</Link></li>
          <li><NavDropdown title="Productos" id="basic-nav-dropdown"></NavDropdown></li>
          <li><Link to="iniciarSesion">Iniciar Sesion</Link></li>
          <li><Link to="epaper">E-Paper</Link></li>
          <li><Link to="productos">Productos</Link></li>
          <li><Link to="categorias">Categorías</Link></li>
          <li></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;*/}



function Menu() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black">
      <Container>
        
      <img src={logo} alt="Logo" className="navbar-logo"/>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            <Link to="/" className='navbar-links'>Categorias</Link>
          </Nav>

          <Nav>
            <Link to="/productos" className='navbar-links'>Productos</Link>
          </Nav>

          <Nav>
            <Link to="/epaper" className='navbar-links'>E-Paper</Link>
          </Nav>

          <Nav>
            <Link to="/" className='navbar-links'>Contactanos</Link>
          </Nav>

        <NavDropdown  title="Tu Cuenta" id="" className='navbar-drop'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); 
}


export default Menu;