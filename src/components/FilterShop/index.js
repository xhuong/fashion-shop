import { Col, Row } from "antd";
import { Formik, Form } from "formik";
import RangeSlider from "../RangeSlider";
import * as Yup from "yup";
import "./index.scss";
import Button from "../Button";
import Select from "../Select";
import ChooseColor from "../ChooseColor";

const FilterShop = () => {
  const options = [
    {
      name: "Select category",
      value: "select category",
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
      value: "choose size",
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

  const initialValues = {
    category: "",
    size: "",
    // color: "",
    // minPrice: 0,
    // maxPrice: 0,
  };
  return (
    <div className="shop_filter">
      <div className="container">
        <div className="shop_filter_container">
          <Formik
            initialValues={{ ...initialValues }}
            validationSchema={Yup.object({
              category: Yup.string()
                .oneOf(
                  ["men", "women", "kids"],
                  "Invalid category, please choose again !"
                )
                .required("Required"),
              size: Yup.string()
                .oneOf(["s", "m", "l"], "Invalid size, please choose again !")
                .required("Required"),
              //   color: Yup.string(),
              //   minPrice: Yup.number(),
              //   maxPrice: Yup.number(),
            })}
            onSubmit={(values, action) => {
              alert(JSON.stringify(values, null, 2));
            }}
          >
            <Form>
              <Row gutter={[32, 32]}>
                <Col xl={6} md={6} sm={12} xs={24}>
                  <h3>Choose Categories</h3>
                  <Select name="category" options={[...options]} />
                </Col>
                <Col xl={6} md={6} sm={12} xs={24}>
                  <h3>Choose Size</h3>
                  <Select name="size" options={[...sizeOptions]} />
                </Col>
                <Col xl={6} md={6} sm={12} xs={24}>
                  <h3>Choose Colors</h3>
                  <ChooseColor />
                </Col>
                <Col xl={6} md={6} sm={12} xs={24}>
                  <h3>Filter By Price {"(K vnd)"}</h3>
                  <RangeSlider />
                </Col>
              </Row>

              <Row className="mt-5">
                <Col xl={24} md={24} sm={24} xs={12}>
                  <Button
                    type="secondary"
                    htmlType="submit"
                    size="sm-btn"
                    className="ml-auto rounded-md"
                  >
                    Apply
                  </Button>
                </Col>
              </Row>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default FilterShop;
