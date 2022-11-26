import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ScrollButton from "./components/ScrollToTop/ScrollButton";

function App() {
  return (
    <div className="app">
      <div className="app_content">
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<p>shop</p>} />
            <Route path="/order-page" element={<p>order</p>} />
            <Route path="/product-detail" element={<p>product-detail</p>} />
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
