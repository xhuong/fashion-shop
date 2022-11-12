import React from "react";
import SimpleSlider from "../../components/Slider";
import Trending from "../../components/Trending";
import Header from "../../layouts/Header";

function HomePage() {
  return (
    <React.Fragment>
      <Header />
      <SimpleSlider />
      <Trending />
    </React.Fragment>
  );
}

export default HomePage;
