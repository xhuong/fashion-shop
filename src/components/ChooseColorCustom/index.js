import { Radio } from "antd";
import { connect, useField } from "formik";
import Message from "../Message";
import { StyledChooseColorCustom } from "./styles";

const ChooseColorCustom = (props) => {
  const [field, meta] = useField(props);
  return (
    <StyledChooseColorCustom>
      <Radio.Group name={props.name} {...field} {...props} defaultValue="darkgreen">
        <Radio className="radio-darkgreen" value="darkgreen" />
        <Radio className="radio-darkblue" value="darkblue" />
        <Radio className="radio-orange" value="orange" />
        <Radio className="radio-lightpink" value="lightpink" />
        <Radio className="radio-yellowgreen" value="yellowgreen" />
      </Radio.Group>
      {meta.touched && meta.error ? (
        <Message className="message danger">{meta.error}</Message>
      ) : null}
    </StyledChooseColorCustom>
  );
};

export default connect(ChooseColorCustom);
