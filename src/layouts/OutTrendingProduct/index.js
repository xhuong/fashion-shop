import { Col, Row } from "antd";
import Product from "../../components/Product";
import Section from "../../components/Section";

function OutTrendingProduct() {
  return (
    <Section title="Out Trending Product" gray>
      <Row gutter={[30, 30]}>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
        <Col xl={6} md={6} sm={12} xs={12}>
          <Product hasQuickView />
        </Col>
      </Row>
    </Section>
  );
}

export default OutTrendingProduct;
