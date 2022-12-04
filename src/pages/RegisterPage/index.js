import RegisterForm from "../../components/RegisterForm";
import "./index.scss";

const RegisterPage = () => {
  return (
    <div className="register">
      <div className="container">
        <div className="register_container">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
