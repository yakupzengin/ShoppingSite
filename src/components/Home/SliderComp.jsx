import React from 'react';
import Slider from 'react-slick';
import './SliderComp.css';
import slider1 from "../../images/slice3.jpg"
import slider2 from "../../images/slice1.png"
function SliderComp() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="pt-7">
      <Slider {...settings}>
        <div className="slide">
          <div className="slide-content">
            <h1>Discover the Latest Fashion Trends</h1>
            <p>Explore our collection of high-quality clothing from top brands</p>
            <button >Discover</button>
          </div>
          <img src={slider1} alt="" />
        </div>
        <div className="slide">
          <div className="slide-content">
            <h1>Shop the Best Clothing Styles</h1>
            <p>Find your perfect outfit from our wide selection of styles and colors</p>
            <button>Discover</button>
          </div>
          <img src={slider2} alt="" />
        </div>
      </Slider>
    </div>
  );
}

export default SliderComp;