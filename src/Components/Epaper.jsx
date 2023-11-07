import React from 'react';
import './Styles/Epaper.css';
import SomosImg from '../img/Somos.jpg';

const Somos = () => {
    return(
        <div>

        <div className="somos-container">
        <div className="somos-text">
            <h1 className="title_Somos">E-paper ¿Que Somos?</h1>
            <p className='text'>
            Somos un e-comerce donde los usuario puedan llevar a cabo la compra de diferentes productos de oficina y escuela como lo es; 
            Material para Arquitectura, Laptops, Libros hasta Lapices y Colores profecionales. Con una interfaz amigable con ustedes nuestros usuarios
            E-paper busca tener una buena atencion remota para nuestros clientes asi como calidad en lo que ofrecemos.
            </p>
        </div>
        <img src={SomosImg} className="img_Somos"/>
        </div>
        
        <div className="somos-container color">
        <div className="somos-img">
        <img src={SomosImg} className="img_Somos" alt='Somos'/>    
        </div>
        <div>
        <h1 className="title_Somos">E-paper ¿Que Somos?</h1>
        <p className='text'>
            Somos un e-comerce donde los usuario puedan llevar a cabo la compra de diferentes productos de oficina y escuela como lo es; 
            Material para Arquitectura, Laptops, Libros hasta Lapices y Colores profecionales. Con una interfaz amigable con ustedes nuestros usuarios
            E-paper busca tener una buena atencion remota para nuestros clientes asi como calidad en lo que ofrecemos.
        </p>
        </div>
            </div>
        </div>
    );
}

export default Somos;