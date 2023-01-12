import { Col, Row, Table } from "antd";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import Button from "../Button";

const ManagerCategoriesTable = ({ dataSource }) => {
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      //   width: "%",
    },
    {
      title: "Category name",
      dataIndex: "categoryName",
      key: "categoryName",
      //   width: "80%",
    },
    {
      title: "Action",
      key: "action",
      //   width: "%",

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

export default ManagerCategoriesTable;
