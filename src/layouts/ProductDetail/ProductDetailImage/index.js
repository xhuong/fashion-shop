import { Col, Row } from "antd";
import "./index.scss";

const ProductDetailImage = () => {
  return (
    <div className="product_detail_image">
      <Row className="mb-5 product_detail_image_wrapper">
        <Col xl={24}>
          <img src={require("../../../assests/images/products/women/2.png")} alt="" />
        </Col>
      </Row>
      <Row gutter={[5]}>
        <Col xl={4}>
          <div className="product_detail_image_item active">
            <img src={require("../../../assests/images/products/women/2.png")} alt="" />
          </div>
        </Col>
        <Col xl={4}>
          <div className="product_detail_image_item">
            <img src={require("../../../assests/images/products/women/2.png")} alt="" />
          </div>
        </Col>
        <Col xl={4}>
          <div className="product_detail_image_item">
            <img src={require("../../../assests/images/products/women/2.png")} alt="" />
          </div>
        </Col>
        <Col xl={4}>
          <div className="product_detail_image_item">
            <img src={require("../../../assests/images/products/women/2.png")} alt="" />
          </div>
        </Col>
        <Col xl={4}>
          <div className="product_detail_image_item">
            <img src={require("../../../assests/images/products/women/2.png")} alt="" />
          </div>
        </Col>
        <Col xl={4}>
          <div className="product_detail_image_item">
            <img src={require("../../../assests/images/products/women/2.png")} alt="" />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ProductDetailImage;
