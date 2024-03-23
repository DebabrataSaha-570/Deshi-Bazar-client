import { TProduct } from "@/types";
import Image from "next/image";
import React from "react";
import { LuPlusCircle } from "react-icons/lu";

const ProductCard = ({ product }: { product: TProduct }) => {
  const percentage =
    ((product.price - product.previous_price) / product.previous_price) * 100;

  return (
    <div className="  rounded-md  cursor-pointer  h-[400px] p-3 border hover:border-black transition duration-500">
      <div className="relative">
        <Image
          src={product.image_url}
          alt="product_image"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "320px", height: "320px" }}
          // style={{ width: "100%", height: "100%" }}
          className="object-cover  "
        ></Image>
        <p className="px-3 py-1 rounded-full bg-gray-700 text-white inline-block absolute top-0 text-sm">
          {parseInt(percentage.toString())}%
        </p>
      </div>
      <div>
        <h3 className="text-xl hover:text-[--mediumGreen] transition duration-300 ">
          {product.title}
        </h3>
        <div className="flex justify-between items-center ">
          <div className="flex gap-2">
            <p className="text-gray-500 line-through text-base ">
              &#2547;{product.previous_price}
            </p>
            <p>&#2547;{product.price}</p>
          </div>
          <span>
            <LuPlusCircle className="text-[20px]" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
