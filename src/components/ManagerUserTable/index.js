import { Table } from "antd";
import React from "react";
import { CiEdit } from "react-icons/ci";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { useDeleteAUserMutation } from "../../services/AuthAPI";
import Button from "../Button";

const ManagerUsersTable = ({ dataSource }) => {
  const navigate = useNavigate();
  const [deleteAUser, { data, isError, isSuccess, isLoading }] = useDeleteAUserMutation();
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "5%",
    },
    {
      title: "Name",
      dataIndex: "nameOfUser",
      key: "nameOfUser",
      width: "10%",
    },
    {
      title: "Username",
      dataIndex: "userName",
      key: "userName",
      width: "10%",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
      width: "10%",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
      width: "25%",
    },
    {
      title: "Level",
      key: "level",
      width: "5%",
      render: (_, record) => <span>{record.level === 1 ? "Admin" : record.level === 2 ? "Staff" : "Customer"}</span>,
    },
    {
      title: "Phone number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
      width: "10%",
    },
    {
      title: "Profile picture",
      dataIndex: "profilePicture",
      key: "profilePicture",
      width: "20%",
    },
    {
      title: "Action",
      key: "action",
      width: "5%",
      render: (_, record) => (
        <React.Fragment>
          {record.level !== 1 && (
            <Button
              className="mb-2"
              size="full-btn"
              type="secondary"
              loading={isLoading}
              onClick={() => {
                deleteAUser({});
              }}
            >
              <RiDeleteBin6Line style={{ fontSize: "1.6rem" }} />
            </Button>
          )}
          <Button
            size="full-btn"
            type="secondary"
            onClick={() => {
              navigate(`/manager/edit-user/${record.id}`);
            }}
          >
            <CiEdit style={{ fontSize: "1.6rem" }} />
          </Button>
        </React.Fragment>
      ),
    },
  ];

  return <Table columns={columns} dataSource={dataSource} />;
};

export default ManagerUsersTable;
