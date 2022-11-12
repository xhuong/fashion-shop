import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.scss";

const SimpleSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider">
      <Slider {...settings}>
        <div
          className="slider_item"
          style={{
            backgroundImage: `url(${require("../../assests/images/banners/banner-01.png")}),`,
          }}
        >
          <div className="slider_content">
            <p className="slider_name_collection">Winter Collection</p>
            <h2 className="slider_heading">
              New Winter <br /> Collections 2022
            </h2>
            <p className="slider_subheading">There's nothing like trend</p>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
        <div
          className="slider_item"
          style={{
            backgroundImage: `url(${require("../../assests/images/banners/banner-01.png")})`,
          }}
        >
          <div className="slider_content">
            <p className="slider_name_collection">Winter Collection</p>
            <h2 className="slider_heading">
              New Winter <br /> Collections 2022
            </h2>
            <p className="slider_subheading">There's nothing like trend</p>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
        <div
          className="slider_item"
          style={{
            backgroundImage: `url(${require("../../assests/images/banners/banner-01.png")})`,
          }}
        >
          <div className="slider_content">
            <p className="slider_name_collection">Winter Collection</p>
            <h2 className="slider_heading">
              New Winter <br /> Collections 2022
            </h2>
            <p className="slider_subheading">There's nothing like trend</p>
            <button>
              Shop Now <BsArrowRight />
            </button>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default SimpleSlider;
