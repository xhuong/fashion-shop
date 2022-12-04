import React from "react";
import BreadCrumb from "../../components/Breadcrumb";
import ContainerComponent from "../../components/ContainerComponent";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import PageNotFound from "../../layouts/PageNotFound";

const PageNotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <PageNotFound />
      <Footer />
    </React.Fragment>
  );
};

export default PageNotFoundPage;
