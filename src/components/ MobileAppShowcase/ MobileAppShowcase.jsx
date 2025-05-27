import React from 'react';
import './ MobileAppShowcase.css';

const MobileAppShowcase = () => {
  const sections = [
    {
      title: "alif shop",
      description: "alifshop.uz - xaridorlarga tez va qulay tarzda turli tovarlarni sotib olish imkoniyatini beradigan marketpleys. alifshop.uz saytida smartfon, kompyuter, planshet, televizor, aqlli soat va boshqa ko'plab moslamalarni topishingiz mumkin.",
      expandText: "Barchasini ko'rsatish"
    },
    {
      title: "Smartfonlar muddatli to'lov asosida",
      description: "Bugungi kunda yuqori texnologiyalar davrida smartfon kundalik hayotimizning ajralmas qismiga aylandi. Zamonaviy telefonlarning ilovalar va texnik parametrlari tufayli smartfonlar ko'pincha bizning kompyuterlarimiz, kameralarimiz,",
      expandText: "Barchasini ko'rsatish"
    },
    {
      title: "Noutbuklar muddatli to'lov asosida",
      description: "Shaxsiy kompyuterlar bizga o'z ishimizni yuqori sifatli bajarish va shu bilan birga bo'sh vaqtimizni ham o'tkazish imkoniyatini beradi. Misolan, noutbuk yordamida tezda dunyoning istalgan nuqtasidan, turli xil ishlarni bajarishingiz",
      expandText: "Barchasini ko'rsatish"
    },
    {
      title: "Jihozlar muddatli to'lov asosida",
      description: "Bizning online do'konda elektronikadan tashqari, turli maishiy texnika mavjud, gaz plitalari, grill tayyorlagichlar, muzlatgichlar, kir yuvish mashinalari, dazmollar, konditsionerlar va boshqa ko'plab almashtrib bo'lmaydigan narsalar.",
      expandText: "Barchasini ko'rsatish"
    }
  ];

  return (
    <div className="mobile-app-showcase">
      <div className="container">
        {/* Main Content */}
        <div className="main-content">
          {/* Phone Display */}
          <div className="phone-section">
            <div className="phone-mockup">
              <div className="phone-screen">
                <div className="phone-header">
                  <div className="status-bar">
                    <span className="time">9:41</span>
                    <div className="status-icons">
                      <div className="signal-bars">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                      </div>
                      <div className="battery"></div>
                    </div>
                  </div>
                  <div className="notch"></div>
                </div>
                
                <div className="app-content">
                  <div className="pink-banner">
                    <div className="banner-content">
                      <h3>Quloqchinlar muddatli to'lovga</h3>
                      <div className="headphone-image"></div>
                    </div>
                  </div>
                  
                  <div className="category-grid">
                    <div className="category-item">
                      <div className="category-icon blue"></div>
                      <span>Smartfonlar</span>
                    </div>
                    <div className="category-item">
                      <div className="category-icon gray"></div>
                      <span>Noutbuklar</span>
                    </div>
                    <div className="category-item">
                      <div className="category-icon green"></div>
                      <span>Planshets</span>
                    </div>
                    <div className="category-item">
                      <div className="category-icon purple"></div>
                      <span>Aksessuarlar</span>
                    </div>
                  </div>
                  
                  <div className="products-section">
                    <h4>Chegirmalar</h4>
                    <div className="product-cards">
                      <div className="product-card">
                        <div className="discount-badge">-15%</div>
                        <div className="product-image blue-product"></div>
                      </div>
                      <div className="product-card">
                        <div className="discount-badge">-20%</div>
                        <div className="product-image colorful-product"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-content">
            <div className="main-text">
              <h1>Ajoyib takliflar har doim yoningizda</h1>
              <p>alif shop ilovasi orqali buyurtma qiling, va qulay takliflar haqida hammadan tez biling</p>
              
              <div className="download-buttons">
                <a href="#" className="download-btn google-play">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z'/%3E%3C/svg%3E" alt="Google Play" />
                  <div>
                    <span>GET IT ON</span>
                    <strong>Google Play</strong>
                  </div>
                </a>
                
                <a href="#" className="download-btn app-store">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z'/%3E%3C/svg%3E" alt="App Store" />
                  <div>
                    <span>Download on the</span>
                    <strong>App Store</strong>
                  </div>
                </a>
                
                <a href="#" className="download-btn app-gallery">
                  <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='white'%3E%3Cpath d='M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2Z'/%3E%3C/svg%3E" alt="AppGallery" />
                  <div>
                    <span>AVAILABLE ON</span>
                    <strong>AppGallery</strong>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* QR Code */}
          <div className="qr-section">
            <div className="qr-code">
              <div className="qr-pattern">
                {/* QR kod pattern */}
                <div className="qr-squares">
                  {Array.from({length: 225}, (_, i) => (
                    <div key={i} className={`qr-square ${Math.random() > 0.5 ? 'filled' : ''}`}></div>
                  ))}
                </div>
              </div>
            </div>
            <p>Yuklab olish uchun kamerangizni QR kodga qarating</p>
          </div>
        </div>

        {/* Information Sections */}
        <div className="info-sections">
          {sections.map((section, index) => (
            <div key={index} className="info-section">
              <h3>{section.title}</h3>
              <p>{section.description}</p>
              <button className="expand-btn">
                {section.expandText} 
                <span className="chevron">▼</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileAppShowcase;