import { Col, Row } from "antd";
import { IoReload } from "react-icons/io5";
import Button from "../../components/Button";
import Product from "../../components/Product";
import Message from "../../components/Message";
import "./index.scss";

const ShopProduct = ({ data, isLoading, isError }) => {
  return (
    <div className="shop_product">
      <div className="container">
        <div className="shop_product_container">
          <Row gutter={[32, 32]} justify="center">
            {isLoading && (
              <Col xl={8} md={8} sm={8} xs={24}>
                <Message className="message infor">Data is loading...</Message>
              </Col>
            )}
            {isError && (
              <Col xl={8} md={8} sm={8} xs={24}>
                <Message className="danger">Oops, some error when loading data !</Message>
              </Col>
            )}
            {data?.map((product, index) => (
              <Col xl={6} md={6} sm={8} xs={24} key={index}>
                <Product
                  id={product.id}
                  name={product.nameOfProduct}
                  price={product.priceOfProduct}
                  description={product.productDescription}
                  countProduct={product.countOfProduct}
                  star={product.starOfProduct}
                  imgSrc={product.productImages}
                  countReview={product.countOfReviewer}
                  size={product.size}
                  color={product.color}
                  idCategory={product.idCategory}
                />
              </Col>
            ))}
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
