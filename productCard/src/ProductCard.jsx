function ProductCard({ name, price, description, image }) {
  return (
    <div className="card">
      <img src={image} alt={name} />

      <div className="card-content">
        <h2>{name}</h2>
        <h3>₹{price}</h3>
        <p>{description}</p>

        <button>View Product</button>
      </div>
    </div>
  );
}

export default ProductCard;