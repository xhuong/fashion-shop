import { connect, useField } from "formik";
import { StyledSelectSecond } from "./styles";
import Message from "../Message";

const Select2 = ({ options, ...props }) => {
  console.log("props.value", props.defaultValue);
  const [field, meta] = useField(props);
  return (
    <StyledSelectSecond>
      <select name={props.name} {...field}>
        {options.map((option, index) => {
          if (option.value === props.defaultValue) {
            return (
              <option selected key={index} value={option.value}>
                {option.name}
              </option>
            );
          } else {
            return (
              <option key={index} value={option.value}>
                {option.name}
              </option>
            );
          }
        })}
      </select>
      {meta.touched && meta.error ? <Message className="message danger">{meta.error}</Message> : null}
    </StyledSelectSecond>
  );
};

export default connect(Select2);
