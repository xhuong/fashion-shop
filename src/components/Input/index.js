import { Input as AntInput } from "antd";
import { connect, useField } from "formik";
import Message from "../Message";
import { StyledInput } from "./styles";

const Input = (props) => {
  const [field, meta] = useField(props);
  console.log("..asdasd", field);
  return (
    <StyledInput>
      <AntInput {...field} placeholder={props.placeholder} />
      {meta.touched && meta.error ? (
        <Message className={`message ${meta.error && "danger"}`}>{meta.error}</Message>
      ) : null}
    </StyledInput>
  );
};

export default connect(Input);
