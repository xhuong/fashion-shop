import { AiFillStar } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { BsCartPlus, BsHeartFill } from "react-icons/bs";
import "./index.scss";
import React from "react";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import ModalNotifycation from "../ModalNotification";
import { useDispatch } from "react-redux";
import { addProductsToCart, addProductsToWishList } from "../../redux/slices/cartSlice";
import { formatPrice } from "../../Utils/Commons";

function Product({
  id,
  name,
  price,
  description,
  countProduct,
  star,
  imgSrc,
  countReview,
  size,
  color,
  idCategory,
  ...props
}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div
      className="product"
      onClick={(e) => {
        e.stopPropagation();
        navigate("/products/1");
      }}
    >
      <div className="product_img_wrapper">
        <img src={require(`../../assests/images/products/${imgSrc}`)} alt="" />
        {props.hasQuickView && (
          <div className="product_button_wrapper">
            <Button type="secondary" size="full-btn">
              <FaEye /> QuickView
            </Button>
          </div>
        )}
      </div>

      <div className="product_content">
        <div className="product_reviews">
          {props.hasQuickView ? (
            <React.Fragment>
              <ul className="product_select_color">
                <li className="product_option active">
                  <span></span>
                </li>
                <li className="product_option">
                  <span></span>
                </li>
                <li className="product_option">
                  <span></span>
                </li>
                <li className="product_option">
                  <span></span>
                </li>
              </ul>
              <div className="product_favorite active">
                <BsHeartFill />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <span className="product_star">
                <AiFillStar style={{ color: "#ff9800" }} />
                <AiFillStar style={{ color: "#ff9800" }} />
                <AiFillStar style={{ color: "#ff9800" }} />
                <AiFillStar style={{ color: "#ff9800" }} />
                <AiFillStar />
              </span>
              <span className="product_reviews_count">{`(${countReview} Reviews)`}</span>
            </React.Fragment>
          )}
        </div>
        <h4 className="product_title">{name}</h4>
        <span className="product_price">{formatPrice(price)} VNĐ</span>
        <span className="product_sale">Sale</span>
        <span className="product_discount">- 40%</span>

        {!props.hasQuickView && (
          <ul className="product_action">
            <li className="product_action_item">
              <MdZoomOutMap />
            </li>
            <li
              className="product_action_item"
              onClick={(e) => {
                e.stopPropagation();
                const product = {
                  id,
                  name,
                  price,
                  description,
                  countProduct,
                  star,
                  imgSrc,
                  countReview,
                  size,
                  color,
                  idCategory,
                  count: 1,
                };
                dispatch(addProductsToWishList(product));
                ModalNotifycation({
                  title: "Product has been added to wishlist.",
                });
              }}
            >
              <IoMdHeartEmpty />
            </li>
            <li
              className="product_action_item"
              onClick={(e) => {
                e.stopPropagation();
                const product = {
                  id,
                  name,
                  price,
                  description,
                  countProduct,
                  star,
                  imgSrc,
                  countReview,
                  size,
                  color,
                  idCategory,
                  count: 1,
                };
                dispatch(addProductsToCart(product));
                ModalNotifycation({
                  title: "Product has been added to cart !",
                });
              }}
            >
              <BsCartPlus />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Product;
