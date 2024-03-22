"use client";
import React from "react";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Slider from "react-slick";

import image6 from "@/assets/banner/banner_6.jpg";
import shape1 from "@/assets/shapes/shapes_1.png";
import shape2 from "@/assets/shapes/shape_2.png";
import image5 from "@/assets/banner/banner_5.jpg";
import image8 from "@/assets/banner/banner_8.jpg";
import image4 from "@/assets/banner/banner_4.jpg";

import Image from "next/image";
import PrimaryButton from "../PrimaryButton";

type AutoButtonProps = {
  className: string;
  onClick: () => void;
};

const Banner = () => {
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
    infinite: true,
    pauseOnHover: false,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
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
    <Slider {...settings}>
      <div className="w-full ">
        <div className="h-[650px] relative ">
          <Image
            src={image6}
            alt="banner_image_1"
            layout="fill"
            objectFit="cover"
          ></Image>

          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative inline-block">
              <motion.div
                animate={{ rotate: [0, 3600] }}
                transition={{ duration: 120, loop: Infinity, ease: "linear" }}
                className="z-5"
              >
                <Image
                  src={shape2}
                  alt="shape_1"
                  width={450}
                  height={450}
                  className="w-[415px] md:w-[450px]"
                />
              </motion.div>
              <motion.div
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                  y: { type: "spring", stiffness: 60 },
                  opacity: { duration: 1 },
                  ease: "easeIn",
                  duration: 1,
                }}
                className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 "
              >
                <h4 className="text-base underline text-white font-normal">
                  don&apos;t miss 3 day vegetable sale
                </h4>
                <h2 className="text-7xl font-bold text-white">eat.</h2>
                <h2 className="text-7xl font-bold text-white">love.</h2>
                <h3 className="text-7xl font-bold text-white">repeat.</h3>

                <PrimaryButton className="mt-5">Shop Now</PrimaryButton>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="h-[650px] relative ">
          <Image
            src={image4}
            // src={image5}
            // src={image8}
            alt="banner_image_1"
            layout="fill"
            objectFit="cover"
          ></Image>

          <div className="absolute inset-0 flex justify-center items-center ">
            <div className="relative ">
              <div className="space-y-3 ">
                <h3 className="text-white font-semibold text-xl underline">
                  eat fresh everyday.
                </h3>
                <h2 className="text-7xl md:text-8xl font-bold text-primary">
                  Organic{" "}
                </h2>
                <h2 className="text-7xl md:text-8xl font-bold text-white">
                  & healthy
                </h2>
                <h4 className="text-white text-xl font-semibold">
                  no more doubts in picking
                </h4>

                <div className="inline-block">
                  <PrimaryButton>Shop Now</PrimaryButton>
                </div>
              </div>

              <div className="absolute top-[-105px] right-[-35px] md:right-[-50px] ">
                <div className="relative">
                  <motion.div
                    animate={{ rotate: [0, 3600] }}
                    transition={{
                      duration: 120,
                      loop: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Image
                      src={shape1}
                      width={180}
                      height={180}
                      alt="shape_2"
                      className="w-[165px] md:w-[180px]"
                    ></Image>
                  </motion.div>
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <h3 className="text-white font-semibold text-base">
                      Discount
                    </h3>
                    <h2 className="text-white text-4xl font-bold my-1 md:my-2">
                      30%
                    </h2>
                    <h3 className="px-4 py-2 bg-white rounded-md text-red-700 font-bold">
                      Today
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default Banner;
