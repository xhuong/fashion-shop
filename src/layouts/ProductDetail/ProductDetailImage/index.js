import { Col, Row } from "antd";
import "./index.scss";

const ProductDetailImage = () => {
  // required count of images = 6
  const listImages = [
    {
      imageLink: require("../../../assests/images/products/women/2.png"),
      status: "active",
    },
    {
      imageLink: require("../../../assests/images/products/women/2.png"),
      status: "unactive",
    },
    {
      imageLink: require("../../../assests/images/products/women/2.png"),
      status: "unactive",
    },
    {
      imageLink: require("../../../assests/images/products/women/2.png"),
      status: "unactive",
    },
    {
      imageLink: require("../../../assests/images/products/women/2.png"),
      status: "unactive",
    },
    {
      imageLink: require("../../../assests/images/products/women/2.png"),
      status: "unactive",
    },
  ];

  return (
    <div className="product_detail_image">
      <Row className="mb-5 product_detail_image_wrapper">
        <Col xl={24}>
          <img src={require("../../../assests/images/products/women/2.png")} alt="" />
        </Col>
      </Row>
      <Row gutter={[5]}>
        {listImages.map((itemImage) => {
          console.log(itemImage.imageLink);
          return (
            <Col xl={4}>
              <div className={`product_detail_image_item ${itemImage.status}`}>
                <img src={itemImage.imageLink} alt="" />
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ProductDetailImage;
