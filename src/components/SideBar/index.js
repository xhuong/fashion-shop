import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Button from "../Button";
import { closeSidebar } from "../../redux/slices/sidebarSlice";
import SearchForm from "../SearchForm";
import "./index.scss";
import { useEffect } from "react";
import { useState } from "react";
import Message from "../Message";
import { removeProductsFromCart, removeProductsFromWishList } from "../../redux/slices/cartSlice";
import { formatPrice } from "../../Utils/Commons";

function SideBar() {
  const navigate = useNavigate("/shop");
  const [sideBarContent, setSideBarContent] = useState("");
  const dispatch = useDispatch();

  const isActiveSidebar = useSelector((state) => state.sidebar.isActive);
  const sidebarHeading = useSelector((state) => state.sidebar.heading);
  const listSideBars = useSelector((state) => state.sidebar.listSideBars);

  const findActiveSideBarItem = (array) => {
    const sideBarItemActive = array.filter((element) => {
      return element.status === "active" ? element : undefined;
    });
    return sideBarItemActive;
  };

  const listProductInCart = useSelector((state) => state.cart.cart);
  const listProductInWishList = useSelector((state) => state.cart.wishlist);
  const result = findActiveSideBarItem(listSideBars);

  const totalPrice = (cart) => {
    if (cart.length > 0) {
      let totalPrice = 0;
      cart.map((cartItem) => {
        return (totalPrice += cartItem.count * cartItem.priceOfProduct);
      });

      return totalPrice;
    }
  };

  useEffect(() => {
    if (result[0]?.status === "active") {
      if (result[0]?.name === "saved products") {
        setSideBarContent("savedProductsView");
      } else if (result[0]?.name === "list products") {
        setSideBarContent("listProductsView");
      } else if (result[0]?.name === "search product") {
        setSideBarContent("searchProductsView");
      }
    }
  }, [result]);

  return (
    <div className={isActiveSidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar_heading_wrapper">
        <h4 className="sidebar_heading">{sidebarHeading}</h4>
        <div
          className="button_remove"
          onClick={() => {
            dispatch(closeSidebar());
          }}
        >
          <IoCloseOutline />
        </div>
      </div>

      {/* wishlist  */}
      {sideBarContent === "savedProductsView" ? (
        <>
          <ul className="sidebar_list">
            {listProductInWishList.map((wishListItem) => (
              <li className="sidebar_item">
                <div className="sidebar_content">
                  <Link to="/shop" className="sidebar_img_wrapper">
                    <img src={require(`../../assests/images/products/${wishListItem.productImages}`)} alt="" />
                  </Link>
                  <div className="sidebar_info">
                    <h4 className="sidebar_item_title fs-sm ft-medium">{wishListItem.nameOfProduct}</h4>
                    <p className="font-bold sidebar_item_size">
                      Size: {wishListItem.size} x{wishListItem.count}
                    </p>
                    <p className="sidebar_item_price">{formatPrice(wishListItem.priceOfProduct)}</p>
                  </div>
                </div>
                <div
                  className="button_remove"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(removeProductsFromWishList(wishListItem.id));
                  }}
                >
                  <IoCloseOutline />
                </div>
              </li>
            ))}
          </ul>
          {listProductInWishList.length <= 0 ? (
            <div style={{ margin: "11px 16px" }}>
              <Message className="infor">Your wish list is empty. Let's go shop !</Message>
              <Button
                type="secondary"
                size="full-btn"
                onClick={() => {
                  navigate("/shop");
                  dispatch(closeSidebar());
                }}
              >
                Go to shop
              </Button>
            </div>
          ) : (
            <>
              <div className="sidebar_total">
                <p className="sidebar_total_heading">Subtotal</p>
                <h4 className="sidebar_total_price">{formatPrice(totalPrice(listProductInWishList))}</h4>
              </div>
              <div className="sidebar_action">
                <Button type="secondary" size="full-btn" className="mb-5">
                  Move to cart
                </Button>
                <Button type="primary" size="full-btn">
                  Edit or view
                </Button>
              </div>
            </>
          )}
        </>
      ) : null}

      {/* cart  */}
      {sideBarContent === "listProductsView" ? (
        <>
          <ul className="sidebar_list">
            {listProductInCart.map((cartItem, index) => {
              return (
                <li className="sidebar_item" key={index}>
                  <div className="sidebar_content">
                    <Link to="/shop" className="sidebar_img_wrapper">
                      <img src={require(`../../assests/images/products/${cartItem.productImages}`)} alt="" />
                    </Link>
                    <div className="sidebar_info">
                      <h4 className="sidebar_item_title fs-sm ft-medium">{cartItem.nameOfProduct}</h4>
                      <p className="sidebar_item_size">
                        Size: {cartItem.size} x{cartItem.count}
                      </p>
                      <p className="sidebar_item_price">{formatPrice(cartItem.priceOfProduct)} VNĐ</p>
                    </div>
                  </div>
                  <div
                    className="button_remove"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(removeProductsFromCart(cartItem.id));
                    }}
                  >
                    <IoCloseOutline />
                  </div>
                </li>
              );
            })}
          </ul>
          {listProductInCart.length <= 0 ? (
            <div style={{ margin: "11px 16px" }}>
              <Message className="infor">Your cart is empty. Let's go shop !</Message>
              <Button
                type="secondary"
                size="full-btn"
                onClick={() => {
                  navigate("/shop");
                  dispatch(closeSidebar());
                }}
              >
                Go to shop
              </Button>
            </div>
          ) : (
            <>
              <div className="sidebar_total">
                <p className="sidebar_total_heading">Subtotal</p>
                <h4 className="sidebar_total_price">{formatPrice(totalPrice(listProductInCart))} VNĐ</h4>
              </div>
              <div className="sidebar_action">
                <Button
                  type="secondary"
                  size="full-btn"
                  className="mb-5"
                  onClick={() => {
                    navigate("/my-cart");
                    dispatch(closeSidebar());
                  }}
                >
                  Check out now
                </Button>
                <Button type="primary" size="full-btn">
                  Edit or view
                </Button>
              </div>
            </>
          )}
        </>
      ) : null}
      {sideBarContent === "searchProductsView" ? (
        <div className="p-6">
          <SearchForm />
        </div>
      ) : null}
    </div>
  );
}

export default SideBar;
