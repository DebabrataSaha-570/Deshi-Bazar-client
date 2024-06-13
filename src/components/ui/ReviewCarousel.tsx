import { Review } from "@/types";
import React from "react";
import Slider from "react-slick";

const ReviewCarousel = ({ reviews }: { reviews: Review[] }) => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 3,
    initialSlide: 0,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      {reviews.length > 0 ? (
        <div className="slider-container">
          <Slider {...settings}>
            {reviews.map((review, index) => (
              <div
                key={index}
                style={{ margin: "20px" }}
                className="border border-red-500 "
              >
                <div
                  style={{ padding: "10px 20px" }}
                  className="border border-blue-400 "
                >
                  <h2>Hello </h2>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      ) : (
        <div>
          <h4>No Reviews Available</h4>
        </div>
      )}
    </>
  );
};

export default ReviewCarousel;
