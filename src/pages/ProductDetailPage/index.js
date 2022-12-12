import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BreadCrumb from "../../components/Breadcrumb";
import ContainerComponent from "../../components/ContainerComponent";
import Footer from "../../layouts/Footer";
import Header from "../../layouts/Header";
import ProductDetail from "../../layouts/ProductDetail";
import { useLazyGetProductByIdQuery } from "../../services/ProductAPI";

const ProductDetailPage = () => {
  const [data, setData] = useState([]);
  const [getProductById, { data: productData, isError, isSuccess, isLoading }] = useLazyGetProductByIdQuery();
  const { id } = useParams();

  useEffect(() => {
    getProductById({ id });
  }, []);

  useEffect(() => {
    if (productData?.length > 0 && isSuccess) {
      setData(productData);
    }
  }, [productData]);

  return (
    <React.Fragment>
      <Header />
      <ContainerComponent marginTopEqualHeaderHeight>
        <BreadCrumb normal={true} />
      </ContainerComponent>
      <ProductDetail productData={data} />
      <Footer />
    </React.Fragment>
  );
};

export default ProductDetailPage;
