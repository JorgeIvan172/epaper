import React, {useState} from "react";
import ReactDOM from "react-dom"
const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });



export default function MyPaypalButton(){
  

  const createOrder = (data, actions) => {
    // Order is created on the server and the order id is returned
    return actions.order.create({
      purchase_units:[
        {
          amount: {
            value: "14000.00"
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


