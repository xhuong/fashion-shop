import { connect, useField } from "formik";
import { StyledSelect } from "./styles";
import Message from "../Message";

const Select = ({ options, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledSelect>
      <select name={props.name} {...field} {...props}>
        {options.map((option, index) => {
          if (index === 0) {
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
      {meta.touched && meta.error ? (
        <Message className="message danger">{meta.error}</Message>
      ) : null}
    </StyledSelect>
  );
};

export default connect(Select);
