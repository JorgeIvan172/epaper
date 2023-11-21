import Card from 'react-bootstrap/Card';
//import CartProduct from './CartProduct'; // Asegúrate de que la ruta sea correcta
import React from 'react';
import './Styles/Carts.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import ListGroup from 'react-bootstrap/ListGroup';
//import productsData from './ProductData';
import { Button } from 'react-bootstrap';

import productosData from '../productos.json';



function Cart(props) {

  const handleButtonClick = () => {
    navigate(`/producto/${id}`); 
  }

  const { id, nombre, precio, descripcion_corta, descripcion_larga, img} = props.product;
  const navigate = useNavigate();

  

  return (
    <Card className="card-with-border">
      <Card.Img className="img img-center" src={props.product.img} alt={nombre} />
      <Card.Body>
        <Card.Title className="title">{nombre}</Card.Title>
        <Card.Title className="title">${precio}</Card.Title>
        <Card.Text>{descripcion_corta}</Card.Text>
        {/* Verifica si descripcion_corta existe antes de intentar mostrarla */}
      </Card.Body>

      <Button onClick={handleButtonClick} className='comprar'>
        Comprar
      </Button>
    </Card>
  );
}

function ProductList() {
  return (
    <div className="product-list-container">
      {productosData.productos.map((product) => (
        <Cart key={product.id} product={product} />
      ))}
    </div>
  );
}

export default ProductList;
