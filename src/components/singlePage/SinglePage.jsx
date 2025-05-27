import React from "react";
import { useParams } from "react-router-dom";
import productData from "../../mock/productdata";
import "./SinglePage.css";

const SinglePage = () => {
  const { id } = useParams(); // URL dan id ni olamiz
  const product = productData.find((item) => item.id === parseInt(id)); // Mahsulotni id bo‘yicha topamiz

  if (!product) {
    return <div>Mahsulot topilmadi</div>;
  }

  return (
    <div className="single-product-container">
      <div className="single-product-images">
        <div className="thumbnail-images">
          {product.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Thumbnail ${index + 1}`}
              className="thumbnail"
            />
          ))}
        </div>
        <div className="main-image">
          <img src={product.image} alt={product.title} />
        </div>
      </div>
      <div className="single-product-details">
        <div className="product-tags">
          <span className="warranty">1 yil kafolat</span>
          <span className="imei">IMEI</span>
          <span className="discount">{product.discount}</span>
        </div>
        <h2>{product.title}</h2>
        <div className="price-section">
          <p className="installment-label">Muddati to‘lovga sotib olish</p>
          <div className="price-row">
            <p className="monthly-price">{product.monthlyPrice}</p>
            <p className="full-price">{product.price}</p>
          </div>
          <p className="old-price">{product.oldPrice}</p>
        </div>
        <div className="installment-options">
          {[3, 6, 12, 18, 24].map((month) => (
            <button
              key={month}
              className={`option ${month === 24 ? "active" : ""}`}
            >
              {month} oyga
            </button>
          ))}
        </div>
        <div className="buttons">
          <button className="buy-now">Akkauntingizga kirish</button>
          <button className="add-to-cart">Savatga qo‘shish</button>
          <button className="favorite">
            <svg
              width="20"
              height="20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 21 4.318 12.682a4.5 4.5 0 010-6.364z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="additional-info">
          <p className="seller">
            <span className="icon">🛒</span> Sotuvchi: REBUS
            <span className="rating">★ 4.9</span>
          </p>
          <p className="delivery">
            <span className="icon">🚚</span> Bepul yetkazib berish ALIF SHOP
            <br />
            Toshkent bo‘ylab 1 kundan, O‘zbekiston bo‘ylab 3 kundan
          </p>
          <p className="return">
            <span className="icon">↻</span> Tovarni qaytarish
          </p>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;