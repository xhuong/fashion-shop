import React from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../../components/Breadcrumb";
import ContainerComponent from "../../../components/ContainerComponent";
import AddEditUserLayout from "../../../layouts/AdminLayout/AddEditUserLayout";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";

const EditUserPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <AddEditUserLayout type="edit" />
      <Footer />
    </React.Fragment>
  );
};

export default EditUserPage;
