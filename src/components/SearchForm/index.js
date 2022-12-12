import { Form, Formik } from "formik";
import Button from "../Button";
import * as Yup from "yup";
import Input from "../Input";
import Select from "../Select";
import { useGetListCategoriesQuery } from "../../services/CategoryAPI";
import { useEffect } from "react";
import { useState } from "react";

const SearchForm = ({ onSubmit }) => {
  const [options, setOptions] = useState([
    {
      name: "Select category",
      value: 0,
    },
  ]);
  const { data, isError, isSuccess } = useGetListCategoriesQuery();

  useEffect(() => {
    if (data?.length > 0 && isSuccess) {
      const newOptions = [...options];
      data.map((option) => {
        const optionObj = {
          name: option.categoryName,
          value: option.id,
        };
        newOptions.push(optionObj);
      });
      setOptions(newOptions);
    }
  }, [data]);

  const initialValues = {
    searchKeyWord: "",
    idCategory: 0,
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values, action) => {
        const result = { ...values, idCategory: Number.parseInt(values.idCategory) };
        onSubmit(result);
      }}
      validationSchema={Yup.object({
        searchKeyWord: Yup.string().min(3, "Must be 3 characters or more").required("Required"),
        idCategory: Yup.number()
          .oneOf([1, 2, 3, 4, 5], "Invalid category name, choose again sir!")
          .required("Required"),
      })}
    >
      <Form>
        <Input type="text" name="searchKeyWord" placeholder="Product keyword..." />
        <Select name="idCategory" options={[...options]} />
        <Button className="mb-5" type="secondary" htmlType="submit" size="full-btn">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
