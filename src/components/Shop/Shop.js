import React, { useEffect, useState } from "react";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.JSON")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setDisplayProducts(data);
      });
  }, []);
  useEffect(() => {
    if (products.length > 0) {
      const savedCart = getStoredCart();
      const storedCart = [];
      for (const key in savedCart) {
        const addedProduct = products.find((product) => product.key === key);
        if (addedProduct) {
          const quantity = savedCart[key];
          addedProduct.quantity = quantity;
          storedCart.push(addedProduct);
        }
      }

      setCart(storedCart);
    }
  }, [products]);
  const handlaAddToCart = (product) => {
    setCart([...cart, product]);
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
            <Cart cart={cart}></Cart>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
