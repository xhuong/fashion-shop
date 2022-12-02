import { AiFillStar } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { BsCartPlus, BsHeartFill } from "react-icons/bs";

import "./index.scss";
import React from "react";
import Button from "../../components/Button";

function Product(props) {
  return (
    <div className="product">
      <div className="product_img_wrapper">
        <img src={require("../../assests/images/products/women/3.jpg")} alt="" />
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
              <span className="product_reviews_count">{`(${5} Reviews)`}</span>
            </React.Fragment>
          )}
        </div>
        <h4 className="product_title">Women Striped Shirt Dress</h4>
        <span className="product_price">$99 - $129</span>
        <span className="product_sale">Sale</span>
        <span className="product_discount">- 40%</span>

        {!props.hasQuickView && (
          <ul className="product_action">
            <li className="product_action_item">
              <MdZoomOutMap />
            </li>
            <li className="product_action_item">
              <IoMdHeartEmpty />
            </li>
            <li className="product_action_item">
              <BsCartPlus />
            </li>
          </ul>
        )}
      </div>
    </div>
  );
}

export default Product;
