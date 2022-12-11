import "./index.scss";
import { Link } from "react-router-dom";
import { CiSearch, CiHeart, CiUser } from "react-icons/ci";
import { BsCart } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../redux/slices/sidebarSlice";
import SideBar from "../../components/SideBar";
import { openModal } from "../../redux/slices/modalSlice";
import ModalLoginForm from "../../components/Modal/ModalLoginForm";

function Header() {
  const dispatch = useDispatch();

  const isActiveModal = useSelector((state) => state.modal.isActive);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const listProductInCart = useSelector((state) => state.cart.cart);
  const listProductInWishList = useSelector((state) => state.cart.wishlist);

  const getCountProducts = (array) => {
    let count = 0;
    array.map((element) => {
      count += element.count;
    });

    return count;
  };

  const handleClickUser = () => {
    if (!isAuthenticated) {
      dispatch(openModal());
    }
  };

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
                <Link to="/">Home</Link>
              </li>
              <li className="navbar_item">
                <Link to="/shop">Shop</Link>
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
                <ul className="navbar_subnav">
                  <li className="navbar_subnav-item">
                    <Link to={"/404"}>404 Page</Link>
                  </li>
                  <li className="navbar_subnav-item">
                    <Link to={"/my-order"}>My order</Link>
                  </li>
                </ul>
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
            <div className="header_icon" onClick={handleClickUser}>
              <CiUser />
              {isAuthenticated && (
                <ul className="header_action" onClick={(e) => e.stopPropagation()}>
                  <li className="header_action_item">
                    <Link to="/user-profile">My account</Link>
                  </li>
                  <li className="header_action_item">
                    <Link to="/my-order">My order</Link>
                  </li>
                  <li className="header_action_item">
                    <Link to="/logout">Logout</Link>
                  </li>
                </ul>
              )}
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
              <span className="header_favorite-number">{getCountProducts(listProductInWishList)}</span>
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
              <span className="header_cart-number">{getCountProducts(listProductInCart)}</span>
            </div>
          </div>
          <SideBar />
          {isActiveModal && <ModalLoginForm />}
        </div>
      </div>
    </div>
  );
}

export default Header;
