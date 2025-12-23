// src/pages/Comparison.tsx
import { useEffect, useState } from "react";

type Product = {
  id: string | number;
  name: string;
  price: number;
  description?: string;
};

const STORAGE_KEY = "comparison";

const Comparison = () => {
  const [comparison, setComparison] = useState<Product[]>([]);

  useEffect(() => {
    const data: Product[] = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setComparison(data);
  }, []);

  const removeFromComparison = (id: Product["id"]) => {
    const updated = comparison.filter((item) => item.id !== id);
    setComparison(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Comparison List</h2>

      {comparison.length === 0 ? (
        <p>No products selected for comparison.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {comparison.map((product) => (
            <div
              key={String(product.id)}
              className="border p-2 rounded shadow-sm bg-white text-xs"
            >
              <h3 className="text-sm font-medium">{product.name}</h3>
              <p className="text-xs text-gray-600">Price: ${product.price}</p>
              <p className="text-[11px] text-gray-500">
                {product.description ?? ""}
              </p>

              <button
                type="button"
                onClick={() => removeFromComparison(product.id)}
                className="mt-2 text-xs px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Comparison;
