const ContainerComponent = ({ children, ...props }) => {
  return (
    <div className={`${props.marginTopEqualHeaderHeight ? "bg_gray" : ""}`}>
      <div
        className={`container ${
          props.marginTopEqualHeaderHeight ? "mt-top-equals-header-height" : ""
        }`}
      >
        <div className="container_content">{children}</div>
      </div>
    </div>
  );
};

export default ContainerComponent;
