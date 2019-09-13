import React, { useEffect } from "react";
import InfiniteCarousel from "react-leaf-carousel";

const MainCarousel = () => {
  return (
    <>
      <InfiniteCarousel
        breakpoints={[
          {
            breakpoint: 500,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3
            }
          }
        ]}
        dots={true}
        showSides={true}
        // sidesOpacity={0.5}
        sideSize={0.1}
        autoCycle={true}
        slidesToScroll={5}
        slidesToShow={5}
        scrollOnDevice={true}
        responsive={true}
        cycleInterval={2000}
      >
        <div>
          <img alt="그루트" src="static/images/그루트.jpg" />
        </div>
        <div>
          <img alt="" src="static/images/아이언맨.jpg" />
        </div>
        <div>
          <img alt="" src="static/images/캡틴.jpg" />
        </div>
        <div>
          <img alt="그루트" src="static/images/그루트.jpg" />
        </div>
        <div>
          <img alt="" src="static/images/아이언맨.jpg" />
        </div>
        <div>
          <img alt="" src="static/images/캡틴.jpg" />
        </div>
        <div>
          <img alt="그루트" src="static/images/그루트.jpg" />
        </div>
        <div>
          <img alt="" src="static/images/아이언맨.jpg" />
        </div>
        <div>
          <img alt="" src="static/images/캡틴.jpg" />
        </div>
      </InfiniteCarousel>
    </>
  );
};

export default MainCarousel;
