import React from "react";
import BreadCrumb from "../../components/Breadcrumb";
import FilterShop from "../../components/FilterShop";
import ShopSlider from "../../components/ShopSlider";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ShopProduct from "../../layouts/ShopProduct";

function ShopPage() {
  return (
    <React.Fragment>
      <Header />
      <ShopSlider />
      <BreadCrumb />
      <FilterShop />
      <ShopProduct />
      <Footer />
    </React.Fragment>
  );
}

export default ShopPage;
