import React from "react";
import SimpleSlider from "../../components/Slider";
import Trending from "../../layouts/Trending";
import Header from "../../layouts/Header";
import OutTrendingProduct from "../../layouts/OutTrendingProduct";
import NewUpdate from "../../layouts/NewUpdate";
import Footer from "../../layouts/Footer";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <SimpleSlider />
      <Trending />
      <OutTrendingProduct />
      <NewUpdate />
      <Footer />
    </React.Fragment>
  );
}

export default HomePage;
