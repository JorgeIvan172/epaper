import React from 'react';
import './Styles/Menu.css';
import logo from '../img/logo1.jpg';

function Menu() {
  return (
    <div className="custom-navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      <nav className="navbar-links">
        <ul>
          <li><a href="#perfil">Mi Perfil</a></li>
          <li><a href="#perfil">Iniciar Sesion</a></li>
          <li><a href="#categorias">E-Paper</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#categorias">Categorías</a></li>
          <li><a href="#categorias">Destacados</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

