import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Styles/Menu.css';
import logo from '../img/logo1.jpg';
import { Link } from 'react-router-dom';
import React, { useState, useContext } from 'react';
import { CartContext } from './Contexts/CarritoDeCompasContext'
import { useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();

  const [cart, setCart] = useContext(CartContext);

  const quantity = cart.reduce((acc, curr) => {
    return acc + curr.quantity;
  }, 0);

  const handleLogoClick = () => {
    // Navegar a la ruta deseada cuando se hace clic en el logo
    navigate('/epaper');  // Reemplaza '/tu/ruta' con la ruta a la que deseas navegar
  };

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-black">
      <Container>
        
      <img src={logo} alt="Logo"  className="navbar-logo" onClick={handleLogoClick}/>

        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          {/*<Nav>
            <Link to="/" className='navbar-links'>Inicio</Link>
          </Nav>*/}

          <Nav>
            <Link to="/productos" className='navbar-links'>Productos</Link>
          </Nav>

          <Nav>
            <Link to="/carrito" className='navbar-links'>Carts Items <span>{quantity}</span></Link>
          </Nav>


          <Nav>
            <Link to="/favoritos" className='navbar-links'>Favoritos</Link>
          </Nav>

          <Nav>
            <Link to="/contacto" className='navbar-links'>Contactanos</Link>
          </Nav>

        <NavDropdown  title="Tu Cuenta" id="" className='navbar-drop'>

              <NavDropdown.Item>
              <Link to="/miperfil" className='navbar-item'>Mi Perfil</Link>
                </NavDropdown.Item>

              <NavDropdown.Item >
              <Link to="/iniciarsesion" className='navbar-item'>Iniciar Sesion</Link>
              </NavDropdown.Item>

              <NavDropdown.Item >
              <Link to="/crearcuenta" className='navbar-item'>Crear Cuenta</Link>
              </NavDropdown.Item>
              <NavDropdown.Divider />

              <NavDropdown.Item>
              <Link to="/epaper" className='navbar-item'>Cerrar Sesion</Link>
              </NavDropdown.Item>

              <NavDropdown.Item href="#action/3.4">
              <Link to="/administrador" className='navbar-item'>Administrador</Link>
              </NavDropdown.Item>

            </NavDropdown>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  ); 
}


export default Menu;