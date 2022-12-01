import styled from "styled-components";

const StyledLoginForm = styled.div`
  .login_label {
    display: inline-block;
    font-size: 1.6rem;
    color: #707070;
    margin-bottom: 6px;
  }
  .login_information {
    text-transform: capitalize;
    display: inline-block;
    width: 100%;
    text-align: right;
    font-size: 1.4rem;
    color: #111111;
  }
  .register {
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5px;
    font-size: 1.6rem;
  }
  .register_text {
    color: #707070;
    text-transform: initial;
  }
`;

export default StyledLoginForm;
