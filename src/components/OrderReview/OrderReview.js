import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import { clearTheCart, deleteFromDb } from "../../utilities/fakedb";
import { useHistory } from "react-router";

const OrderReview = () => {
  const [products] = useProducts([]);
  const [cart, setCart] = useCart(products);
  const history = useHistory();
  const handelRemove = (key) => {
    const newCart = cart.filter((product) => product.key !== key);
    deleteFromDb(key);
    setCart(newCart);
  };
  const handlePlaceOrder = () => {
    history.push("/shiping");
    // clearTheCart();
  };
  return (
    <div>
      <div className="shop-container">
        <div className="product-container">
          {cart.map((product) => (
            <ReviewItem
              handelRemove={handelRemove}
              key={product.key}
              product={product}
            ></ReviewItem>
          ))}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <button onClick={handlePlaceOrder} className="btn-regular">
              Proceed to Shiping
            </button>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default OrderReview;
