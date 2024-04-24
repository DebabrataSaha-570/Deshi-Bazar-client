"use client";
import Image from "next/image";
import React, { Component } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";
type AutoButtonProps = {
  className: string;
  onClick: () => void;
};

const ProductDetailCarousel = ({ image }: { image: string }) => {
  const PreviousBtn = ({ className, onClick }: AutoButtonProps) => {
    return (
      <>
        <div className={className} onClick={onClick}>
          <FaArrowLeftLong style={{ fontSize: "14px" }} />
        </div>
      </>
    );
  };
  const NextBtn = ({ className, onClick }: AutoButtonProps) => {
    return (
      <>
        <div className={className} onClick={onClick}>
          <FaArrowRightLong style={{ fontSize: "14px" }} />
        </div>
      </>
    );
  };

  const settings = {
    customPaging: function () {
      return (
        <a>
          <Image
            src={image}
            alt="product_image"
            width={200}
            height={200}
            sizes="100vw"
            className="object-cover"
          ></Image>
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,

    nextArrow: (
      <NextBtn
        className={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
    prevArrow: (
      <PreviousBtn
        className={""}
        onClick={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
    ),
  };
  return (
    <div className="mx-5 md:mx-0 mb-20">
      <div className="slider-container">
        <Slider {...settings}>
          <div className="">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt="product_image"
            ></Image>
          </div>
          <div className="">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt="product_image"
            ></Image>
            {/* <img className="w-full h-full object-cover" src={image} /> */}
          </div>
          <div className="">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt="product_image"
            ></Image>
            {/* <img className="w-full h-full object-cover" src={image} /> */}
          </div>
          <div className="">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "100%" }}
              src={image}
              alt="product_image"
            ></Image>
            {/* <img className="w-full h-full object-cover" src={image} /> */}
          </div>

          {/* <ul className="slick-dots slick-thumb">
            <li className="slick-active">
                <a href="">
                    <img src="" alt="" />
                </a>
            </li>
          </ul> */}
        </Slider>
      </div>
    </div>
  );
};

export default ProductDetailCarousel;
