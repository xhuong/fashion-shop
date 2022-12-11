import React, { useEffect, useState } from "react";
import SimpleSlider from "../../components/Slider";
import Trending from "../../layouts/Trending";
import Header from "../../layouts/Header";
import OutTrendingProduct from "../../layouts/OutTrendingProduct";
import NewUpdate from "../../layouts/NewUpdate";
import Footer from "../../layouts/Footer";
import { useGetNewestProductsQuery, useGetTrendingProductsQuery } from "../../services/ProductAPI";

function HomePage() {
  const [data, setData] = useState([]);
  const [dataTrending, setDataTrending] = useState([]);

  const { data: newestProductData, isError, isLoading, isSuccess } = useGetNewestProductsQuery();
  const {
    data: trendingProductsData,
    isError: isErrorTrending,
    isLoading: isLoadingTrending,
    isSuccess: isSuccessTrending,
  } = useGetTrendingProductsQuery();

  useEffect(() => {
    if (newestProductData && isSuccess) {
      setData(newestProductData);
    }
  }, [newestProductData]);

  useEffect(() => {
    if (trendingProductsData && isSuccessTrending) {
      setDataTrending(trendingProductsData);
    }
  }, [trendingProductsData]);

  return (
    <React.Fragment>
      <Header />
      <SimpleSlider />
      <Trending data={data} isLoading={isLoading} isError={isError} />
      <OutTrendingProduct data={dataTrending} isLoading={isLoadingTrending} isError={isErrorTrending} />
      <NewUpdate />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
