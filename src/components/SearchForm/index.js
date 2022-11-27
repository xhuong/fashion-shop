import { connect, Form, Formik } from "formik";
import Button from "../Button";
import * as yup from "yup";
import Message from "../Message";
import MyTextField from "../MyTextField";
import MySelectField from "../MySelectField";

function SearchForm() {
  const initialValues = {
    searchKeyWord: "",
  };
  return (
    <Formik
      initialValues={{ ...initialValues }}
      onSubmit={(values, action) => {
        alert(JSON.stringify(values, null, 2));
      }}
      validationSchema={yup.object({
        searchKeyWord: yup
          .string()
          .min(3, "Must be 3 characters or more")
          .required("Required"),
      })}
    >
      <Form>
        <MyTextField
          type="text"
          name="searchKeyWord"
          placeholder="Product keyword..."
        />
        <MySelectField widthfull />

        <Button type="submit" htmlType="submit" secondary widthfull>
          submit
        </Button>
      </Form>
    </Formik>
  );
}

export default SearchForm;
