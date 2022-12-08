import { AiFillStar } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import ChooseColor from "../../../components/ChooseColor";
import Button from "../../../components/Button";
import "./index.scss";
import { Col, Row } from "antd";
import { IoCart } from "react-icons/io5";

const ProductDetailInformation = () => {
  const onChangeColor = (value) => {
    // if user dont choose color => set color = ""
    if (value === undefined) {
      value = "";
    }
  };

  return (
    <div className="product_detail_information">
      <p className="text-success d-inline-block pt-1 pb-1 px-4 rounded-sm">Women's suit</p>
      <h2 className="font-semibold mb-1 text-5xl my-4">Women Striped Shirt Dress</h2>
      <div className="flex items-center">
        <span className="product_detail_information_star">
          <AiFillStar style={{ color: "#ff9800" }} />
          <AiFillStar style={{ color: "#ff9800" }} />
          <AiFillStar style={{ color: "#ff9800" }} />
          <AiFillStar style={{ color: "#ff9800" }} />
          <AiFillStar />
        </span>
        <span className="product_detail_information_reviews_count ml-2">{`(${5} Reviews)`}</span>
      </div>
      <div className="my-6">
        <span className="old_price font-semibold line-through">$199</span>
        <span className="new_price font-semibold ml-4">$110</span>
        <span className="in_stock text-white bg-green-400 px-6 py-1 rounded-md ml-4">In Stock</span>
        <p className="my-6 text-gray-400 font-light product_detail_information_detail">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus animi iste odit eum error dicta et
          tempore, repellendus laboriosam facilis maxime. Porro, optio blanditiis. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Tempore saepe explicabo molestiae?
        </p>
        <p className="font-semibold my-6">Color:</p>
        <ChooseColor name="color" onChange={onChangeColor} />
        <p className="font-semibold my-6">Size:</p>
        {/* <ChooseSize /> */}

        <Row gutter={[10]}>
          <Col span={6}>
            <select name="" id="" className="product_detail_information_select">
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </Col>

          <Col span={12}>
            <Button type="secondary" size="full-btn">
              <IoCart /> Add to cart
            </Button>
          </Col>

          <Col span={6}>
            <Button type="primary" size="full-btn">
              <BsHeart /> wishlist
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetailInformation;
