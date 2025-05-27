import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Router uchun kerakli importlar
import Navbar from "./components/navbar/Navbar";
import Swipper from "./components/swipper/Swipper";
import Discounts from "./components/discounts/Discounts";
import SinglePage from "./components/singlePage/SinglePage";
import Realmi from "./components/realmi/Realmi";
import Brends from "./components/brends/Brends";
import MobileAppShowcase from "./components/ MobileAppShowcase/ MobileAppShowcase";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <Router>
<div class="custom-wrapper">
         <Navbar /> 
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Swipper />
                <Discounts />
                <Realmi/>
                <Brends/>
                <MobileAppShowcase/>
              </>
            }
          />
          <Route path="/product/:id" element={<SinglePage />} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;