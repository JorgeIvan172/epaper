import Table from 'react-bootstrap/Table';
import Title1 from './Title';
import productosData from '../productos.json';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.css';

function Fav() {
    const [productos, setProductos] = useState(productosData.productos);

  const handleBorrarProducto = (id) => {
    // Filtrar la lista de productos para mantener solo aquellos que no tienen el ID especificado
    const nuevosProductos = productos.filter(producto => producto.id !== id);
    // Actualizar el estado con la nueva lista de productos
    setProductos(nuevosProductos);
  };

  return (
    <> 
    <Title1 text="Lista de Mis Favoritos" />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Corazón</th>
          <th>Nombre De Procucto</th>
          <th>Precio</th>
          <th>Borra de la Lista</th>
        </tr>
      </thead>
      <tbody>
      {productos.map((producto) => (
          <tr key={producto.id}>
            <td><FontAwesomeIcon icon={faHeart} style={{ color: 'red', fontSize: '24px' }} /></td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td><button className="btn btn" onClick={() => handleBorrarProducto(producto.id)} >Borrar</button></td>

          </tr>
        ))}
        <tr>
          
        </tr>
        
      </tbody>
    </Table>
    </>
  );
}

export default Fav;
