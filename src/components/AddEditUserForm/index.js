import { Form, Formik } from "formik";
import Button from "../Button";
import Input from "../Input";
import Message from "../Message";
import * as Yup from "yup";
import StyledAddEditUserForm from "./styles";
import { useAddNewUserMutation, useLazyGetUserByIdQuery } from "../../services/AuthAPI";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import Select from "../Select";

const AddEditUserForm = ({ type }) => {
  let { idUser } = useParams();
  const [isRegisterSuccess, setIsRegisterSuccess] = useState(false);
  const initialValues = {
    userName: "",
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

  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;

  const [userInformation, setUserInformation] = useState([]);
  console.log("🚀 ~ file: index.js:39 ~ AddEditUserForm ~ userInformation", userInformation);
  const [addNewUser, { data: addNewUserData, isLoading, isSuccess, isError }] = useAddNewUserMutation();
  const [getUserById, { data: userData, isLoading: isLoadingUserData, isSuccess: isSuccessUserData }] =
    useLazyGetUserByIdQuery();

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

  useEffect(() => {
    if (idUser) {
      getUserById(idUser)
        .then((response) => {
          console.log("response", response?.data);
          setUserInformation(response.data);
        })
        .catch(() => {
          console.log("Error when get user information by idUser");
        });
    }
  }, [idUser]);

  return (
    <StyledAddEditUserForm>
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
          {isRegisterSuccess && <Message className="message success">Add new user successfully !</Message>}

          <label className="label" htmlFor="nameOfUser">
            Name*
          </label>
          <Input type="text" name="nameOfUser" placeholder="Name..." />

          <label className="label" htmlFor="userName">
            User name*
          </label>
          <Input type="text" name="userName" placeholder="Username..." />

          <label className="label" htmlFor="password">
            Password*
          </label>
          <Input type="password" name="password" placeholder="Password..." />

          <label className="label" htmlFor="address">
            Address*
          </label>
          <Input type="text" name="address" placeholder="Address..." />

          <label className="label" htmlFor="phoneNumber">
            Phone number*
          </label>
          <Input type="text" name="phoneNumber" placeholder="Phone number..." />

          <Select name="level" options={[...levelOptions]} />

          <Button className="mb-5" type="secondary" size="full-btn" htmlType="submit">
            {type === "edit" ? "Update information" : "Add new user"}
          </Button>
        </Form>
      </Formik>
    </StyledAddEditUserForm>
  );
};

export default AddEditUserForm;
