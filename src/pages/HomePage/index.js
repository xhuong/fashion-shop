import React from "react";
import SimpleSlider from "../../components/Slider";
import Trending from "../../layouts/Trending";
import Header from "../../layouts/Header";
import OutTrendingProduct from "../../layouts/OutTrendingProduct";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <SimpleSlider />
      <Trending />
      <OutTrendingProduct />
    </React.Fragment>
  );
}

export default HomePage;
