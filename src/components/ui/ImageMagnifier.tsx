"use client";
import React from "react";
import ReactImageMagnify from "react-image-magnify";
const ImageMagnifier = ({ image }: { image: string }) => {
  return (
    <div className="imageMagnifier ">
      <ReactImageMagnify
        {...{
          smallImage: {
            alt: "product image",
            isFluidWidth: true,
            src: image,
          },
          largeImage: {
            src: image,

            // width: 1200,
            // height: 1800,
            width: 600,
            height: 800,
          },
          isHintEnabled: true,

          enlargedImagePosition: "over",
        }}
      />
    </div>
  );
};

export default ImageMagnifier;
