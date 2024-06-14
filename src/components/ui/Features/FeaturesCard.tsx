import Image from "next/image";
import React from "react";

type TFeature = {
  id: number;
  icon: string;
  heading: string;
  subHeading: string;
};

const FeaturesCard = ({ feature }: { feature: TFeature }) => {
  return (
    <div className="">
      <div className="px-3 py-7 border text-center space-y-2">
        <Image
          src={feature.icon}
          height={70}
          width={70}
          className="mx-auto"
          alt="feature_image"
        ></Image>
        <h2 className="text-xl font-bold">{feature.heading}</h2>
        <h4 className="text-gray-500 text-base ">{feature.subHeading}</h4>
      </div>
    </div>
  );
};

export default FeaturesCard;
