import React from 'react';
import "./Foter.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Hujjatlar</h4>
        <ul>
          <li>Sotish uchun umumiy shartlar</li>
          <li>Nizom</li>
          <li>Guvohnoma</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Servis</h4>
        <ul>
          <li>Namoz vaqti</li>
          <li>Muddati to‘lov islomda</li>
          <li>alif shopda soting!</li>
          <li>Qaytarish</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Tovarlar katalogi</h4>
        <ul>
          <li>Smartfonlar va telefonlar</li>
          <li>Gadjetlar</li>
          <li>Smartfonlar uchun aksessuarlar</li>
          <li>Soat va aksessuarlar</li>
          <li>Tegishli tovarlar</li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Biz haqimizda axborot vositalarida</h4>
        <div className="social-links">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">inst</a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">faceb</a>
          <a href="https://telegram.com" target="_blank" rel="noopener noreferrer">telegr</a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">tiktok</a>
        </div>
        <div className="contact-info">
          <p>Axborot xizmati</p>
          <p><a href="mailto:alifshop_uz">alifshop_uz</a></p>
          <p><a href="tel:+998556121212">+998 55 612 12 12</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;