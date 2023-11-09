import Card from 'react-bootstrap/Card';
//import CartProduct from './CartProduct'; // Asegúrate de que la ruta sea correcta
import React from 'react';
import './Styles/Carts.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import ListGroup from 'react-bootstrap/ListGroup';
import productsData from './ProductData';
import { Button } from 'react-bootstrap';



function Cart(props) {
  const { imageSrc, title, price, description } = props.product;

    const navigate = useNavigate(); // Inicializa la instancia de useNavigate

  const handleButtonClick = () => {
    // Aquí puedes definir la lógica de lo que sucede al hacer clic en el botón
    // Por ejemplo, puedes redirigir a otra página
    navigate('/producto'); // Cambia '/otra-pagina' por la ruta a la que quieres redirigir
  }

  
    
  return (
    <Card className="card-with-border" >
      <Card.Img className="img img-center" src={imageSrc} />
      <Card.Body>
        <Card.Title className="title">{title}</Card.Title>
        <Card.Title className="title">{price}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      

<Button onClick={handleButtonClick}
className='comprar'>
  Comprar.</Button>
      
    </Card>
  );
}

function ProductList() {
  const firstThreeProducts = productsData.slice(0, 3);

  return (
    <div className="product-list-container">
      {firstThreeProducts.map((product, index) => (
        <Cart key={index} product={product} />
      ))}
    </div>
  );
}

export default ProductList;