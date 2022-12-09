import { IoCloseOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button";
import { closeSidebar } from "../../redux/slices/sidebarSlice";
import SearchForm from "../SearchForm";
import "./index.scss";
import { useEffect } from "react";
import { useState } from "react";
import { formatPrice } from "../../Utils/Commons";

function SideBar() {
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
  console.log("cart list", listProductInCart);

  const result = findActiveSideBarItem(listSideBars);

  const totalPrice = (cart) => {
    if (cart.length > 0) {
      let totalPrice = 0;
      cart.map((cartItem) => {
        return (totalPrice += cartItem.price);
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
      } else if (result[0]?.name === "list products") {
        setSideBarContent("searchProductsView");
      }
    }
  }, [result]);

  useEffect(() => {}, []);

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
            <li className="sidebar_item">
              <div className="sidebar_content">
                <Link to="/shop" className="sidebar_img_wrapper">
                  <img src={require("../../assests/images/products/women/4.jpg")} alt="" />
                </Link>
                <div className="sidebar_info">
                  <h4 className="sidebar_item_title fs-sm ft-medium">Women Striped Shirt Dress</h4>
                  <p className="font-bold sidebar_item_size">36, Red</p>
                  <p className="sidebar_item_price">$129</p>
                </div>
              </div>
              <div className="button_remove">
                <IoCloseOutline />
              </div>
            </li>
          </ul>
          <div className="sidebar_total">
            <p className="sidebar_total_heading">Subtotal</p>
            <h4 className="sidebar_total_price"></h4>
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
                      <img src={require(`../../assests/images/products/${cartItem.imgSrc}`)} alt="" />
                    </Link>
                    <div className="sidebar_info">
                      <h4 className="sidebar_item_title fs-sm ft-medium">{cartItem.name}</h4>
                      <p className="sidebar_item_size">
                        Size: {cartItem.size} x{cartItem.count}
                      </p>
                      <p className="sidebar_item_price">{formatPrice(cartItem.price)} VNĐ</p>
                    </div>
                  </div>
                  <div className="button_remove">
                    <IoCloseOutline />
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="sidebar_total">
            <p className="sidebar_total_heading">Subtotal</p>
            <h4 className="sidebar_total_price">{formatPrice(totalPrice(listProductInCart))}</h4>
          </div>
          <div className="sidebar_action">
            <Button type="secondary" size="full-btn" className="mb-5">
              Check out now
            </Button>
            <Button type="primary" size="full-btn">
              Edit or view
            </Button>
          </div>
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
