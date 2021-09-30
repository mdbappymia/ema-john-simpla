import React from "react";
import useProducts from "../../hooks/useProducts";

const OrderReview = () => {
  const [products] = useProducts([]);
  return (
    <div>
      <h2>Products : {products.length}</h2>
      <h1>Order review</h1>
    </div>
  );
};

export default OrderReview;
