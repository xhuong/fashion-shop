import Input from "../Input";
import Button from "../Button";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/slices/modalSlice";

import "./index.scss";
import Message from "../Message";

function Modal() {
  const dispatch = useDispatch();
  return (
    <div className="modal">
      <div className="modal_content">
        <div
          className="button_remove"
          onClick={() => {
            dispatch(closeModal());
          }}
        >
          <CiCircleRemove />
        </div>
        <h2 className="modal_heading">Login</h2>
        <form action="" className="modal_form">
          <div className="form_group">
            <label className="modal_label">User Name</label>
            <Input placeholder="Username*" required />
          </div>
          <div className="form_group">
            <label className="modal_label">Password</label>
            <Input type="password" placeholder="Password*" required />
          </div>
          <div className="form_group">
            <Message type="danger">
              Your username or password is not correct ! Please try again !
            </Message>
          </div>
          <div className="form_group">
            <Link to="" className="modal_forgot_password">
              Lost your password?
            </Link>
          </div>
          <div className="form_group">
            <Button type="button" secondary widthfull>
              Login
            </Button>
          </div>
        </form>
        <div className="modal_more_information">
          <div className="modal_register">
            <p className="modal_text">Not a member?</p>
            <Link to="">Register</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
