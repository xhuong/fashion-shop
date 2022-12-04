import { Form, Formik } from "formik";
import Input from "../Input";
import Select from "../Select";
import * as Yup from "yup";
import Button from "../Button";
import { StyledRegisterForm } from "./styles";

const RegisterForm = () => {
  const initialValues = {
    username: "",
    nameOfUser: "",
    password: "",
    address: "",
    phoneNumber: "",
    level: null,
  };

  const levelOptions = [
    {
      name: "Choose your level",
      value: 2,
    },
    {
      name: "Customer",
      value: 0,
    },
    {
      name: "Staff",
      value: 1,
    },
  ];

  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  return (
    <StyledRegisterForm>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(8, "Must be 8 characters or more !")
            .required("Required"),
          nameOfUser: Yup.string()
            .min(5, "Must be 5 characters or more !")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more !")
            .required("Required"),
          address: Yup.string()
            .min(10, "Must be 10 characters or more !")
            .required("Required"),
          phoneNumber: Yup.string()
            .matches(phoneRegExp, "Your Phone number is not valid")
            .required("Required"),
          level: Yup.number()
            .oneOf([0, 1], "Invalid level value, please choose again !")
            .required("Required"),
        })}
        onSubmit={(value, action) => {
          console.log("123");
          alert(JSON.stringify(value, null, 2));
        }}
      >
        <Form>
          <h2 className="register_heading">Register account at kumo</h2>
          <Input type="text" name="username" placeholder="Username..." />
          <Input type="text" name="nameOfUser" placeholder="Your name..." />
          <Input type="password" name="password" placeholder="Your password..." />
          <Input type="text" name="address" placeholder="Address..." />
          <Input type="text" name="phoneNumber" placeholder="Phone number..." />
          <Select name="level" options={[...levelOptions]} />
          <Button type="secondary" size="full-btn" htmlType="submit">
            Submit Information
          </Button>
        </Form>
      </Formik>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
