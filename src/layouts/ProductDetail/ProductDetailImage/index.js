import { Col, Row } from "antd";
import { useState } from "react";
import "./index.scss";

const ProductDetailImage = ({ productImages }) => {
  console.log("productImages", productImages);
  // required count of images = 6
  const initImageList = [
    {
      imageLink: require(`../../../assests/images/products/${productImages}`),
      status: "active",
    },
    {
      imageLink: require(`../../../assests/images/products/${productImages}`),
      status: "unactive",
    },
    {
      imageLink: require(`../../../assests/images/products/${productImages}`),
      status: "unactive",
    },
    {
      imageLink: require(`../../../assests/images/products/${productImages}`),
      status: "unactive",
    },
    {
      imageLink: require(`../../../assests/images/products/${productImages}`),
      status: "unactive",
    },
    {
      imageLink: require(`../../../assests/images/products/${productImages}`),
      status: "unactive",
    },
  ];

  const [imageList, setImageList] = useState(initImageList);

  return (
    <div className="product_detail_image">
      <Row className="mb-5 product_detail_image_wrapper">
        <Col xl={24}>
          <img src={require(`../../../assests/images/products/${productImages}`)} alt="" />
        </Col>
      </Row>
      <Row gutter={[5]}>
        {imageList.map((imageItem, index) => {
          return (
            <Col xl={4} key={index}>
              <div className={`product_detail_image_item ${imageItem.status}`}>
                <img src={imageItem.imageLink} alt="" />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductDetailImage;
