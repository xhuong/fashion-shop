import { Col, Row } from "antd";
import Button from "../../components/Button";
import Product from "../../components/Product";
import Section from "../../components/Section";
import { BsArrowRight } from "react-icons/bs";

function OutTrendingProduct({ data, isLoading, isError, ...props }) {
  return (
    <Section title="Out Trending Product" subTitle="Trendy Products" gray>
      <Row gutter={[30, 30]} className="pb-12">
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
              hasQuickView
            />
          </Col>
        ))}
      </Row>
      <Row>
        <Col xl={24} md={24} sm={24} xs={24}>
          <Button type="primary" size="md-btn" className="ml-auto mr-auto my-0 ">
            Explore More <BsArrowRight />
          </Button>
        </Col>
      </Row>
    </Section>
  );
}

export default OutTrendingProduct;
