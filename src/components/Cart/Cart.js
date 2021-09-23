import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const { cart } = props;
  // const totalQuantity = cart.reduce(
  //   (previous, produce) => previous + (produce.quantity || 1),
  //   0
  // );
  // const total = cart.reduce(
  //   (previous, product) => previous + product.price * (product.quantity || 1),
  //   0
  // );
  let totalQuantity = 0;
  let total = 0;
  for (const product of cart) {
    if (!product.quantity) {
      product.quantity = 1;
    }
    total = total + product.price * product.quantity;
    totalQuantity = totalQuantity + product.quantity;
  }
  const shipping = total > 0 ? 15 : 0;
  const tax = (total + shipping) * 0.1;
  const grandTotal = total + shipping + tax;

  return (
    <div>
      <h3>Order Summmery</h3>
      <h4>Items Ordered: {totalQuantity}</h4>
      <br />
      <p>Total: ${total.toFixed(2)}</p>
      <p>Shipping: ${shipping}</p>
      <p>Tax: ${tax.toFixed(2)}</p>
      <h2>Grant Total: ${grandTotal.toFixed(2)}</h2>
    </div>
  );
};

export default Cart;
