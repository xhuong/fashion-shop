import { Table } from "antd";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../Button";

const ManagerOrdersTable = ({ dataSource }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "idOrder",
      key: "idOrder",
    },
    {
      title: "Product name",
      dataIndex: "nameOfProduct",
      key: "nameOfProduct",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Quantity ordered",
      dataIndex: "quantityOrdered",
      key: "quantityOrdered",
    },
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <React.Fragment>
          <Button className="mb-2" size="full-btn" type="primary">
            <RiDeleteBin6Line style={{ fontSize: "1.6rem" }} />
          </Button>
          <Button size="full-btn" type="primary">
            <CiEdit style={{ fontSize: "1.6rem" }} />
          </Button>
        </React.Fragment>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default ManagerOrdersTable;
