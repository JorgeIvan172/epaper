import React from 'react';
import './Styles/Menu.css';
import logo from '../img/logo1.jpg';
import { Navbar, Container, NavDropdown, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'; // Importa Link desde react-router-dom



function Menu() {
  return (
    <div className="custom-navbar">
      <Link to="/">
      <img src={logo} alt="Logo" className="navbar-logo" />
      </Link>
      <nav className="navbar-links">
        <ul>
        <li><Link to="miPerfil">Mi Perfil</Link></li>
          <li><Link to="iniciarSesion">Iniciar Sesion</Link></li>
          <li><Link to="epaper">E-Paper</Link></li>
          <li><Link to="productos">Productos</Link></li>
          <li><Link to="categorias">Categorías</Link></li>
          <li><Link to="destacados">Destacados</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

