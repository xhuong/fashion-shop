function Section(props) {
  return (
    <div className={"section " + (props.gray ? "gray" : "")}>
      <div className="container">
        <h3 className="section_heading">{props.title}</h3>
        {props.children}
      </div>
    </div>
  );
}

export default Section;
