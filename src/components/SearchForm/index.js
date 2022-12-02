import { Form, Formik } from "formik";
import Button from "../Button";
import * as Yup from "yup";
import Input from "../Input";
import Select from "../Select";

const SearchForm = () => {
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
  const initialValues = {
    searchKeyWord: "",
    jobType: "",
  };

  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values, action) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={Yup.object({
        searchKeyWord: Yup.string()
          .min(3, "Must be 3 characters or more")
          .required("Required"),
        jobType: Yup.string()
          .oneOf(["men", "women", "kids"], "Invalid category name, choose again sir!")
          .required("Required"),
      })}
    >
      <Form>
        <Input type="text" name="searchKeyWord" placeholder="Product keyword..." />
        <Select name="jobType" options={[...options]} />
        <Button className="mb-5" type="secondary" htmlType="submit" size="full-btn">
          Submit
        </Button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
