import { Col, Row } from "antd";
import RangeSlider from "../RangeSlider";
import "./index.scss";
import Button from "../Button";
import ChooseColor from "../ChooseColor";
import SelectNonFormik from "../SelectNonFormik";
import { useState } from "react";

const FilterShop = () => {
  const options = [
    {
      name: "Select category",
      value: "",
    },
    {
      name: "women",
      value: "women",
    },
    {
      name: "men",
      value: "men",
    },
    {
      name: "kids",
      value: "kids",
    },
  ];

  const sizeOptions = [
    {
      name: "Choose size",
      value: "",
    },
    {
      name: "S",
      value: "s",
    },
    {
      name: "M",
      value: "m",
    },
    {
      name: "L",
      value: "l",
    },
  ];

  const initialFilter = {
    category: "",
    size: "",
    color: "",
    price: 0,
  };

  const [filter, setFilter] = useState(initialFilter);

  const [isEmptyCategory, setIsEmptyCategory] = useState(false);

  const onChangeSizeSelect = (value) => {
    console.log("size: ", value);
    setFilter((prevState) => ({
      ...prevState,
      size: value,
    }));
  };

  const onChangeCategorySelect = (value) => {
    setIsEmptyCategory(false);
    setFilter((prevState) => ({
      ...prevState,
      category: value,
    }));
  };

  const onChangeRangePrice = (value) => {
    console.log("price: ", value);
    setFilter((prevState) => ({
      ...prevState,
      price: value,
    }));
  };

  const onChangeColor = (value) => {
    // if user dont choose color => set color = ""
    if (value === undefined) {
      setFilter((prevState) => ({
        ...prevState,
        color: "",
      }));
    } else {
      setFilter((prevState) => ({
        ...prevState,
        color: value,
      }));
    }
  };

  const handleSubmitFilter = () => {
    if (filter.category === "") {
      setIsEmptyCategory(true);
    } else {
      console.log("filter...", JSON.stringify(filter, null, 2));
    }
  };

  return (
    <div className="shop_filter">
      <div className="container">
        <div className="shop_filter_container">
          <Row gutter={[32, 32]}>
            <Col xl={6} md={6} sm={12} xs={24}>
              <h3>Choose Categories</h3>
              <SelectNonFormik
                name="category"
                options={[...options]}
                isEmpty={isEmptyCategory}
                onChange={onChangeCategorySelect}
              />
            </Col>
            <Col xl={6} md={6} sm={12} xs={24}>
              <h3>Choose Size</h3>
              <SelectNonFormik
                name="size"
                options={[...sizeOptions]}
                onChange={onChangeSizeSelect}
              />
            </Col>
            <Col xl={6} md={6} sm={12} xs={24}>
              <h3>Choose Colors</h3>
              <ChooseColor name="color" onChange={onChangeColor} />
            </Col>
            <Col xl={6} md={6} sm={12} xs={24}>
              <h3>Filter By Price {"(K vnd)"}</h3>
              <RangeSlider onChange={onChangeRangePrice} />
            </Col>
          </Row>

          <Row className="mt-5">
            <Col xl={24} md={24} sm={24} xs={12}>
              <Button
                type="secondary"
                htmlType="submit"
                size="sm-btn"
                className="ml-auto rounded-md"
                onClick={handleSubmitFilter}
              >
                Apply
              </Button>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default FilterShop;
