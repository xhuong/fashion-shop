import { Col, Row } from "antd";
import "./index.scss";
import ProductDetailImage from "./ProductDetailImage";
import ProductDetailInformation from "./ProductDetailInformation";

const ProductDetail = ({ productData }) => {
  const data = productData[0];
  return (
    <div className="product_detail">
      <div className="container">
        <div className="product_detail_container">
          <Row gutter={[50, 50]}>
            <Col xl={12} md={12} sm={12} xs={24}>
              {/* Image product area  */}
              <ProductDetailImage productImages={data?.productImages} />
            </Col>
            <Col xl={12} md={12} sm={12} xs={24}>
              {/* Product Information Area  */}
              <ProductDetailInformation
                id={data?.id}
                nameOfProduct={data?.nameOfProduct}
                priceOfProduct={data?.priceOfProduct}
                productDescription={data?.productDescription}
                countOfProduct={data?.countOfProduct}
                starOfProduct={data?.starOfProduct}
                productImages={data?.productImages}
                countOfReviewer={data?.countOfReviewer}
                size={data?.size}
                color={data?.color}
                idCategory={data?.idCategory}
              />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
