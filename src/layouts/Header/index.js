import "./index.scss";
import { Link } from "react-router-dom";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../redux/slices/sidebarSlice";
import SideBar from "../../components/SideBar";
import { openModal } from "../../redux/slices/modalSlice";
import Modal from "../../components/Modal";

function Header() {
  const isActiveModal = useSelector((state) => state.modal.isActive);
  const dispatch = useDispatch();
  console.log("re-render header");
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
            <div
              className="header_icon"
              onClick={() =>
                dispatch(
                  openSidebar({
                    sideBarItemActive: {
                      name: "search product",
                      status: "active",
                    },
                  })
                )
              }
            >
              <CiSearch />
            </div>
            <div className="header_icon" onClick={() => dispatch(openModal())}>
              <CiUser />
            </div>
            <div
              className="header_icon"
              onClick={() =>
                dispatch(
                  openSidebar({
                    sideBarItemActive: {
                      name: "saved products",
                      status: "active",
                    },
                  })
                )
              }
            >
              <CiHeart />
              <span className="header_favorite-number">2</span>
            </div>
            <div
              className="header_icon"
              onClick={() =>
                dispatch(
                  openSidebar({
                    sideBarItemActive: {
                      name: "list products",
                      status: "active",
                    },
                  })
                )
              }
            >
              <BsCart />
              <span className="header_cart-number">3</span>
            </div>
          </div>
          <SideBar />
          {isActiveModal && <Modal />}
        </div>
      </div>
    </div>
  );
}

export default Header;
