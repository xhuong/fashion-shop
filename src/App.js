import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollButton from "./components/ScrollToTop/ScrollButton";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ScrollToTop from "./Helpers/ScrollToTop";
import PageNotFoundPage from "./pages/PageNotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import { useEffect } from "react";

function App() {
  const handleLeavePage = () => {
    localStorage.clear();
  };

  useEffect(() => {
    window.addEventListener("beforeunload", handleLeavePage);
    return () => {
      window.removeEventListener("beforeunload", handleLeavePage);
    };
  }, []);

  return (
    <div className="app">
      <div className="app_content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/my-cart" element={<CartPage />} />
            <Route path="/products/details/:id" element={<ProductDetailPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<PageNotFoundPage />} />
          </Routes>
          <ScrollToTop />
        </Router>
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
