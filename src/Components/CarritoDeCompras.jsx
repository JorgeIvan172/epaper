import Title1 from './Title';
import ReactDOM from "react-dom"
import React, { useState, useContext } from 'react';
import { CartContext } from './Contexts/CarritoDeCompasContext'
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

function Carrito() {
    const [cart, setCart] = useContext(CartContext);

    

    const quantity = cart.reduce((acc, curr) => {
        return acc + curr.quantity;
    }, 0);

    const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.quantity * curr.precio,
        0
    );

    const createOrder = (data, actions) => {
        const numericTotalPrice = parseFloat(totalPrice);
    if (!isNaN(numericTotalPrice))
        return actions.order.create({
          purchase_units:[
            {
              amount: {
                value: numericTotalPrice.toString(),
              }
          }
        ]
        });
      };
      
      const onApprove = (data, actions) => {
        return actions.order.capture();
      };

    return(
      <>
      <Title1 text="Tu Carrito De Compras" />
      <div className="cart-container">
      <div>
        <div>Items in cart: {quantity}</div>
        <div>Total: ${totalPrice}</div>
        <div>
            <PayPalButton
            createOrder={(data, actions) => createOrder(data, actions)}
            onApprove={(data, actions) => onApprove(data, actions)}
            />
            </div>
      </div>
    </div>
      </>  
    );
}

export default Carrito;