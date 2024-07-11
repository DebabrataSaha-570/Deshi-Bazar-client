import React, { useEffect, useState, useTransition } from "react";
import Container from "./Container";
import ProductDetailCarousel from "./ProductDetailCarousel";
import { LiaCarSideSolid } from "react-icons/lia";
import { SiHackthebox } from "react-icons/si";
import { TProduct } from "@/types";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductReview from "./ProductReview";
import AddToCart from "./AddToCart";

const ProductDetails = async ({ productId }: { productId: string }) => {
  const [product, setProduct] = useState<TProduct | null>(null);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState("");

  const ratingsArray = product?.reviews;
  let ratingAverage = 0;
  // Check if ratingsArray exists and has length
  if (ratingsArray?.length) {
    const ratingSum = ratingsArray.reduce((acc, curr) => acc + curr.rating, 0);

    // Calculate average rating
    ratingAverage = ratingSum / ratingsArray.length;
  } else {
    // console.log("No reviews found.");
  }

  useEffect(() => {
    startTransition(() => {
      fetchProductData();
    });
  }, []);

  const fetchProductData = async () => {
    try {
      const res = await fetch(
        ` https://deshi-bazar-server.vercel.app/api/v1/product/${productId}`,
        {
          next: { revalidate: 30 },
        }
      );
      const productData = await res.json();

      setProduct(productData);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setError("Error fetching product data. Please try again later.");
    }
  };

  if (isPending) {
    return (
      <div className=" flex justify-center items-center h-screen">
        <span className="loading loading-bars  loading-lg"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <h2 className="text-xl text-red-500">{error}</h2>
      </div>
    );
  }

  const generateRatingInputs = (rating: number | undefined) => {
    const ratingArray = [];

    for (let i = 1; i <= 5; i++) {
      const currentRating = rating !== undefined ? rating : 0;
      if (i <= currentRating) {
        ratingArray.push(
          <input
            key={i}
            type="radio"
            name={`rating-${product?.title}`}
            className="bg-[#FACA51] mask mask-star-2"
            disabled
          />
        );
      } else {
        ratingArray.push(
          <input
            key={i}
            type="radio"
            name={`rating-${product?.title}`}
            className="bg-gray-300 mask mask-star-2"
            disabled
          />
        );
      }
    }

    return ratingArray;
  };

  return (
    <>
      {product && (
        <section className=" mx-auto mb-16">
          <Container className=" mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 ">
              {/* left side */}
              <div className="">
                <ProductDetailCarousel
                  image1={product?.first_image}
                  image2={product?.second_image}
                  image3={product?.third_image}
                  image4={product?.fourth_image}
                ></ProductDetailCarousel>
              </div>

              {/* right side  */}
              <div className="mx-5 my-3 md:my-0  ">
                <h2 className="text-3xl  ">
                  {product?.title} {product?.quantity} {product?.quantity_unit}
                </h2>
                <div className="flex items-center my-2 font-normal">
                  <h3 className="text-3xl ">&#2547;{product?.price} | </h3>
                  <div className="rating rating-lg rating-half flex items-center mx-3 ">
                    {generateRatingInputs(ratingAverage)}
                    <span className="text-gray-500 mx-3">
                      ({product?.reviews.length} review)
                    </span>
                  </div>
                </div>
                <hr className="my-3" />

                {/* product detials */}

                <ul className="list-outside list-disc mx-5 space-y-2 font-normal  text-gray-600">
                  {product?.description.map(
                    (sentence: string, index: number) => (
                      <li key={index}> {sentence}</li>
                    )
                  )}
                </ul>

                {/* Add to cart feature */}
                <AddToCart></AddToCart>

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

          {/* tabs */}
          <section className=" bg-[#F8F8F8] ">
            <div className=" max-w-[1260px] mx-auto px-5 py-16">
              <Tabs>
                <TabList className="tabs tabs-boxed bg-gray-400 max-w-80">
                  <Tab className="tab ">
                    <h2 className="text-2xl mb-5 ">Description</h2>
                  </Tab>
                  <Tab className="tab ">
                    <h2 className="text-2xl mb-5 ">Reviews</h2>
                  </Tab>
                </TabList>

                <TabPanel>
                  <div className="my-10">
                    <ul className="  font-normal text-gray-600 space-y-3">
                      {product?.description?.map(
                        (sentence: string, index: number) => (
                          <li key={index}> {sentence}</li>
                        )
                      )}
                    </ul>
                  </div>
                </TabPanel>
                <TabPanel>
                  <ProductReview product={product}></ProductReview>
                </TabPanel>
              </Tabs>
            </div>
          </section>
        </section>
      )}
    </>
  );
};

export default ProductDetails;
