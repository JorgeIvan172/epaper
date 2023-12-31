import React from 'react';
import './Styles/Epaper.css';


import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import SomosImg from '../img/Somos.jpg';
import NuestrosPro from '../img/NuestrosProductos.jpg';
import Contactanos from '../img/Contactanos.png';
import Form from 'react-bootstrap/Form';

const Somos = () => {

    const [show, setShow] = useState(false);
    const [mensaje, setMensaje] = useState('');

  const handleClose = () => setShow(false);
  const handleChange = (event) => {
    setMensaje(event.target.value);
  };


  const handleShow = () => {
    if (mensaje.trim() === '') {
      alert('Por favor, llena el campo antes de enviar.');
    } else {
      setShow(true);
    }
  };




return(
        <div>

        <div className="somos-container ">
        <div className="somos-img">
        <img src={SomosImg} className="img_Somos" alt='Somos'/>    
        </div>
        <div>
        <h1 className="title_Somos">E-Paper ¿Que Somos?</h1>
        <p className='text'>
        Somos un e-comerce donde los usuario puedan llevar a cabo la compra de diferentes productos de oficina y escuela como lo es; 
            Material para Arquitectura, Laptops, Libros hasta Lapices y Colores profecionales. Con una interfaz amigable con ustedes nuestros usuarios
            E-paper busca tener una buena atencion remota para nuestros clientes asi como calidad en lo que ofrecemos.

        </p>
        </div>
            </div>



            


        <div className="somos-container color">
        <div className="somos-text">
            <h1 className="title_Somos">Nuestros Productos</h1>
            <p className='text'>
            Nuestros productos representan la amalgama perfecta de calidad y excelencia. Diseñados con un enfoque profesional, cada detalle se ha
        cuidado meticulosamente para ofrecer a nuestros clientes un estándar excepcional.Nuestros productos están diseñados para satisfacer las demandas más exigentes de cada uno de estos ámbitos. La calidad superior es la piedra angular de nuestra oferta, garantizando una experiencia única y un rendimiento insuperable en cada uno de nuestros productos.
            </p>
        </div>
        <img src={NuestrosPro} className="img_Somos"/>
        </div>


        <div className="cont-container ">
        <div className="somos-img">
        <img src={Contactanos} className="img_Somos" alt='Somos'/>    
        </div>
        <div>
        <h1 className="title_Somos Center_Contactanos">Contactanos a Nuestro Email.</h1>
        <Form.Group >
        <Form.Control placeholder="epaper.negocios@gmail.com" disabled />
        <Form.Label className='escribe'>Escribe tus preguntas...</Form.Label>
        <Form.Control as="textarea" rows={3} value={mensaje} onChange={handleChange} />
      </Form.Group>
                <div className='escribe'>
    <Button className='button_1' onClick={handleShow}>
        Enviar
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{ background: "#303333", color: "#FFFFFF" }}>
          <Modal.Title>Recibimos tu Mensaje!</Modal.Title>
        </Modal.Header>
        <Modal.Body style={{ background: "#303333", color: "#FFFFFF" }}>Gracias por Contactarnos.</Modal.Body>
        <Modal.Footer style={{ background: "#303333", color: "#FFFFFF" }}>
          <Button className='button_1' onClick={handleClose}>
            Cerrar
          </Button>
          <Button className='button_1' onClick={handleClose}>
            Hacer Otra Pregunta
          </Button>
        </Modal.Footer>
      </Modal>
                </div>
        </div>
            </div>
    
        

        </div>

        
    );
}

export default Somos;

