import { TfiLineDashed } from "react-icons/tfi";

import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";
import { useState } from "react";
import Product from "../../components/Product";
import Section from "../../components/Section";

function Trending({ data, isLoading, isError }) {
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
    <Section title="Trending Categories" subTitle="Popular Categories">
      <Row justify={"center"} className="pb-20">
        <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
          <Link to="">
            <div className="trending">
              <img src={require("../../assests/images/trendings/fashion.png")} alt="" />
            </div>
            <p className="trending_name">Men's Wear</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
          <Link to="">
            <div className="trending">
              <img src={require("../../assests/images/trendings/tshirt.png")} alt="" />
            </div>
            <p className="trending_name">Kid's Wear</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
          <Link to="">
            <div className="trending">
              <img src={require("../../assests/images/trendings/accessories.png")} alt="" />
            </div>
            <p className="trending_name">Accessories</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
          <Link to="">
            <div className="trending">
              <img src={require("../../assests/images/trendings/pant.png")} alt="" />
            </div>
            <p className="trending_name">Men's Shoes</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
          <Link to="">
            <div className="trending">
              <img src={require("../../assests/images/trendings/television.png")} alt="" />
            </div>
            <p className="trending_name">Television</p>
          </Link>
        </Col>
        <Col xl={4} lg={6} md={6} sm={12} xs={8} align={"center"}>
          <Link to="">
            <div className="trending">
              <img src={require("../../assests/images/trendings/pant.png")} alt="" />
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
        {data?.map((product, index) => (
          <Col xl={6} md={6} sm={12} xs={12} key={index}>
            <Product
              id={product.id}
              nameOfProduct={product.nameOfProduct}
              priceOfProduct={product.priceOfProduct}
              productDescription={product.productDescription}
              countOfProduct={product.countOfProduct}
              starOfProduct={product.starOfProduct}
              productImages={product.productImages}
              countOfReviewer={product.countOfReviewer}
              size={product.size}
              color={product.color}
              idCategory={product.idCategory}
            />
          </Col>
        ))}
      </Row>
      {/* End Product list component  */}
    </Section>
  );
}

export default Trending;
