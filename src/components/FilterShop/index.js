import { Col, Row } from "antd";
import RangeSlider from "../RangeSlider";
import "./index.scss";
import Button from "../Button";
import ChooseColor from "../ChooseColor";
import SelectNonFormik from "../SelectNonFormik";
import { useState } from "react";
import { useGetListCategoriesQuery } from "../../services/CategoryAPI";
import { useEffect } from "react";
import { useLazyGetProductsByFilterQuery } from "../../services/ProductAPI";

const FilterShop = ({ handleSetListProduct }) => {
  const [getProductsByFilter, { data: productFilterData, isLoading, isSuccess: isSuccessFilter }] =
    useLazyGetProductsByFilterQuery({});

  const initialOptions = [
    {
      name: "Select category",
      value: 0,
    },
  ];

  const { data: categoriesList, isSuccess } = useGetListCategoriesQuery();
  const [options, setOptions] = useState(initialOptions);

  useEffect(() => {
    if (categoriesList && isSuccess) {
      let result = categoriesList.map((categoryItem) => {
        return {
          name: categoryItem.categoryName,
          value: categoryItem.id,
        };
      });
      setOptions((prevOption) => [...prevOption, ...result]);
    }
  }, [categoriesList]);

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
    {
      name: "XL",
      value: "xl",
    },
  ];

  const initialFilter = {
    categoryId: 0,
    size: "",
    color: "",
    price: 0,
  };

  const [filter, setFilter] = useState(initialFilter);
  const [isEmptyCategory, setIsEmptyCategory] = useState(false);

  const onChangeSizeSelect = (value) => {
    setFilter((prevState) => ({
      ...prevState,
      size: value,
    }));
  };

  const onChangeCategorySelect = (value) => {
    setIsEmptyCategory(false);
    setFilter((prevState) => ({
      ...prevState,
      categoryId: Number.parseInt(value),
    }));
  };

  const onChangeRangePrice = (value) => {
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
    if (filter.categoryId === 0) {
      setIsEmptyCategory(true);
    } else {
      let bodyRequest = {
        idCategory: filter.categoryId,
        size: filter.size,
        color: filter.color,
        minPrice: filter.price[0] * 1000,
        maxPrice: filter.price[1] * 1000,
      };

      getProductsByFilter(bodyRequest);
    }
  };

  useEffect(() => {
    if (productFilterData && isSuccessFilter) {
      // update list product view
      handleSetListProduct(productFilterData);
    }
  }, [productFilterData]);

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
              <SelectNonFormik name="size" options={[...sizeOptions]} onChange={onChangeSizeSelect} />
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
