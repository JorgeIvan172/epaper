// ProductosTable.js
import React, { useState } from 'react';
import productosData from '../../productos.json';
import { Container, Table, Modal, Button, Form } from 'react-bootstrap';
import MerchEdit from './Edit_Products';

const ProductosTable = () => {
  // Accede a la propiedad "productos" del archivo JSON
  const [productos, setProductos] = useState(productosData.productos || []);

  const [show, setShow] = useState(false);
  const [registroEdit, setRegistroEdit] = useState(null);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const handleBorrar = (id) => {
    // Filtra los productos para excluir el producto con el ID dado
    const nuevosProductos = productos.filter((producto) => producto.id !== id);
    // Actualiza el estado con la nueva lista de productos
    setProductos(nuevosProductos);
  };

  const handleEditar = (producto) => {
    setRegistroEdit(producto);
    handleShow();
};




  return (
    <>
            <Container fluid>
                <caption align="center"></caption>
                <Table striped bordered hover variant="ligth"
                    style={{
                        background: "#a5edff",
                        borderColor: "gray"
                    }}>
                    <thead>
                        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Precio</th>
          <th>Categoría</th>
          <th>Borrar</th>
        <th>Editar</th>
        </tr>
      </thead>
      <tbody style={{ justifyContent: "center" }}>
        {productos.map(producto => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.precio}</td>
            <td>{producto.categoria}</td>
            <td><button className="btn btn-danger" onClick={() => handleBorrar(producto.id)}>Borrar</button></td>
            <td><button className="btn btn-primary" onClick={() => handleEditar(producto)}>Editar</button></td>
          </tr>
        ))}
      </tbody>
      </Table>
    </Container>
    </>
  );
};

export default ProductosTable;