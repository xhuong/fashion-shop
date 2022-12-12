import { Col, Row } from "antd";
import React from "react";
import Message from "../Message";
import Product from "../Product";

const SearchFormResult = ({ data, isLoading }) => {
  return (
    <React.Fragment>
      {isLoading && (
        <Row>
          <Col xl={24} md={24} sm={24} xs={24}>
            <Message className="message infor">Loading...</Message>
          </Col>
        </Row>
      )}
      <Row gutter={[5, 5]}>
        {data?.map((product) => (
          <Col xl={12} md={12} sm={24} xs={24}>
            <Product
              id={product?.id}
              color={product?.color}
              countOfProduct={product?.countOfProduct}
              countOfReviewer={product?.countOfReviewer}
              nameOfProduct={product?.nameOfProduct}
              priceOfProduct={product?.priceOfProduct}
              productDescription={product?.productDescription}
              productImages={product?.productImages}
              size={product?.size}
              starOfProduct={product?.starOfProduct}
              idCategory={product?.idCategory}
            />
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default SearchFormResult;
