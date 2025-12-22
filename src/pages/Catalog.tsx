import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const products = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Product ${i + 1}`,
  price: (Math.random() * 100).toFixed(2),
  description: `This is a description for Product ${i + 1}`,
}));

const Catalog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.includes(searchTerm) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="p-4 bg-light min-vh-100">
      <h2 className="text-center mb-4 display-5 fw-bold text-primary">Product Catalog</h2>

      <div className="d-flex justify-content-center mb-4">
        <input
          type="text"
          placeholder="🔍 Search for products..."
          className="form-control w-50 shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="container">
        <div className="row g-4">
          {filteredProducts.map((product) => (
            <div className="col-sm-6 col-md-4 col-lg-3" key={product.id}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
