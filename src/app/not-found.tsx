import Image from "next/image";
import React from "react";
import errorImage from "../assets/404/404_image_2.jpg";

const NotFoundPage = () => {
  return (
    <div className="">
      <div className="flex items-center justify-center">
        <Image
          width={700}
          height={500}
          className=""
          src={errorImage}
          alt="404_gif"
        ></Image>
      </div>
    </div>
  );
};

export default NotFoundPage;
