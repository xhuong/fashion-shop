import { AiFillStar } from "react-icons/ai";
import { MdZoomOutMap } from "react-icons/md";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsCartPlus, BsHeartFill } from "react-icons/bs";

import "./index.scss";
import React from "react";

function Product(props) {
  return (
    <div className="product">
      <div className="product_img_wrapper">
        <img
          src={require("../../assests/images/products/women/2.png")}
          alt=""
        />
      </div>
      <div className="product_content">
        <div className="product_reviews">
          {props.hasQuickView ? (
            <React.Fragment>
              <div className="product_select_color">
                <span className="product_option active"></span>
                <span className="product_option"></span>
                <span className="product_option"></span>
                <span className="product_option"></span>
              </div>
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
        {props.hasQuickView === false && (
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