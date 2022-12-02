import { Link } from "react-router-dom";
import "./index.scss";

const ShopSlider = () => {
  return (
    <div className="shop_slider">
      <div className="shop_slider_content">
        <div className="shop_slider_infor">
          <h3 className="shop_slider_heading">Shop</h3>
          <ul className="shop_slider_list">
            <li className="shop_slider_item">
              <Link>Men</Link>
            </li>
            <li className="shop_slider_item">
              <Link>Women</Link>
            </li>
            <li className="shop_slider_item">
              <Link>Kids</Link>
            </li>
            <li className="shop_slider_item">
              <Link>Accessories</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ShopSlider;
