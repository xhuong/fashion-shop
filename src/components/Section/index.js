function Section(props) {
  return (
    <div className={"section " + (props.gray ? "gray" : "")}>
      <div className="container">
        <h3 className="section_title">
          {props.title}
          <h2 className="section_subtitle">{props.subTitle}</h2>
        </h3>
        {props.children}
      </div>
    </div>
  );
}

export default Section;
