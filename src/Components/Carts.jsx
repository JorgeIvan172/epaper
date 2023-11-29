import Card from 'react-bootstrap/Card';
import './Styles/Carts.css';
import { useNavigate } from 'react-router-dom'; // Importa useNavigate
import ListGroup from 'react-bootstrap/ListGroup';
//import productsData from './ProductData';
import React, { useContext } from "react";
import { Button } from 'react-bootstrap';
import { CartContext } from './Contexts/CarritoDeCompasContext'
import productosData from '../productos.json';



function Cart( {product}) {

  const { id, nombre, precio, descripcion_corta, descripcion_larga, img} = product;

  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    setCart((currItems) => {
      const isItemsFound = currItems.find((item) => item.id === id);
      if (isItemsFound) {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      } else {
        return [...currItems, { id, quantity: 1, precio }];
      }
    });
  };

  const removeItem = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const handleButtonClick = () => {
    navigate(`/producto/${id}`); 
  }

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  const quantityPerItem = getQuantityById(id);
  
  const navigate = useNavigate();

  

  return (
    <Card className="card-with-border">
      {quantityPerItem > 0 && (
        <div className="item-quantity">{quantityPerItem}</div>
      )}
      <Card.Img className="img img-center" src={img} alt={nombre} />
      <Card.Body>
        <Card.Title className="title">{nombre}</Card.Title>
        <Card.Title className="title">${precio}</Card.Title>
        <Card.Text>{descripcion_corta}</Card.Text>
        {/* Verifica si descripcion_corta existe antes de intentar mostrarla */}
      </Card.Body>

      <Button onClick={handleButtonClick} className='comprar'>
        Comprar
      </Button>


      {quantityPerItem === 0 ? (
          <Button onClick={() => addToCart()} className='comprar'>
          Añadir Al Carrito
          </Button>
      ) : (
        <button className='add' onClick={() => addToCart()}>
          + add more
        </button>
      )}

      {quantityPerItem > 0 && (
        <button className='desc' onClick={() => removeItem(id)}>
          Quitar item
        </button>
      )}
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
