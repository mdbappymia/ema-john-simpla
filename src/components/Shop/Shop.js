import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useCart(products);

  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);

  const handlaAddToCart = (product) => {
    const exists = cart.find((pd) => pd.key === product.key);
    let newCart = [];
    if (exists) {
      const rest = cart.filter((pd) => pd.key !== product.key);
      exists.quantity = exists.quantity + 1;
      newCart = [...rest, product];
    } else {
      product.quantity = 1;
      newCart = [...cart, product];
    }
    setCart(newCart);
    //save to locale storage (for now)
    addToDb(product.key);
  };
  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchProduct = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setDisplayProducts(matchProduct);
    console.log(matchProduct.length);
  };
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search product"
          onChange={handleSearch}
        />
      </div>
      <div>
        <div className="shop-container">
          <div className="product-container">
            {displayProducts.map((product) => (
              <Product
                key={product.key}
                product={product}
                handlaAddToCart={handlaAddToCart}
              ></Product>
            ))}
          </div>
          <div className="cart-container">
            <Cart cart={cart}>
              <Link to="/review">
                <button className="btn-regular">Review Your Order</button>
              </Link>
            </Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
