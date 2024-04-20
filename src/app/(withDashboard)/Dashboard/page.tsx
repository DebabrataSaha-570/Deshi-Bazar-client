import { TProduct } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashBoard = async () => {
  const res = await fetch(
    "https://deshi-bazar-server.vercel.app/api/v1/products",
    {
      // const res = await fetch("http://localhost:5000/api/v1/products", {
      cache: "no-store", //data will be loaded on every  request. Data will not be cached.
    }
  );
  const products = await res.json();

  return (
    <div>
      <h3 className="text-3xl font-semibold">All Products</h3>

      <div className="overflow-x-auto">
        <table className="table my-5 rounded-md border ">
          <thead className="bg-secondary  text-base text-white ">
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
                        fill
                        style={{ objectFit: "cover" }}
                      ></Image>
                    </div>
                  </div>{" "}
                  {product.title}
                </td>
                <td>{product.categories}</td>
                <td className="underline">
                  <Link href={`products/${product.categories}/${product._id}`}>
                    {product._id}
                  </Link>
                </td>
                <td> &#2547; {product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashBoard;
