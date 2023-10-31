import React from 'react';
import './Styles/Menu.css';
import logo from '../img/logo1.jpg';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Outlet, Link } from 'react-router-dom';



function Menu() {
  return (
    <div className="custom-navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      <nav className="navbar-links">
        <ul>
          <li><a href="miPerfil">Mi Perfil</a></li>
          <li><a href="iniciarSesion">Iniciar Sesion</a></li>
          <li><a href="epaper">E-Paper</a></li>
          <li><a href="productos">Productos</a></li>
          {/*<NavDropdown.Item as={Link} to="/epaper/productos" title="Productos"><b>Productos</b></NavDropdown.Item>*/}

          <li><a href="categorias">Categorías</a></li>
          <li><a href="destacados">Destacados</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

