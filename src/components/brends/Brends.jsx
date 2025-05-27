import './Brends.css'

const Brends = () => {
    const brands = [
        { name: 'Asus', logo: 'ASUS', color: '#1e293b' },
        { name: 'Avalon', logo: 'AVALON', color: '#374151' },
        { name: 'Bosch', logo: 'BOSCH', color: '#dc2626' },
        { name: 'Huawei', logo: 'HUAWEI', color: '#dc2626' },
        { name: 'LG', logo: 'LG', color: '#7c2d12' },
        { name: 'Oppo', logo: 'oppo', color: '#059669' },
        { name: 'Premier', logo: 'PREMIER', color: '#1f2937' },
        { name: 'Tecno', logo: 'TECNO', color: '#0ea5e9' },
        { name: 'Vivo', logo: 'vivo', color: '#3b82f6' },
        { name: 'Apple', logo: '', color: '#000000', isApple: true },
        { name: 'Samsung', logo: 'SAMSUNG', color: '#1e40af' },
        { name: 'Xiaomi', logo: 'Mi', color: '#ea580c', isMi: true },
        { name: 'Artel', logo: 'artel', color: '#059669' },
        { name: 'Shivaki', logo: 'SHIVAKI', color: '#dc2626' },
        { name: 'Honor', logo: 'HONOR', color: '#8b5cf6' }
      ];
    
      const specialBrand = { name: 'Realme', logo: 'R', color: '#eab308' };
    
      return (
        <div className="brand-showcase">
          {/* Header */}
          <div className="header">
            <h1 className="title">
              Mashhur brendlar
            </h1>
            <div className="view-all">
              Hammasini ko'rish 
              <span className="arrow">›</span>
            </div>
          </div>
    
          {/* Brands Grid */}
          <div className="brand-grid">
            {brands.map((brand, index) => (
              <div key={index} className="brand-card">
                <div className="logo-container">
                  {brand.isApple ? (
                    <div className="apple-logo" style={{ backgroundColor: brand.color }}>
                      <div className="apple-leaf"></div>
                    </div>
                  ) : brand.isMi ? (
                    <div className="mi-logo" style={{ backgroundColor: brand.color }}>
                      {brand.logo}
                    </div>
                  ) : (
                    <span className="brand-logo" style={{ color: brand.color }}>
                      {brand.logo}
                    </span>
                  )}
                </div>
                <div className="brand-name">
                  {brand.name}
                </div>
              </div>
            ))}
            
            {/* Special Realme Brand */}
            <div className="brand-card special-card" style={{ backgroundColor: specialBrand.color }}>
              <div className="logo-container">
                <div className="realme-logo">
                  <span className="realme-letter">
                    {specialBrand.logo}
                  </span>
                </div>
              </div>
              <div className="special-brand-name">
                {specialBrand.name}
              </div>
            </div>
          </div>
    
          {/* Catalog Button */}
          <div className="button-container">
            <button className="catalog-button">
              <div className="grid-icon">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="grid-dot"></div>
                ))}
              </div>
              Katalogga o'tish
            </button>
          </div>
        </div>
      );
    };
    
export default Brends
