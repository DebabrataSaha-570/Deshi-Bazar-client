import { TProduct } from "@/types";
import Image from "next/image";
import React from "react";

const DashBoardAllProducts = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    cache: "no-store", //data will be loaded on every  request. Data will not be cached.
  });
  const products = await res.json();

  return (
    <div>
      <h3 className="text-3xl font-semibold">All Products</h3>

      <div className="overflow-x-auto">
        <table className="table my-5 rounded-md border ">
          <thead className="bg-gray-500  text-base ">
            <tr>
              <th>SL No</th>
              <th>Products</th>
              <th>Category</th>
              <th>Product ID</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product: TProduct, index: number) => (
              <tr key={product._id}>
                <th>{index + 1}</th>
                <td className="flex items-center gap-3">
                  {" "}
                  <div className="avatar">
                    <div className="w-24 rounded-xl">
                      <Image
                        src={product.image_url}
                        alt="product_image"
                        objectFit="cover"
                        layout="fill"
                      ></Image>
                    </div>
                  </div>{" "}
                  {product.title}
                </td>
                <td>{product.categories}</td>
                <td className="underline">{product._id}</td>
                <td> &#2547; {product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoardAllProducts;