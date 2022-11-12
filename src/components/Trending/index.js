import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

function Trending() {
  return (
    <section className="section">
      <div className="container">
        <h3 className="section_heading">Trending Categories</h3>
        <Row justify={"center"}>
          <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
            <Link to="">
              <div className="trending">
                <img
                  src={require("../../assests/images/trendings/fashion.png")}
                  alt=""
                />
              </div>
              <p className="trending_name">Men's Wear</p>
            </Link>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
            <Link to="">
              <div className="trending">
                <img
                  src={require("../../assests/images/trendings/tshirt.png")}
                  alt=""
                />
              </div>
              <p className="trending_name">Kid's Wear</p>
            </Link>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
            <Link to="">
              <div className="trending">
                <img
                  src={require("../../assests/images/trendings/accessories.png")}
                  alt=""
                />
              </div>
              <p className="trending_name">Accessories</p>
            </Link>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
            <Link to="">
              <div className="trending">
                <img
                  src={require("../../assests/images/trendings/pant.png")}
                  alt=""
                />
              </div>
              <p className="trending_name">Men's Shoes</p>
            </Link>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
            <Link to="">
              <div className="trending">
                <img
                  src={require("../../assests/images/trendings/television.png")}
                  alt=""
                />
              </div>
              <p className="trending_name">Television</p>
            </Link>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
            <Link to="">
              <div className="trending">
                <img
                  src={require("../../assests/images/trendings/pant.png")}
                  alt=""
                />
              </div>
              <p className="trending_name">Men's Pants</p>
            </Link>
          </Col>
        </Row>
      </div>
    </section>
  );
}

export default Trending;
