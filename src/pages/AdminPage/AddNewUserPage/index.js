import React from "react";
import BreadCrumb from "../../../components/Breadcrumb";
import ContainerComponent from "../../../components/ContainerComponent";
import AddEditUserLayout from "../../../layouts/AdminLayout/AddEditUserLayout";
import Footer from "../../../layouts/Footer";
import Header from "../../../layouts/Header";

const AddNewUserPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <AddEditUserLayout type="add" />
      <Footer />
    </React.Fragment>
  );
};

export default AddNewUserPage;
