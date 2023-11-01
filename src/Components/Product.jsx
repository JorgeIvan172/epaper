import React from 'react';
import Button from 'react-bootstrap/Button';
import Victus from '../img/Victus.png';
import Card from 'react-bootstrap/Card';
import '../Components/Styles/Product.css'; // Asegúrate de importar tu archivo Product.css

function CartProduct() {
  return (
    <Card className='card-custom'>
      <div className="product-card">
        <div className="product-image">
          <Card.Img className="" src={Victus} />
        </div>
        <div className="product-details">
          <Card.Body>
            <Card.Title className="title">Laptop Gamer Hp Victus 15.6 I5-12450h 8 Ram 512</Card.Title>
            <Card.Title className="title">$ 14,000.00</Card.Title>
            <Card.Text>
            Lo que tienes que saber de este producto
            Procesador Intel Core i5.
            Memoria RAM de 8GB.
            Pantalla IPS de 15.6".
            Resolución de 1920x1080 px.
            Tarjeta gráfica NVIDIA GeForce GTX 1650.
            Conexión wifi.
            La duración de la batería depende del uso que se le dé al producto.
            </Card.Text>
            <Button
            className='pagar'
            >Realizar pago</Button>

          </Card.Body>
        </div>
      </div>
    </Card>
  );
}

export default CartProduct;

