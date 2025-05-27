import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { updateQuantity, removeFromCart } from "../../redux/cartSlace";
import "./Cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  
  // Umumiy summani hisoblash
  const totalSum = cartItems.reduce((total, item) => {
    // "3,770,000 so'm" kabi stringdan raqamni olish
    const price = parseInt(item.oldPrice.replace(/[^\d]/g, ""));
    return total + (price * item.quantity);
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="cart-wrapper">
        <h2 className="cart-title">Savat</h2>
        <p className="cart-empty">Savatda hech narsa yo'q</p>
      </div>
    );
  }

  return (
    <div className="cart-wrapper">
      <h2 className="cart-title">Savat</h2>
      
      <div className="cart-content">
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="cart-item-image">
                <img src={item.image} alt={item.title} />
              </div>
              
              <div className="cart-item-details">
                <h3 className="cart-item-title">{item.title}</h3>
                <p className="cart-item-price">{item.oldPrice}</p>
              </div>
              
              <div className="cart-item-quantity">
                <button 
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  className="quantity-btn"
                >
                  -
                </button>
                <span className="quantity-display">{item.quantity}</span>
                <button 
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  className="quantity-btn"
                >
                  +
                </button>
              </div>
              
              <div className="cart-item-total">
                {parseInt(item.oldPrice.replace(/[^\d]/g, "")) * item.quantity} so'm
              </div>
              
              <button 
                className="cart-item-remove"
                onClick={() => dispatch(removeFromCart(item.id))}
              >
                <FaTrash />
              </button>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h3 className="summary-title">Buyurtma ma'lumoti</h3>
          <div className="summary-row">
            <span>Mahsulotlar ({cartItems.length}):</span>
            <span>{totalSum.toLocaleString()} so'm</span>
          </div>
          <div className="summary-row total">
            <span>Jami:</span>
            <span>{totalSum.toLocaleString()} so'm</span>
          </div>
          <button className="checkout-button">Rasmiylashtirishga o'tish</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;