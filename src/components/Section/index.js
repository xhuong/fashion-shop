function Section(props) {
  return (
    <div className={"section " + (props.gray ? "gray" : "")}>
      <div className="container">
        <h2 className="section_title">
          {props.title}
          <span className="section_subtitle">{props.subTitle}</span>
        </h2>
        {props.children}
      </div>
    </div>
  );
}

export default Section;
