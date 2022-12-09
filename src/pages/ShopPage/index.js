import React from "react";
import { useState, useEffect } from "react";
import BreadCrumb from "../../components/Breadcrumb";
import FilterShop from "../../components/FilterShop";
import ShopSlider from "../../components/ShopSlider";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ShopProduct from "../../layouts/ShopProduct";
import { useGetNewestProductsQuery } from "../../services/ProductAPI";

function ShopPage() {
  const [data, setData] = useState([]);
  const { data: newestProductData, isError, isLoading, isSuccess } = useGetNewestProductsQuery();

  useEffect(() => {
    if (newestProductData && isSuccess) {
      setData(newestProductData);
    }
  }, [newestProductData]);

  const handleSetListProduct = (data) => {
    if (data) {
      setData(data);
    }
  };

  return (
    <React.Fragment>
      <Header />
      <ShopSlider />
      <BreadCrumb />
      <FilterShop handleSetListProduct={handleSetListProduct} />
      <ShopProduct data={data} isLoading={isLoading} isError={isError} />
      <Footer />
    </React.Fragment>
  );
}

export default ShopPage;
