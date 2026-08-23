import "./App.css";
import ProductCard from "./ProductCard";

function App() {
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      description: "Comfortable wireless headphones with clear and powerful sound.",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=500&q=80"
    },

    {
      id: 2,
      name: "Smart Watch",
      price: 2499,
      description: "Modern smartwatch with fitness tracking and notifications.",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=500&q=80"
    },

    {
      id: 3,
      name: "Gaming Mouse",
      price: 999,
      description: "Fast and responsive gaming mouse designed for better control.",
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=500&q=80"
    },

    {
      id: 4,
      name: "Bluetooth Speaker",
      price: 1499,
      description: "Portable Bluetooth speaker with powerful and clear audio.",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=500&q=80"
    }
  ];

  return (
    <div className="app">
      <h1>Our Products</h1>
      <p className="subtitle">Explore our latest collection</p>

      <div className="products">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            description={product.description}
            image={product.image}
          />
        ))}
      </div>
    </div>
  );
}

export default App;