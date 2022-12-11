import { Col, Row } from "antd";
import { BsCart } from "react-icons/bs";
import { CiHeart, CiLocationOn } from "react-icons/ci";
import TrackingCart from "../../components/TrackingCart";
import "./index.scss";

const TrackingOrder = ({ cartData }) => {
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
                  <li className="flex items-center p-4 gap-x-4 capitalize font-semibold bg-gray-50 text-red-500">
                    <BsCart /> My Carts
                  </li>
                  <li className="flex items-center p-4 gap-x-4 capitalize">
                    <CiHeart /> My Wishlist
                  </li>
                  <li className="flex items-center p-4 gap-x-4 capitalize">
                    <CiLocationOn /> Address
                  </li>
                </ul>
                {/* end dashboard navigation  */}
              </div>
            </Col>
            <Col xl={16} md={16} sm={24}>
              <TrackingCart cartData={cartData} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default TrackingOrder;
