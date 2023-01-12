import { Col, Row } from "antd";
import React from "react";
import AddEditUserForm from "../../../components/AddEditUserForm";
import "./index.scss";

const AddEditUserLayout = ({ type }) => {
  return (
    <div className="admin">
      <div className="container">
        <div className="admin_container">
          <h3 className="admin_heading_page">{type === "edit" ? "edit user" : "add user"}</h3>
          <Row className="mt-4" gutter={[12]}>
            <Col xl={8}>
              <AddEditUserForm type={type} />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default AddEditUserLayout;
