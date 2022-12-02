import { Breadcrumb as AntBreadCrumb } from "antd";
import { Link } from "react-router-dom";
import "./index.scss";

const BreadCrumb = (props) => {
  const items = [
    { label: "item 1", key: "item-1" },
    { label: "item 2", key: "item-2" },
  ];

  return (
    <AntBreadCrumb className={`${props.normal ? "normal" : ""}`}>
      <AntBreadCrumb.Item>
        <Link to="/">Home</Link>
      </AntBreadCrumb.Item>
      <AntBreadCrumb.Item>
        <Link to="/shop">Shop</Link>
      </AntBreadCrumb.Item>
      <AntBreadCrumb.Item>
        <Link to="/shop/men">Men</Link>
      </AntBreadCrumb.Item>
    </AntBreadCrumb>
  );
};

export default BreadCrumb;
