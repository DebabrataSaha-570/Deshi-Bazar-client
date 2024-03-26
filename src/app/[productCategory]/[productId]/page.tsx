import CommonLayout from "@/app/(withCommonLayout)/layout";
import Container from "@/components/ui/Container";
import ImageMagnifier from "@/components/ui/ImageMagnifier";
import React from "react";
import { LiaCarSideSolid } from "react-icons/lia";
import { SiHackthebox } from "react-icons/si";

const SingleProductPage = async ({ params }: any) => {
  // console.log("params", params);

  const res = await fetch(
    ` https://deshi-bazar-server.vercel.app/api/v1/product/${params.productId}`,
    // ` http://localhost:5000/api/v1/product/${params.productId}`,
    {
      cache: "no-store", // data wil be load on every request.
    }
  );

  const product = await res.json();
  // console.log("data", product);
  const generateRatingInputs = (rating: number) => {
    const ratingArray = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        ratingArray.push(
          <input
            key={i}
            type="radio"
            name={`rating-${product.title}`}
            className="bg-[#FACA51] mask mask-star-2"
            disabled
          />
        );
      } else {
        ratingArray.push(
          <input
            key={i}
            type="radio"
            name={`rating-${product.title}`}
            className="bg-gray-300 mask mask-star-2"
            disabled
          />
        );
      }
    }

    return ratingArray;
  };

  return (
    <CommonLayout>
      <section className=" mx-auto mb-16">
        <Container className=" mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 ">
            {/* left side */}
            <div className="h-[550px] md:h-[650px]">
              <ImageMagnifier image={product.image_url}></ImageMagnifier>
            </div>

            {/* right side  */}
            <div className="mx-5 my-3 md:my-0  ">
              <h2 className="text-3xl  ">
                {product.title} {product.quantity} {product.quantity_unit}
              </h2>
              <div className="flex items-center my-2 font-normal">
                <h3 className="text-3xl ">&#2547;{product.price} | </h3>
                <div className="rating rating-lg rating-half flex items-center mx-3 ">
                  {generateRatingInputs(product.ratings)}
                  <span className="text-gray-500 mx-3">
                    ({product.total_reviews} review)
                  </span>
                </div>
              </div>
              <hr className="my-3" />

              {/* product detials */}

              <ul className="list-outside list-disc mx-5 space-y-2 font-normal  text-gray-600">
                {product.description.map((sentence: string, index: number) => (
                  <li key={index}> {sentence}</li>
                ))}
              </ul>

              <div className="my-5 text-gray-700 space-y-2 font-normal">
                <p className=" flex  items-center gap-2">
                  <span className="text-[24px] text-gray-400">
                    {" "}
                    <LiaCarSideSolid />
                  </span>
                  Free Bangladesh Shipping on all order over &#2547;2000
                </p>
                <p className=" flex  items-center gap-3">
                  <span className="text-[22px] text-gray-400">
                    {" "}
                    <SiHackthebox />
                  </span>
                  Deliveries in: 3-5 Working Days{" "}
                  <span className="underline">Shipping & Return</span>
                </p>
              </div>
            </div>
          </div>
        </Container>

        {/* description */}
        <section className=" bg-[#F8F8F8] ">
          <div className=" max-w-[1260px] mx-auto px-5 py-16">
            <h2 className="text-3xl mb-5 ">Description</h2>

            <ul className="  font-normal text-gray-600 space-y-3">
              {product?.description?.map((sentence: string, index: number) => (
                <li key={index}> {sentence}</li>
              ))}
            </ul>
          </div>
        </section>
      </section>
    </CommonLayout>
  );
};

export default SingleProductPage;
