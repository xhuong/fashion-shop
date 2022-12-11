import React from "react";
import { useLocation } from "react-router-dom";
import BreadCrumb from "../../components/Breadcrumb";
import ContainerComponent from "../../components/ContainerComponent";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ProductDetail from "../../layouts/ProductDetail";

const ProductDetailPage = () => {
  const { state: productDetailData } = useLocation();
  console.log("state", productDetailData);

  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <ProductDetail data={productDetailData} />
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetailPage;
