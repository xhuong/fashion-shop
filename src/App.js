import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollButton from "./components/ScrollToTop/ScrollButton";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/order-page" element={<p>order</p>} />
            <Route path="/product-detail" element={<ProductDetailPage />} />
            <Route path="/sign in" element={<p>sign in</p>} />
            <Route path="/account" element={<p>account</p>} />
          </Routes>
        </Router>
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;
