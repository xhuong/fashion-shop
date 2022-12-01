import { Form } from "antd";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import Button from "../Button";
import Input from "../Input";
import StyledLoginForm from "./styles";

const LoginForm = () => {
  const initialValues = {
    username: "",
    password: "",
  };
  return (
    <StyledLoginForm>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={Yup.object({
          username: Yup.string()
            .min(3, "Must be 3 characters or more !")
            .required("Required"),
          password: Yup.string()
            .min(6, "Must be 6 characters or more !")
            .required("Required"),
        })}
      >
        <Form>
          <label className="login_label" htmlFor="username">
            Username*
          </label>
          <Input type="text" name="username" placeholder="Username..." />
          <label className="login_label" htmlFor="password">
            Password*
          </label>
          <Input type="password" name="password" placeholder="Password..." />
          <Button className="mb-5" type="secondary" htmlType="submit" size="full-btn">
            Login
          </Button>
          <div className="login_information">
            <div className="register">
              <p className="register_text">Not a member?</p>
              <Link to="">Register</Link>
            </div>
          </div>
        </Form>
      </Formik>
    </StyledLoginForm>
  );
};

export default LoginForm;
