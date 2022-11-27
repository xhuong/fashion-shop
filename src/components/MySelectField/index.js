import "./index.scss";
import { Select } from "antd";

function MySelectField() {
  return (
    <Select
      defaultValue="lucy"
      style={{ width: 120 }}
      options={[
        {
          value: "jack",
          label: "Jack",
        },
        {
          value: "lucy",
          label: "Lucy",
        },
        {
          value: "disabled",
          disabled: true,
          label: "Disabled",
        },
        {
          value: "Yiminghe",
          label: "yiminghe",
        },
      ]}
    />
  );
}

export default MySelectField;
