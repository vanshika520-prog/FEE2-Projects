import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");

  const handleAdd = () => {
    dispatch(addToCart(product));
    setMessage("Added to cart ✓");

    // hide the message after 1.5 seconds
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">₹{product.price}</p>
      <button onClick={handleAdd}>Add to Cart</button>
      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default ProductCard;