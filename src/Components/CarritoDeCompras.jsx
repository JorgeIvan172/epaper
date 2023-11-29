import Title1 from './Title';
import React, { useState, useContext } from 'react';
import { CartContext } from './Contexts/CarritoDeCompasContext'

function Carrito() {
    const [cart, setCart] = useContext(CartContext);

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.precio,
        0
    );

    return(
      <>
      <Title1 text="Tu Carrito De Compras" />
      <div className="cart-container">
      <div>
        <div>Items in cart: {quantity}</div>
        <div>Total: ${totalPrice}</div>
        <button onClick={() => console.log(cart)}>Checkout</button>
      </div>
    </div>
      </>  
    );
}

export default Carrito;