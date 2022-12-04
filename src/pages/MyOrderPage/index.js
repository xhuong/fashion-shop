import React from "react";
import Header from "../../layouts/Header";
import Footer from "../../layouts/Footer";
import ContainerComponent from "../../components/ContainerComponent";
import BreadCrumb from "../../components/Breadcrumb";
import Order from "../../layouts/Order";

const MyOrderPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <Order />
      <Footer />
    </React.Fragment>
  );
};

export default MyOrderPage;
