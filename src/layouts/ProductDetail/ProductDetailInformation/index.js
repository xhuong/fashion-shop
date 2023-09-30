import { BsHeart } from "react-icons/bs";
import ChooseColor from "../../../components/ChooseColor";
import Button from "../../../components/Button";
import "./index.scss";
import { Col, Row } from "antd";
import { IoCart } from "react-icons/io5";
import { useState } from "react";
import Message from "../../../components/Message";
import Rate from "../../../components/Rate";
import { useDispatch } from "react-redux";
import { addProductsToCart, addProductsToWishList } from "../../../redux/slices/cartSlice";
import ModalNotifycation from "../../../components/ModalNotification";

const ProductDetailInformation = ({
  id,
  color,
  countOfProduct,
  countOfReviewer,
  nameOfProduct,
  priceOfProduct,
  productDescription,
  productImages,
  size,
  starOfProduct,
  idCategory,
}) => {
  const [message, setMessage] = useState("");
  const [number, setNumber] = useState(1);
  const [isSelectedColor, setIsSelectedColor] = useState(false);
  const dispatch = useDispatch();

  const onChangeColor = (value) => {
    if (value !== color && value !== undefined) {
      setMessage("notMatchedColor");
      setIsSelectedColor(true);
    } else if (value === color && color !== undefined) {
      setIsSelectedColor(true);
      setMessage("matchedColor");
    }
  };

  const getCategoryName = (idCategory) => {
    switch (idCategory) {
      case 1:
        return "Men";
      case 2:
        return "Women";
      case 3:
        return "Kids";
      case 4:
        return "Speakers";
      case 5:
        return "Accessories";
      default:
        return "Unknow category";
    }
  };

  const handleAddToCart = () => {
    if (!isSelectedColor) {
      setMessage("requireSelectColor");
    } else if (isSelectedColor && message === "matchedColor") {
      const product = {
        id,
        color,
        countOfProduct,
        countOfReviewer,
        nameOfProduct,
        priceOfProduct,
        productDescription,
        productImages,
        size,
        starOfProduct,
        idCategory,
        count: Number.parseInt(number),
      };

      dispatch(addProductsToCart(product));
      ModalNotifycation({ title: "Add product to cart success." });
    }
  };

  const handleAddToWishList = () => {
    const product = {
      id,
      color,
      countOfProduct,
      countOfReviewer,
      nameOfProduct,
      priceOfProduct,
      productDescription,
      productImages,
      size,
      starOfProduct,
      idCategory,
      count: Number.parseInt(number),
    };
    dispatch(addProductsToWishList(product));
    ModalNotifycation({ title: "Add product to wish list success." });
  }

  return (
    <div className="product_detail_information">
      <p className="text-success d-inline-block pt-1 pb-1 px-4 rounded-sm">{getCategoryName(idCategory)}</p>
      <h2 className="font-semibold mb-1 text-5xl my-4">{nameOfProduct}</h2>
      <div className="flex items-center">
        <Rate defaultValue={0} disabled={true} value={starOfProduct} />
        <span className="product_detail_information_reviews_count ml-2">{`(${countOfReviewer} Reviews)`}</span>
      </div>
      <div className="my-6">
        <span className="old_price font-semibold line-through">580.000 VNĐ</span>
        <span className="new_price font-semibold ml-4">{new Intl.NumberFormat("en-DE").format(priceOfProduct)}</span>
        <span className="in_stock text-white bg-green-400 px-6 py-1 rounded-md ml-4">In Stock</span>
        <p className="my-6 text-gray-400 font-light product_detail_information_detail">{productDescription}</p>
        <p className="font-semibold my-6">Color: </p>
        <ChooseColor name="color" onChange={(e) => onChangeColor(e)} />
        {message === "notMatchedColor" && (
          <Message className="message warning mt-4">Sorry, product dont have this color.</Message>
        )}
        {message === "requireSelectColor" && (
          <Message className="message warning mt-4">
            Please select color before you can add product to cart or wishlist.
          </Message>
        )}
        <p className="font-semibold my-6">Size: {size}</p>
        <Row gutter={[10]}>
          <Col span={6}>
            <select
              className="product_detail_information_select text-center"
              onChange={(e) => setNumber(e.target.value)}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>
          </Col>

          <Col span={12}>
            <Button type="secondary" size="full-btn" onClick={handleAddToCart}>
              <IoCart /> Add to cart
            </Button>
          </Col>

          <Col span={6}>
            <Button type="primary" size="full-btn" onClick={handleAddToWishList}>
              <BsHeart /> wishlist
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDetailInformation;
