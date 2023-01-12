import { Form, Formik } from "formik";
import Input from "../Input";
import Select from "../Select";
import * as Yup from "yup";
import Button from "../Button";
import { StyledRegisterForm } from "./styles";
import { useAddNewUserMutation } from "../../services/AuthAPI";
import Message from "../Message";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const navigate = useNavigate();
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
      name: "Staff",
      value: 2,
    },
    {
      name: "Customer",
      value: 3,
    },
  ];

  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const [addNewUser, { data: addNewUserData, isLoading, isSuccess, isError }] = useAddNewUserMutation();

  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  const handleSubmitForm = (registryInformation) => {
    const { userName, nameOfUser, password, address, phoneNumber, level } = registryInformation;
    addNewUser({ userName, nameOfUser, password, address, phoneNumber, level })
      .unwrap()
      .then((response) => {
        if (response.error === false) {
          setIsRegisterSuccess(true);
        }
      })
      .catch(() => {
        console.log("Error in registry page");
      });
  };
  return (
    <StyledRegisterForm>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={Yup.object({
          userName: Yup.string().min(5, "Must be 5 characters or more !").required("Required"),
          nameOfUser: Yup.string().min(5, "Must be 5 characters or more !").required("Required"),
          password: Yup.string().min(5, "Must be 5 characters or more !").required("Required"),
          address: Yup.string().min(5, "Must be 5 characters or more !").required("Required"),
          phoneNumber: Yup.string().matches(phoneRegExp, "Your Phone number is not valid").required("Required"),
          level: Yup.number().oneOf([2, 3], "Invalid level value, please choose again !").required("Required"),
        })}
        onSubmit={(value, action) => {
          handleSubmitForm(value);
        }}
      >
        <Form>
          <h2 className="register_heading">Register account at kumo</h2>

          {isRegisterSuccess && <Message className="message success">Register successfully !</Message>}

          {isError && <Message className="message danger">Register failed, Please contact of administrator !</Message>}

          <Input type="text" name="userName" placeholder="Username..." />
          <Input type="text" name="nameOfUser" placeholder="Your name..." />
          <Input type="password" name="password" placeholder="Your password..." />
          <Input type="text" name="address" placeholder="Address..." />
          <Input type="text" name="phoneNumber" placeholder="Phone number..." />
          <Select name="level" options={[...levelOptions]} />
          <Button type="secondary" size="full-btn" htmlType="submit">
            Submit Information
          </Button>
          <Button type="primary" size="full-btn" className="mt-4" onClick={() => navigate("/")}>
            Back to home
          </Button>
        </Form>
      </Formik>
    </StyledRegisterForm>
  );
};

export default RegisterForm;
