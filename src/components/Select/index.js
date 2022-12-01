import { connect, useField } from "formik";
import { StyledSelect } from "./styles";
import Message from "../Message";

const Select = ({ options, onChangeFormik, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <StyledSelect>
      <select name="jobType" {...field}>
        {options.map((option, index) => {
          return (
            <option selected={index === 0} key={index} value={option.value}>
              {option.name}
            </option>
          );
        })}
      </select>
      {meta.touched && meta.error ? <Message className="message danger">{meta.error}</Message> : null}
    </StyledSelect>
  );
};

export default connect(Select);
