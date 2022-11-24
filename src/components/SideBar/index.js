import { CiCircleRemove } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../Button";
import { closeSidebar } from "../../redux/slices/sidebarSlice";

import "./index.scss";

function SideBar() {
  const dispatch = useDispatch();
  const isActiveSidebar = useSelector((state) => state.sidebar.isActive);
  const sidebarHeading = useSelector((state) => state.sidebar.heading);
  return (
    <div className={isActiveSidebar ? "sidebar active" : "sidebar"}>
      <div className="sidebar_heading_wrapper">
        <h4 className="sidebar_heading">{sidebarHeading}</h4>
        <div className="button_remove" onClick={() => dispatch(closeSidebar())}>
          <CiCircleRemove />
        </div>
      </div>
      <ul className="sidebar_list">
        <li className="sidebar_item">
          <div className="sidebar_content">
            <Link to="/shop" className="sidebar_img_wrapper">
              <img
                src={require("../../assests/images/products/women/4.jpg")}
                alt=""
              />
            </Link>
            <div className="sidebar_info">
              <h4 className="sidebar_item_title fs-sm ft-medium">
                Women Striped Shirt Dress
              </h4>
              <p className="sidebar_item_size">36, Red</p>
              <p className="sidebar_item_price">$129</p>
            </div>
          </div>
          <div className="button_remove">
            <CiCircleRemove />
          </div>
        </li>
        <li className="sidebar_item">
          <div className="sidebar_content">
            <Link to="/shop" className="sidebar_img_wrapper">
              <img
                src={require("../../assests/images/products/women/4.jpg")}
                alt=""
              />
            </Link>
            <div className="sidebar_info">
              <h4 className="sidebar_item_title fs-sm ft-medium">
                Women Striped Shirt Dress
              </h4>
              <p className="sidebar_item_size">36, Red</p>
              <p className="sidebar_item_price">$129</p>
            </div>
          </div>
          <div className="button_remove">
            <CiCircleRemove />
          </div>
        </li>
        <li className="sidebar_item">
          <div className="sidebar_content">
            <Link to="/shop" className="sidebar_img_wrapper">
              <img
                src={require("../../assests/images/products/women/4.jpg")}
                alt=""
              />
            </Link>
            <div className="sidebar_info">
              <h4 className="sidebar_item_title fs-sm ft-medium">
                Women Striped Shirt Dress
              </h4>
              <p className="sidebar_item_size">36, Red</p>
              <p className="sidebar_item_price">$129</p>
            </div>
          </div>
          <div className="button_remove">
            <CiCircleRemove />
          </div>
        </li>
        <li className="sidebar_item">
          <div className="sidebar_content">
            <Link to="/shop" className="sidebar_img_wrapper">
              <img
                src={require("../../assests/images/products/women/4.jpg")}
                alt=""
              />
            </Link>
            <div className="sidebar_info">
              <h4 className="sidebar_item_title fs-sm ft-medium">
                Women Striped Shirt Dress
              </h4>
              <p className="sidebar_item_size">36, Red</p>
              <p className="sidebar_item_price">$129</p>
            </div>
          </div>
          <div className="button_remove">
            <CiCircleRemove />
          </div>
        </li>
      </ul>
      <div className="sidebar_total">
        <p className="sidebar_total_heading">Subtotal</p>
        <h4 className="sidebar_total_price">$417</h4>
      </div>
      <div className="sidebar_action">
        <Button secondary widthfull className="mb-5">
          Move to cart
        </Button>
        <Button primary widthfull>
          Edit or view
        </Button>
      </div>
    </div>
  );
}

export default SideBar;
