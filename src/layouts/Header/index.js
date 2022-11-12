import "./index.scss";
import { Link } from "react-router-dom";
import { CiSearch, CiHeart, CiUser, CiShoppingCart } from "react-icons/ci";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header_container">
          <div className="navbar_left">
            <Link className="header_logo" to={"/"}>
              <img src={require("../../assests/images/logo.png")} alt="" />
            </Link>
            <ul className="navbar_list">
              <li className="navbar_item">
                <Link to={"/"}>Home</Link>
              </li>
              <li className="navbar_item">
                <Link to={"/shop"}>Shop</Link>
                <ul className="navbar_subnav">
                  <li className="navbar_subnav-item">
                    <Link to={"/"}>Shop</Link>
                  </li>
                  <li className="navbar_subnav-item">
                    <Link to={"/"}>Shop</Link>
                  </li>
                  <li className="navbar_subnav-item">
                    <Link to={"/"}>Shop</Link>
                  </li>
                  <li className="navbar_subnav-item">
                    <Link to={"/"}>Shop</Link>
                  </li>
                </ul>
              </li>
              <li className="navbar_item">
                <Link to={"/"}>Product</Link>
              </li>
              <li className="navbar_item">
                <Link to={"/"}>Pages</Link>
              </li>
              <li className="navbar_item">
                <Link to={"/"}>Docs</Link>
              </li>
            </ul>
          </div>
          <div className="navbar_right">
            <div className="header_icon">
              <CiSearch />
            </div>
            <div className="header_icon">
              <CiUser />
            </div>
            <div className="header_icon">
              <CiHeart />
              <span className="header_favorite-number">2</span>
            </div>
            <div className="header_icon">
              <CiShoppingCart />
              <span className="header_cart-number">3</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
