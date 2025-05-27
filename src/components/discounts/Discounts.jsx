import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../proCart/ProductCard";
import productData from "../../mock/productdata";
import interestData from "../../mock/interestData";
import "./Discounts.css";

const Discounts = () => {
  const discounts = productData.slice(0, 6);
  const interests = interestData.slice(0, 12);

  return (
    <div className="discount">
      <div className="discounts-wrapper">
        <div className="discounts-header">
          <h2 className="discounts-title">Chegirmalar</h2>
          <a href="#" className="discounts-link">
            Hammasini ko‘rish →
          </a>
        </div>
        <div className="discounts-grid">
          {discounts.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>

      <div className="interest-wrapper">
        <div className="interest-header">
          <h2 className="interest-title">Sizni qiziqtirish mumkin</h2>
          <a href="#" className="interest-link">
            Ko‘proq ko‘rsatish
          </a>
        </div>
        <div className="interest-grid">
          {interests.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Discounts;