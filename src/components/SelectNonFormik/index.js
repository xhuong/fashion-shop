import { StyledSelect } from "./styles";
import Message from "../Message";

const SelectNonFormik = ({ name, isEmpty, options, onChange, ...props }) => {
  return (
    <StyledSelect>
      <select name={name} onChange={(e) => onChange(e.target.value)}>
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
      {isEmpty && <Message className="message danger">Please select {name} !</Message>}
    </StyledSelect>
  );
};

export default SelectNonFormik;
