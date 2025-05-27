import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlace"; // cartSlace o‘rniga cartSlice
import { FaHeart, FaShoppingCart } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = (e) => {
    e.preventDefault(); // Link ni bosishdan oldin addToCart ishlasin
    dispatch(addToCart(product));
  };

  return (
    <div className="product-card">
      {product.discount && <span className="discount">{product.discount}</span>}
      <FaHeart className="favorite" />
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p className="discount-price">{product.monthlyPrice}</p>
      <p className="old-price">{product.oldPrice}</p>
      <p className="price">{product.price}</p>
      <button onClick={handleAddToCart}>
        <FaShoppingCart /> Savatga
      </button>
    </div>
  );
};

export default ProductCard;