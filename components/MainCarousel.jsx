import React, { useEffect } from "react";
import Slider from "react-slick";
import { CarouselWrapper } from "../components/css/MainCarousel";

let settings = {
  centerMode: true,
  dots: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  initialSlide: 0,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
};

const MainCarousel = () => {
  return (
    <>
      <link
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <CarouselWrapper>
        <Slider {...settings}>
          <div>
            <img src="static/images/classrooms/1101.jpg"></img>
          </div>
          <div>
            <img src="static/images/classrooms/1102.png"></img>
          </div>
          <div>
            <img src="static/images/classrooms/1103.jpg"></img>
          </div>
          <div>
            <img src="static/images/classrooms/6202.jpg"></img>
          </div>
          <div>
            <img src="static/images/classrooms/M402.png"></img>
          </div>
          <div>
            <img src="static/images/classrooms/M403.jpg"></img>
          </div>
          <div>
            <img src="static/images/classrooms/M404.jpg"></img>
          </div>
          <div>
            <img src="static/images/classrooms/default.jpg"></img>
          </div>
        </Slider>
      </CarouselWrapper>
    </>
  );
};

export default MainCarousel;
