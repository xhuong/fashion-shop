import { Col, Row } from "antd";
import { IoReload } from "react-icons/io5";
import Button from "../../components/Button";
import Product from "../../components/Product";
import "./index.scss";

const ShopProduct = () => {
  return (
    <div className="shop_product">
      <div className="container">
        <div className="shop_product_container">
          <Row gutter={[32, 32]}>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
            <Col xl={6} md={6} sm={8} xs={24}>
              <Product />
            </Col>
          </Row>
          <Row className="mt-10">
            <Col xl={24} md={24} sm={24} xs={24}>
              <Button type="primary" size="md-btn" className="ml-auto mr-auto my-0">
                Load More <IoReload />
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ShopProduct;
