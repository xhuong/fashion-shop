import { Col, Row } from "antd";
import "./index.scss";
import ProductDetailImage from "./ProductDetailImage";
import ProductDetailInformation from "./ProductDetailInformation";

const ProductDetail = () => {
  return (
    <div className="product_detail">
      <div className="container">
        <div className="product_detail_container">
          <Row gutter={[50, 50]}>
            <Col xl={12} md={12} sm={12} xs={24}>
              {/* Image product area  */}
              <ProductDetailImage />
            </Col>
            <Col xl={12} md={12} sm={12} xs={24}>
              {/* Product Information Area  */}
              <ProductDetailInformation />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
