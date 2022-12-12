import { Col, Row } from "antd";
import { useEffect, useState } from "react";
import "./index.scss";

const ProductDetailImage = ({ productImages }) => {
  const [imageList, setImageList] = useState([]);
  useEffect(() => {
    if (productImages !== undefined) {
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

      setImageList(initImageList);
    }
  }, [productImages]);

  return (
    <div className="product_detail_image">
      <Row className="mb-5 product_detail_image_wrapper">
        <Col xl={24}>
          <img src={imageList[0]?.imageLink} alt="" />
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
