import { Col, Row } from "antd";
import Button from "../../components/Button";
import Product from "../../components/Product";
import Section from "../../components/Section";
import { BsArrowRight } from "react-icons/bs";

function OutTrendingProduct() {
  return (
    <Section title="Out Trending Product" gray>
      <Row gutter={[30, 30]} className="pb-12">
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
      <Row>
        <Col xl={24} md={24} sm={24} xs={24}>
          <Button primary mdButton className="ml-auto mr-auto my-0">
            Explore More <BsArrowRight />
          </Button>
        </Col>
      </Row>
    </Section>
  );
}

export default OutTrendingProduct;
