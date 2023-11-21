import Table from './Table_Coments'
import Title1 from './Title';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Victus from '../img/Victus.png';
import Card from 'react-bootstrap/Card';
import '../Components/Styles/Product.css'; // Asegúrate de importar tu archivo Product.css
import MyPaypalButton from './Paypal.js';
import { useParams } from 'react-router-dom';


import productosData from '../productos.json';




function CartProduct() {

  const { id } = useParams();  // Accede al id del producto desde los parámetros de la URL
  console.log('ID:', id);
  const product = productosData.productos.find(product => product.id === parseInt(id, 10));  // Busca el producto por id
  console.log('Producto:', product);
  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const { nombre, precio, descripcion_corta, descripcion_larga, img } = product;



  return (
    <Card className='card-custom'>
      <div className="product-card">
        <div className="product-image">
          <Card.Img className="" src={img} />
        </div>
        <div className="product-details">
          <Card.Body>
            <Card.Title className="title">{nombre}</Card.Title>
            <Card.Title className="title">${precio}</Card.Title>
            <Card.Text>
            {descripcion_larga}
            </Card.Text>

      {/*<Button
        className='pagar'
        >Realizar pago</Button>*/}

            <MyPaypalButton/>

          </Card.Body>
        </div>
      </div>

      <Title1 text="Comentarios Sobre Este Producto." />
      <Table />
      
    </Card>
  );
}

export default CartProduct;

