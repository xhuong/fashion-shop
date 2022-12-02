import React from "react";
import BreadCrumb from "../../components/Breadcrumb";
import ContainerComponent from "../../components/ContainerComponent";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ProductDetail from "../../layouts/ProductDetail";

const ProductDetailPage = () => {
  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <ProductDetail />
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetailPage;
