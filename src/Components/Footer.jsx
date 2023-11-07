import React from 'react';
import './Styles/Footer.css';
import logo from '../img/logo1.jpg';
import insta from '../img/instagram.jpg';

function footer() { 
  return (

         <div className='footer-container'>
            <div><img src={logo} alt="Logo" className="footer-logo" /></div>

            <div>
                <ul>
                    <li>ITIC'S</li>
                    <li>For The Record</li>
                    <li>Empleos</li>
                    <li>Acerca De</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>COMUNIDADES</li>
                    <li>Reconocimientos</li>
                    <li>Analytics</li>
                    <li>Publicidad</li>
                </ul>
            </div>

            <div>
                <ul>
                    <li>ENLACES UTILES</li>
                    <li>Ayuda</li>
                    <li>Envios</li>
                    <li className="special-link">
                    <a href="https://www.facebook.com/profile.php?id=61552962421697&locale=es_LA">Social Web</a>
                    </li>
                </ul>
            </div>

            <div><img  href="https://www.instagram.com/ivn02_/" src={insta} alt="Insta" className="footer-logo" /></div>

         </div>
        
  );
}

export default footer;