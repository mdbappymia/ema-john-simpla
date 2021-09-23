import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";

const Product = (props) => {
  // console.log(props.product);
  const { name, img, seller, price, stock, star } = props.product;
  console.log(props.product);

  return (
    <div className="product">
      <div>
        <img src={img} alt="" />
      </div>
      <div>
        <h3 className="product-name">{name}</h3>
        <p>
          <small>by: {seller}</small>
        </p>
        <p>${price}</p>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>

        <Rating
          initialRating={star}
          readonly
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
        ></Rating>
        <br />
        <br />
        <button
          onClick={() => props.handlaAddToCart(props.product)}
          className="btn-regular"
        >
          <FontAwesomeIcon icon={faShoppingCart} /> add to cart
        </button>
      </div>
    </div>
  );
};

export default Product;
