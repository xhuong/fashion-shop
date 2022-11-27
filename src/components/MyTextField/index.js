import { connect, Field, useField } from "formik";
import Input from "../Input";
import Message from "../Message";
import "./index.scss";

function MyTextField(props) {
  console.log("Props...", props);
  const [field, meta, helpers] = useField(props);
  return (
    <>
      <Input {...field} {...props} className="mb-5" />
      {meta.touched && meta.error ? (
        <Message className="message danger mb-5">{meta.error}</Message>
      ) : null}
    </>
  );
}

export default connect(MyTextField);
