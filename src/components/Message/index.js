import "./index.scss";

function Message(props) {
  return (
    <p
      className={
        props.className ||
        (props.type ? `message ${props.type}` : `message infor`)
      }
    >
      {props.children}
    </p>
  );
}

export default Message;
