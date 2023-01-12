import { Col, Row, Table } from "antd";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../Button";

const ManagerProductsTable = ({ dataSource }) => {
  const columns = [
    {
      title: "Product name",
      dataIndex: "nameOfProduct",
      key: "nameOfProduct",
    },
    {
      title: "Unit price",
      dataIndex: "priceOfProduct",
      key: "priceOfProduct",
    },
    {
      title: "Description",
      dataIndex: "productDescription",
      key: "productDescription",
    },
    {
      title: "Count",
      dataIndex: "countOfProduct",
      key: "countOfProduct",
    },
    {
      title: "Image",
      dataIndex: "productImages",
      key: "productImages",
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
      title: "Category",
      dataIndex: "idCategory",
      key: "idCategory",
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

  return (
    <Row className="justify-center">
      <Col xl={24}>
        <Table columns={columns} dataSource={dataSource} />
      </Col>
    </Row>
  );
};

export default ManagerProductsTable;
