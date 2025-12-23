// src/components/ProductCard.tsx

type Product = {
  id: string | number;
  name: string;
  description?: string;
  price: number;
  // add more fields if you have (image, category, etc.)
};

type ProductCardProps = {
  product: Product;
};

const STORAGE_KEY = "comparison";

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToComparison = () => {
    const existing: Product[] = JSON.parse(
      localStorage.getItem(STORAGE_KEY) || "[]"
    );

    const alreadyExists = existing.some((item) => item.id === product.id);

    if (!alreadyExists) {
      const updated = [...existing, product];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
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
          <p className="card-text text-muted small">
            {product.description ?? ""}
          </p>
        </div>

        <div>
          <h6 className="text-success fw-bold mb-2">${product.price}</h6>

          <button type="button" className="btn btn-outline-primary w-100 mb-2">
            View Details
          </button>

          <button
            type="button"
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
