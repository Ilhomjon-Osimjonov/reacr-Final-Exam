import React from "react";
import { useSelector } from "react-redux";
import ProductCard from "../proCart/ProductCard";
import "./Favorites.css";

const Favorites = () => {
  const favorites = useSelector((state) => state.favorites.items);

  return (
    <div className="favorites-wrapper">
      <h2 className="favorites-title">Sevimliklar</h2>
      {favorites.length === 0 ? (
        <p className="favorites-empty">Sevimliklar bo'sh</p>
      ) : (
        <div className="favorites-grid">
          {favorites.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;