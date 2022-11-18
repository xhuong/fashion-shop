import { Col, Row } from "antd";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";
import {
  RiInstagramFill,
  RiFacebookFill,
  RiTwitterFill,
  RiLinkedinBoxFill,
  RiYoutubeFill,
} from "react-icons/ri";

import "./index.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_container">
          <Row gutter={[40, 40]}>
            <Col xl={6} md={6} sm={24} xs={24}>
              <div className="footer_logo_wrapper">
                <img
                  src={require("../../assests/images/logo-light.png")}
                  alt=""
                />
              </div>
              <p className="footer_text">
                3298 Grant Street Longview, TX United Kingdom 75601
              </p>
              <p className="footer_text">1-202-555-0106</p>
              <p className="footer_text">help@shopper.com</p>
              <ul className="footer_socials mt-3">
                <li className="footer_social">
                  <Link to="">
                    <RiFacebookFill />
                  </Link>
                </li>
                <li className="footer_social">
                  <Link to="">
                    <RiTwitterFill />
                  </Link>
                </li>
                <li className="footer_social">
                  <Link to="">
                    <RiLinkedinBoxFill />
                  </Link>
                </li>
                <li className="footer_social">
                  <Link to="">
                    <RiYoutubeFill />
                  </Link>
                </li>
                <li className="footer_social">
                  <Link to="">
                    <RiInstagramFill />
                  </Link>
                </li>
              </ul>
            </Col>
            <Col xl={12} md={12} sm={24} xs={24}>
              <Row>
                <Col xl={8} md={8} sm={24} xs={24}>
                  <h4 className="footer_title">Supports</h4>
                  <ul className="footer_list">
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Contact us
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        About page
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Size guide
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Shipping
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        FAQ's page
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Privacy
                      </Link>
                    </li>
                  </ul>
                </Col>

                <Col xl={8} md={8} sm={24} xs={24}>
                  <h4 className="footer_title">Shop</h4>
                  <ul className="footer_list">
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Men's shopping
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Women's shopping
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Kid's shopping
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Furniture
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Discount
                      </Link>
                    </li>
                  </ul>
                </Col>

                <Col xl={8} md={8} sm={24} xs={24}>
                  <h4 className="footer_title">Company</h4>
                  <ul className="footer_list">
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        About
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Blog
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Affiliate
                      </Link>
                    </li>
                    <li className="footer_item">
                      <Link to="" className="footer_text">
                        Login
                      </Link>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
            <Col xl={6} md={6} sm={24} xs={24}>
              <h4 className="footer_title">Subscribe</h4>
              <p className="footer_text normal">
                Receive updates, hot deals, discounts sent straignt in your
                inbox daily
              </p>
              <form className="footer_input_wrapper rounded overflow-hidden">
                <input type="email" name="" id="" placeholder="Email Address" />
                <button className="footer_button">
                  <BsArrowRight />
                </button>
              </form>
              <div className="footer_payment">
                <h6 className="footer_payment_title">Secure payments</h6>
                <img
                  src={require("../../assests/images/payments/card.png")}
                  alt=""
                />
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Footer;
