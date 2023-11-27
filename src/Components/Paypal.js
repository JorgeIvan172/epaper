import React, {useState} from "react";
import ReactDOM from "react-dom"
import productosData from "../productos.json";
import { useParams } from "react-router-dom";  // Asegúrate de importar useParams desde react-router-dom
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });



export default function MyPaypalButton(){
  const { id } = useParams();
  console.log('ID:', id);

  const product = productosData.productos.find(product => product.id === parseInt(id, 10));
  console.log('Producto:', product);

  if (!product) {
    return <div>Producto no encontrado</div>;
  }

  const { nombre, precio, descripcion_corta, descripcion_larga, img } = product;


  const createOrder = (data, actions) => {
    // Order is created on the server and the order id is returned
    return actions.order.create({
      purchase_units:[
        {
          amount: {
            value: precio.toFixed(2)
          }
      }
    ]
    });
  };
  
  const onApprove = (data, actions) => {
    return actions.order.capture();
  };



return (
  <>
<div>
<PayPalButton
createOrder={(data, actions) => createOrder(data, actions)}
onApprove={(data, actions) => onApprove(data, actions)}
/>
</div>

</>
);
}


