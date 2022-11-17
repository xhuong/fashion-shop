import { TfiLineDashed } from "react-icons/tfi";

import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import Product from "../Product";

function Trending() {
  const initTrends = [
    { title: "All", status: "active", id: 0 },
    { title: "Men", status: "unactive", id: 1 },
    { title: "Women", status: "unactive", id: 2 },
    { title: "Kid", status: "unactive", id: 3 },
  ];

  const [trends, setTrends] = useState(initTrends);

  const handleActive = (id) => {
    initTrends.forEach((ele, index, arr) => {
      if (id === ele.id && ele.status === "unactive") {
        arr.forEach((ele) => {
          if (ele.status === "active") {
            ele.status = "unactive";
          }
        });
        ele.status = "active";
      }
    });
    setTrends([...initTrends]);
  };

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
          {trends?.map((trendingTitle) => (
            <li
              key={trendingTitle.id}
              className={"trending_item " + trendingTitle.status}
              onClick={() => handleActive(trendingTitle.id)}
            >
              <Link to="">{trendingTitle.title}</Link>
              <div className="trending_item--line-dashed">
                <TfiLineDashed />
              </div>
            </li>
          ))}
        </ul>
        {/* End Tabs component  */}

        {/* Product list component  */}
        <Row gutter={[30, 30]}>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product hasQuickView />
          </Col>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product />
          </Col>
          <Col xl={6} md={6} sm={12} xs={12}>
            <Product />
          </Col>
        </Row>
        {/* End Product list component  */}
      </div>
    </section>
  );
}

export default Trending;
