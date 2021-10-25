import { useEffect, useState } from "react";
import { getStoredCart } from "../utilities/fakedb";

const useCart = () => {
  const [cart, setCart] = useState([]);
  useEffect(() => {
    const savedCart = getStoredCart();
    console.log(savedCart);
    //   if (products.length > 0) {
    //     const storedCart = [];
    //     for (const key in savedCart) {
    //       const addedProduct = products.find((product) => product.key === key);
    //       if (addedProduct) {
    //         const quantity = savedCart[key];
    //         addedProduct.quantity = quantity;
    //         storedCart.push(addedProduct);
    //       }
    //     }
    //     setCart(storedCart);
    //   }
  }, []);

  return [cart, setCart];
};
export default useCart;
