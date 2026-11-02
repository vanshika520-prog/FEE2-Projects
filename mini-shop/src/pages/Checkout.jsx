import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../store/cartSlice";

function Checkout() {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = () => {
    alert("Order placed successfully! 🎉");
    dispatch(clearCart());
    navigate("/");
  };

  if (items.length === 0) {
    return (
      <div className="empty">
        <h2>Nothing to checkout</h2>
        <button onClick={() => navigate("/products")}>Back to Products</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Order Summary</h2>

      <table className="summary">
        <thead>
          <tr>
            <th>Product</th>
            <th>Qty</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>₹{item.price * item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3>Grand Total: ₹{total}</h3>

      <div className="btn-group">
        <button onClick={() => navigate("/cart")}>Back to Cart</button>
        <button onClick={placeOrder}>Place Order</button>
      </div>
    </div>
  );
}

export default Checkout;