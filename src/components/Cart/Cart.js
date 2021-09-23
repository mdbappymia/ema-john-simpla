import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  const total = cart.reduce((previous, produce) => previous + produce.price, 0);
  const shipping = total > 0 ? 15 : 0;
  const tax = total + shipping;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h3>Order Summmery</h3>
      <h4>Items Ordered: {cart.length}</h4>
      <br />
      <p>Total: ${total.toFixed(2)}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grant Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
