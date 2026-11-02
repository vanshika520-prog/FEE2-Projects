import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="banner">
      <h1>Welcome to MiniShop 🛒</h1>
      <p>Find everyday products at friendly prices.</p>
      <div className="btn-group">
        <button onClick={() => navigate("/products")}>Shop Products</button>
        <button onClick={() => navigate("/cart")}>Go to Cart</button>
      </div>
    </div>
  );
}

export default Home;