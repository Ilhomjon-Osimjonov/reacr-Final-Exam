import React from "react";
import { Link } from "react-router-dom";
import ProductCard from "../proCart/ProductCard";
import productData from "../../mock/realmi"
import  './Realmi.css'

const Realmi = () => {
  return (
    <div className="realmi">
      <div className="realmi-wrapper">
        <div className="realmi-header">
          <h2 className="realmi-title">Realmi va Inoi Smartfonlariga jegirmalar</h2>
          <a href="#" className="realmi-link">
            Hammasini ko‘rish →
          </a>
        </div>
        <div className="realmits-grid">
          {productData.map((product) => (
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

export default Realmi;
