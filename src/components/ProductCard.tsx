import React from "react";

const ProductCard = ({ product }: { product: any }) => {
  const handleAddToComparison = () => {
    const existing = JSON.parse(localStorage.getItem("comparison") || "[]");
    const alreadyExists = existing.some((item: any) => item.id === product.id);

    if (!alreadyExists) {
      const updated = [...existing, product];
      localStorage.setItem("comparison", JSON.stringify(updated));
      alert(`${product.name} added to comparison.`);
    } else {
      alert(`${product.name} is already in comparison.`);
    }
  };

  return (
    <div className="card shadow-sm h-100 border-0">
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title text-primary fw-bold">{product.name}</h5>
          <p className="card-text text-muted small">{product.description}</p>
        </div>
        <div>
          <h6 className="text-success fw-bold mb-2">${product.price}</h6>
          <button className="btn btn-outline-primary w-100 mb-2">
            View Details
          </button>
          <button
            className="btn btn-warning w-100"
            onClick={handleAddToComparison}
          >
            ➕ Add to Comparison
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
