import { Col, Row } from "antd";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";
import Button from "../Button";
import "./index.scss";

const TrackOrder = (props) => {
  return (
    <div className="track_order">
      <div className="track_order_header">
        <div className="track_order_number_area">
          <span className="track_order_title">Order number</span>
          <span className="track_order_number">#15</span>
        </div>
        <Button type="secondary" size="sm-btn">
          Track order
        </Button>
      </div>
      <ul className="track_order_list">
        <li className="track_order_item">
          <div className="track_order_item_infor">
            <div className="track_order_item_left">
              <div className="track_order_item--img-wrapper">
                <img src={require("../../assests/images/products/women/3.jpg")} alt="" />
              </div>
              <div className="track_order_item_content">
                <h4 className="track_order_item_title">Women Striped Shirt Dress</h4>
                <p className="track_order_item_size">Size: 36, Color: Red</p>
                <span className="track_order_item_price">$129</span>
              </div>
            </div>
            <div className="track_order_item_status">
              <p>Status</p>
              <p className="text-inprogress py-1 px-3 rounded-sm capitalize">
                In Progress
              </p>
            </div>

            <div className="track_order_item_expected_date">
              <p>Expected date by:</p>
              <span>22 November 2022</span>
            </div>
          </div>
        </li>
        <li className="track_order_item">
          <div className="track_order_item_infor">
            <div className="track_order_item_left">
              <div className="track_order_item--img-wrapper">
                <img src={require("../../assests/images/products/women/3.jpg")} alt="" />
              </div>
              <div className="track_order_item_content">
                <h4 className="track_order_item_title">
                  Women Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                  architecto sint similique!
                </h4>
                <p className="track_order_item_size">Size: 36, Color: Red</p>
                <span className="track_order_item_price">$129</span>
              </div>
            </div>
            <div className="track_order_item_status">
              <p>Status</p>
              <p className="text-success py-1 px-3 rounded-sm capitalize">Completed</p>
            </div>

            <div className="track_order_item_expected_date">
              <p>Expected date by:</p>
              <span>22 November 2022</span>
            </div>
          </div>
        </li>
        <li className="track_order_item">
          <div className="track_order_item_infor">
            <div className="track_order_item_left">
              <div className="track_order_item--img-wrapper">
                <img src={require("../../assests/images/products/women/3.jpg")} alt="" />
              </div>
              <div className="track_order_item_content">
                <h4 className="track_order_item_title">
                  Women Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                  architecto sint similique!
                </h4>
                <p className="track_order_item_size">Size: 36, Color: Red</p>
                <span className="track_order_item_price">$129</span>
              </div>
            </div>
            <div className="track_order_item_status">
              <p>Status</p>
              <p className="text-success py-1 px-3 rounded-sm capitalize">Completed</p>
            </div>

            <div className="track_order_item_expected_date">
              <p>Expected date by:</p>
              <span>22 November 2022</span>
            </div>
          </div>
        </li>
        <li className="track_order_item">
          <div className="track_order_item_infor">
            <div className="track_order_item_left">
              <div className="track_order_item--img-wrapper">
                <img src={require("../../assests/images/products/women/3.jpg")} alt="" />
              </div>
              <div className="track_order_item_content">
                <h4 className="track_order_item_title">
                  Women Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
                  architecto sint similique!
                </h4>
                <p className="track_order_item_size">Size: 36, Color: Red</p>
                <span className="track_order_item_price">$129</span>
              </div>
            </div>
            <div className="track_order_item_status">
              <p>Status</p>
              <p className="text-success py-1 px-3 rounded-sm capitalize">Completed</p>
            </div>

            <div className="track_order_item_expected_date">
              <p>Expected date by:</p>
              <span>22 November 2022</span>
            </div>
          </div>
        </li>
      </ul>
      <div className="track_order_total text-right flex items-center justify-between">
        <Button type="secondary" size="sm-btn">
          <MdOutlineRemoveShoppingCart /> Cancel order
        </Button>
        <span className="font-semibold">Total: $450</span>
      </div>
    </div>
  );
};

export default TrackOrder;
