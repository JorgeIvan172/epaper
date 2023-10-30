import React from 'react';
import './Styles/Menu.css';
import logo from '../img/logo1.jpg';

function Menu() {
  return (
    <div className="custom-navbar">
      <img src={logo} alt="Logo" className="navbar-logo" />

      <nav className="navbar-links">
        <ul>
          <li><a href="miPerfil">Mi Perfil</a></li>
          <li><a href="iniciarSesion">Iniciar Sesion</a></li>
          <li><a href="epaper">E-Paper</a></li>
          <li><a href="/epaper/productos">Productos</a></li>
          <li><a href="categorias">Categorías</a></li>
          <li><a href="destacados">Destacados</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Menu;

