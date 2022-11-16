import { TfiLineDashed } from "react-icons/tfi";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

function Trending() {
  const trendingTitles = [
    { title: "All", status: "active", id: "0" },
    { title: "Men", status: "unactive", id: "1" },
    { title: "Women", status: "unactive", id: "2" },
    { title: "Kid", status: "unactive", id: "3" },
  ];

  return (
    <section className="section">
      <div className="container">
        <h3 className="section_heading">Trending Categories</h3>
        <Row justify={"center"} className="pb-20">
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

        {/* Tabs Component  */}
        <ul className="trending_list">
          <li className="trending_item active">
            <Link to="">Men</Link>
            <div className="trending_item--line-dashed">
              <TfiLineDashed />
            </div>
          </li>
          <li className="trending_item">
            <Link to="">Men</Link>
            <div className="trending_item--line-dashed">
              <TfiLineDashed />
            </div>
          </li>
          <li className="trending_item">
            <Link to="">Men</Link>
            <div className="trending_item--line-dashed">
              <TfiLineDashed />
            </div>
          </li>
          <li className="trending_item">
            <Link to="">Men</Link>
            <div className="trending_item--line-dashed">
              <TfiLineDashed />
            </div>
          </li>
        </ul>
        {/* End Tabs component  */}
      </div>
    </section>
  );
}

export default Trending;
