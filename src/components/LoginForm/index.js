import { Formik, Form } from "formik";
import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { setActiveAuthenticated } from "../../redux/slices/authSlice";
import { closeModal } from "../../redux/slices/modalSlice";
import { useLazyGetUserByUserNameQuery } from "../../services/AuthAPI";
import Button from "../Button";
import Input from "../Input";
import Message from "../Message";
import StyledLoginForm from "./styles";

const LoginForm = () => {
  const navigate = useNavigate();
  const [isLoggedInSuccess, setIsLoggedInSuccess] = useState(false);
  const [isErrorLoggedIn, setIsErrorLoggedIn] = useState(false);
  const [countDownTimer, setCountDownTimer] = useState(5);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [getUserByUserName, { data: dataUser, isLoading, isError, isSuccess }] = useLazyGetUserByUserNameQuery({});

  const initialValues = {
    username: "",
    password: "",
  };

  const handleSubmitLoginForm = (value) => {
    const { username, password } = value;
    getUserByUserName(username)
      .unwrap()
      .then((dataUser) => {
        // compare password
        // matched password
        if (password === dataUser[0].password) {
          setIsErrorLoggedIn(false);
          setIsLoggedInSuccess(true);
          let level = dataUser[0].level;
          let roleUser = level === 1 ? "admin" : level === 2 ? "staff" : "customer";

          localStorage.setItem("nameOfUser", dataUser[0].nameOfUser);
          localStorage.setItem("address", dataUser[0].address);
          localStorage.setItem("idUser", dataUser[0].id);
          localStorage.setItem("role", roleUser);

          dispatch(setActiveAuthenticated());
        } else {
          setIsErrorLoggedIn(true);
        }
      })
      .catch(() => {
        setIsErrorLoggedIn(true);
      });
  };

  useEffect(() => {
    let timer;
    if (isAuthenticated) {
      timer = setInterval(() => {
        setCountDownTimer(countDownTimer - 1);
      }, 1000);

      if (countDownTimer === 0) {
        dispatch(closeModal());
        navigate("/shop");
        clearInterval(timer);
      }
    }

    return () => clearInterval(timer);
  }, [isAuthenticated, countDownTimer]);

  return (
    <StyledLoginForm>
      <Formik
        initialValues={{ ...initialValues }}
        validationSchema={Yup.object({
          username: Yup.string().min(3, "Must be 3 characters or more !").required("Required"),
          password: Yup.string().min(6, "Must be 6 characters or more !").required("Required"),
        })}
        onSubmit={(value, action) => handleSubmitLoginForm(value)}
      >
        <Form>
          {isLoggedInSuccess && (
            <Message className="message success">
              Login success. Welcome to Kumo Fashion shop. Page will be redirect in {countDownTimer} seconds.
            </Message>
          )}
          {isErrorLoggedIn && (
            <Message className="message danger">Login faild. Please check your information again !</Message>
          )}
          <label className="login_label" htmlFor="username">
            Username*
          </label>
          <Input type="text" name="username" placeholder="Username..." />
          <label className="login_label" htmlFor="password">
            Password*
          </label>
          <Input type="password" name="password" placeholder="Password..." />
          <Button className="mb-5" type="secondary" size="full-btn" htmlType="submit" loading={isLoading}>
            Login
          </Button>
          <div className="login_information">
            <div className="register">
              <p className="register_text">Not a member?</p>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </Form>
      </Formik>
    </StyledLoginForm>
  );
};

export default LoginForm;
