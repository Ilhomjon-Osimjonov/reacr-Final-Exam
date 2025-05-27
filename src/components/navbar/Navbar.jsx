import React, { useState, useEffect } from "react";
import { FaBars, FaSearch, FaShoppingCart, FaHeart, FaTimes } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/cartSlace";
import { toggleFavorite } from "../../redux/favoriteSlace";
import categories from "../../mock/categories";
import "./Navbar.css";

const Navbar = () => {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const [isCartDropdownOpen, setIsCartDropdownOpen] = useState(false);
  const [isFavoritesDropdownOpen, setIsFavoritesDropdownOpen] = useState(false);
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const favorites = useSelector((state) => state.favorites.items);

  // Window resize handler
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      
      // Close mobile menus when resizing to desktop
      if (window.innerWidth > 768) {
        setIsMobileSearchOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isCatalogOpen || isMoreOpen || isCartDropdownOpen || isFavoritesDropdownOpen) {
        const target = event.target;
        const isDropdownClick = target.closest('.catalog-dropdown') || 
                               target.closest('.dropdown') || 
                               target.closest('.catalog-btn') ||
                               target.closest('.more button') ||
                               target.closest('.icon-group');
        
        if (!isDropdownClick) {
          setIsCatalogOpen(false);
          setIsMoreOpen(false);
          setIsCartDropdownOpen(false);
          setIsFavoritesDropdownOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isCatalogOpen, isMoreOpen, isCartDropdownOpen, isFavoritesDropdownOpen]);

  const handleMouseEnter = (category) => {
    setSelectedCategory(category);
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCatalogOpen(!isCatalogOpen);
  };

  const handleMobileSearchToggle = () => {
    setIsMobileSearchOpen(!isMobileSearchOpen);
  };

  const isMobile = windowWidth <= 768;
  const isTablet = windowWidth <= 992 && windowWidth > 768;

  return (
    <div className="navbar-container">
      <div className="navbar">
        <div className="logo">
          <img src="https://alifshop.uz/_ipx/s_113x32/images/alifshop-logo.svg" alt="Alif Logo" />
        </div>

        {/* Mobile Menu Button */}
        {isMobile && (
          <button 
            className="mobile-menu-btn"
            onClick={handleMobileMenuToggle}
          >
            {isCatalogOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}

        {/* Mobile Search Toggle */}
        {isMobile && (
          <button 
            className="mobile-search-toggle"
            onClick={handleMobileSearchToggle}
          >
            <FaSearch />
          </button>
        )}

        {/* Desktop Catalog */}
        {!isMobile && (
          <div className="catalog">
            <button
              onClick={() => setIsCatalogOpen(!isCatalogOpen)}
              className="catalog-btn"
            >
              <FaBars className="mr-2" />
              {isTablet ? "Katalog" : "Tovarlar katalogi"}
            </button>

            {isCatalogOpen && (
              <div className="catalog-dropdown">
                <div className="catalog-left">
                  {categories.map((category, index) => (
                    <p
                      key={index}
                      onMouseEnter={() => handleMouseEnter(category)}
                      className={`catalog-category ${
                        selectedCategory.name === category.name ? "active" : ""
                      }`}
                    >
                      {category.name}
                    </p>
                  ))}
                </div>
                <div className="catalog-right">
                  {selectedCategory.subcategories.map((subcategory, index) => (
                    <div key={index}>
                      <h3>{subcategory.title}</h3>
                      {subcategory.items.map((item, idx) => (
                        <p key={idx} className="subcategory-item">
                          {item}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Desktop Search */}
        {!isMobile && (
          <div className="search">
            <input 
              type="text" 
              placeholder={isTablet ? "Qidirish..." : "Tovarlar va toifalarni izlash"} 
            />
            <FaSearch className="search-icon" />
          </div>
        )}

        <div className="icons">
          <div className="icon-group">
            <FaShoppingCart
              onClick={() => {
                setIsCartDropdownOpen(!isCartDropdownOpen);
                setIsFavoritesDropdownOpen(false);
              }}
              className="icon"
            />
            {cart.length > 0 && (
              <span className="badge">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            )}
            {isCartDropdownOpen && (
              <div className="dropdown">
                {cart.length === 0 ? (
                  <p>Savat bo'sh</p>
                ) : (
                  <div>
                    {cart.map((item) => (
                      <div key={item.id} className="dropdown-item">
                        <div className="dropdown-item-info">
                          <img src={item.image} alt={item.title} />
                          <div>
                            <p>{item.title}</p>
                            <p>
                              {item.quantity} x {item.price}
                            </p>
                          </div>
                        </div>
                        <button onClick={() => dispatch(removeFromCart(item.id))}>
                          O'chirish
                        </button>
                      </div>
                    ))}
                    <p className="total">
                      Umumiy:{" "}
                      {cart
                        .reduce(
                          (total, item) =>
                            total + item.quantity * parseInt(item.price.replace(/\D/g, "")),
                          0
                        )
                        .toLocaleString()}{" "}
                      so'm
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          <div className="icon-group">
            <FaHeart
              onClick={() => {
                setIsFavoritesDropdownOpen(!isFavoritesDropdownOpen);
                setIsCartDropdownOpen(false);
              }}
              className="icon"
            />
            {favorites.length > 0 && (
              <span className="badge">{favorites.length}</span>
            )}
            {isFavoritesDropdownOpen && (
              <div className="dropdown">
                {favorites.length === 0 ? (
                  <p>Sevimliklar bo'sh</p>
                ) : (
                  <div>
                    {favorites.map((item) => (
                      <div key={item.id} className="dropdown-item">
                        <div className="dropdown-item-info">
                          <img src={item.image} alt={item.title} />
                          <div>
                            <p>{item.title}</p>
                            <p>{item.price}</p>
                          </div>
                        </div>
                        <button onClick={() => dispatch(toggleFavorite(item))}>
                          O'chirish
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {!isMobile && (
            <>
              <button className="login-btn">Kirish</button>
              <select className="lang-select">
                <option>RUS</option>
                <option>UZB</option>
              </select>
            </>
          )}
        </div>
      </div>

      {/* Mobile Search Bar */}
      {isMobile && (
        <div className={`mobile-search ${isMobileSearchOpen ? 'active' : ''}`}>
          <input 
            type="text" 
            placeholder="Tovarlar va toifalarni izlash" 
          />
          <FaSearch className="search-icon" />
        </div>
      )}

      {/* Mobile Catalog Dropdown */}
      {isMobile && isCatalogOpen && (
        <div className="catalog-dropdown">
          <div className="catalog-left">
            {categories.map((category, index) => (
              <p
                key={index}
                onClick={() => handleMouseEnter(category)}
                className={`catalog-category ${
                  selectedCategory.name === category.name ? "active" : ""
                }`}
              >
                {category.name}
              </p>
            ))}
          </div>
          <div className="catalog-right">
            {selectedCategory.subcategories.map((subcategory, index) => (
              <div key={index}>
                <h3>{subcategory.title}</h3>
                {subcategory.items.map((item, idx) => (
                  <p key={idx} className="subcategory-item">
                    {item}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="categories">
        <div className="category-list">
          {categories.slice(0, isMobile ? 5 : categories.length).map((category, index) => (
            <p key={index}>{category.name}</p>
          ))}
        </div>

        <div className="more">
          <button onClick={() => setIsMoreOpen(!isMoreOpen)}>
            {isMobile ? "Ko'proq" : "Yana"} <span>{isMoreOpen ? "▲" : "▼"}</span>
          </button>

          {isMoreOpen && (
            <div className="catalog-dropdown">
              <div className="catalog-left">
                {categories.map((category, index) => (
                  <p
                    key={index}
                    onMouseEnter={() => handleMouseEnter(category)}
                    className={`catalog-category ${
                      selectedCategory.name === category.name ? "active" : ""
                    }`}
                  >
                    {category.name}
                  </p>
                ))}
              </div>
              <div className="catalog-right">
                {selectedCategory.subcategories.map((subcategory, index) => (
                  <div key={index}>
                    <h3>{subcategory.title}</h3>
                    {subcategory.items.map((item, idx) => (
                      <p key={idx} className="subcategory-item">
                        {item}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;