import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} from "../store/cartSlice";

function Cart() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (items.length === 0) {
    return (
      <div className="empty">
        <h2>Your cart is empty 😕</h2>
        <Link to="/products">Go shop something</Link>
      </div>
    );
  }

  return (
    <div>
      <h2>Your Cart</h2>

      {items.map((item) => (
        <div className="cart-item" key={item.id}>
          <img src={item.image} alt={item.name} />

          <div className="cart-info">
            <h4>{item.name}</h4>
            <p>₹{item.price}</p>
          </div>

          <div className="qty">
            <button onClick={() => dispatch(decreaseQuantity(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))}>+</button>
          </div>

          <p className="item-total">₹{item.price * item.quantity}</p>

          <button className="remove" onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <h3>Total: ₹{total}</h3>

      <div className="btn-group">
        <button onClick={() => dispatch(clearCart())}>Clear Cart</button>
        <button onClick={() => navigate("/checkout")}>Checkout</button>
      </div>
    </div>
  );
}

export default Cart;