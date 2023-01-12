import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import ContainerComponent from "../../components/ContainerComponent";
import BreadCrumb from "../../components/Breadcrumb";
import AdminLayout from "../../layouts/AdminLayout";

const AdminPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <AdminLayout />
      <Footer />
    </React.Fragment>
  );
};

export default AdminPage;
