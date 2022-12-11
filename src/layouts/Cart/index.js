import { Col, Row } from "antd";
import { useState } from "react";
import { BsCart } from "react-icons/bs";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import TrackingCart from "../../components/TrackingCart";
import TrackingOrder from "../../components/TrackingOrder";
import { GiClothes } from "react-icons/gi";
import "./index.scss";

const Cart = ({ cartData }) => {
  const [defaultView, setDefaultView] = useState("cartView");
  const defaultStyles = "flex items-center p-4 gap-x-4 capitalize bg-gray-50 hover:cursor-pointer";
  return (
    <div className="cart">
      <div className="container">
        <div className="cart_container">
          <Row gutter={[20, 20]}>
            <Col xl={8} md={8} sm={24}>
              <div className="cart_user">
                {/* information  */}
                <div className="w-full text-center mt-8 p-12 border-b border-gray-200">
                  <div className="rounded-full overflow-hidden w-36 h-36 ml-auto mr-auto mb-4">
                    <img src={require("../../assests/images/users/user.jpg")} alt="" />
                  </div>
                  <p className="font-semibold">Xuan Huong</p>
                  <span className="font-normal">Quang Binh, VN</span>
                </div>
                {/* end information  */}

                {/* dashboard navigation  */}
                <h4 className="text-center p-2 uppercase text-black bg-slate-100">Dashboard navigation</h4>
                <ul>
                  <li
                    className={`${defaultStyles} ${
                      defaultView === "cartView" ? "text-red-500 font-semibold" : undefined
                    }`}
                  >
                    <BsCart /> My Carts
                  </li>
                  <li
                    className={`${defaultStyles} ${
                      defaultView === "wishListView" ? "text-red-500 font-semibold" : undefined
                    }`}
                    onClick={() => setDefaultView("wishListView")}
                  >
                    <CiHeart /> My Wishlist
                  </li>
                  <li
                    className={`${defaultStyles} ${
                      defaultView === "myOrderView" ? "text-red-500 font-semibold" : undefined
                    }`}
                    onClick={() => setDefaultView("myOrderView")}
                  >
                    <GiClothes /> My Order
                  </li>
                  <li
                    className={`${defaultStyles} ${
                      defaultView === "myAddressView" ? "text-red-500 font-semibold" : undefined
                    }`}
                  >
                    <CiLocationOn /> Address
                  </li>
                </ul>
                {/* end dashboard navigation  */}
              </div>
            </Col>
            <Col xl={16} md={16} sm={24}>
              {defaultView === "cartView" && <TrackingCart cartData={cartData} />}
              {defaultView === "myOrderView" && <TrackingOrder />}
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default Cart;
